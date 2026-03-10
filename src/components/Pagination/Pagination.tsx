import './Pagination.scss'

type PaginationProps = {
    currentPage: number
    totalItems: number
    pageSize: number
    onPageChange: (page: number) => void
}

export function Pagination({currentPage, totalItems, pageSize, onPageChange}: PaginationProps) {
    const totalPages = Math.ceil(totalItems / pageSize)

    if (totalPages <= 1) {
        return null
    }

    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
    )

    return (
        <nav className="pagination" aria-label="Users pagination">
            <button className="pagination__button" type="button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Назад</button>
            {startPage > 1 && (
                <>
                    <button className="pagination__button" type="button" onClick={() => onPageChange(1)}>
                        1
                    </button>
                    {startPage > 2 && <span className="pagination__dots">...</span>}
                </>
            )}

            {pages.map((page) => (
                <button key={page} className={`pagination__button ${page === currentPage ? 'is-active' : ''}`} type="button" onClick={() => onPageChange(page)}>
                    {page}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="pagination__dots">...</span>}
                    <button className="pagination__button" type="button" onClick={() => onPageChange(totalPages)} >
                        {totalPages}
                    </button>
                </>
            )}

            <button className="pagination__button" type="button" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                Вперед
            </button>
        </nav>
    )
}