import { useEffect, useMemo, useState } from 'react'
import { PageContainer } from './components/PageContainer/PageContainer'
import { Pagination } from './components/Pagination/Pagination'
import { SearchInput } from './components/SearchInput/SearchInput'
import { SkeletonGrid } from './components/SkeletonGrid/SkeletonGrid'
import { StatusView } from './components/StatusView/StatusView'
import { UserGrid } from './components/UserGrid/UserGrid'
import { useDebouncedValue } from './hooks/useDebouncedValue'
import { useUsers } from './hooks/useUsers'
import {
    getPageFromSearchParams,
    getSearchFromSearchParams,
    updateBrowserQueryParams,
} from './utils/queryParams'
import './App.scss'

const PAGE_SIZE = 10

export default function App() {
    const initialSearchParams = useMemo(
        () => new URLSearchParams(window.location.search),
        []
    )

    const [search, setSearch] = useState(
        getSearchFromSearchParams(initialSearchParams)
    )
    const [page, setPage] = useState(getPageFromSearchParams(initialSearchParams))

    const debouncedSearch = useDebouncedValue(search, 400)

    useEffect(() => {
        setPage(1)
    }, [debouncedSearch])

    useEffect(() => {
        updateBrowserQueryParams({
            page,
            search: debouncedSearch,
        })
    }, [page, debouncedSearch])

    const { users, total, isLoading, error } = useUsers({
        page,
        limit: PAGE_SIZE,
        search: debouncedSearch,
    })

    return (
        <PageContainer>
            <header className="catalog-header">
                <div>
                    <h1 className="catalog-title">Каталог пользователей</h1>
                </div>

                <div className="catalog-header__actions">
                    <SearchInput value={search} onChange={setSearch} />
                </div>
            </header>


            <main className="catalog-content">
                {isLoading ? (
                    <SkeletonGrid count={PAGE_SIZE} />
                ) : error ? (
                    <StatusView title="Что-то пошло не так" description={error} variant="error"/>
                ) : users.length === 0 ? (
                    <StatusView title="Нет совпадений" description="Попробуй другое Имя."/>
                ) : (
                    <UserGrid users={users} />
                )}
            </main>
            <section className="catalog-summary">
                <span>Всего: {total}</span>
                <span>Страница: {page}</span>
            </section>

            {!isLoading && !error && users.length > 0 ? (
                <Pagination currentPage={page} totalItems={total} pageSize={PAGE_SIZE} onPageChange={setPage}/>
            ) : null}
        </PageContainer>
    )
}