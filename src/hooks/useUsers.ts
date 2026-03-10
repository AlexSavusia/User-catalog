import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/userApi'
import type { User, UsersQueryParams } from '../types'

type UseUsersResult = {
    users: User[]
    total: number
    isLoading: boolean
    error: string | null
}

export function useUsers(params: UsersQueryParams): UseUsersResult {
    const { page, limit, search } = params

    const [users, setUsers] = useState<User[]>([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController()

        const loadUsers = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const data = await fetchUsers({ page, limit, search }, controller.signal)

                if (controller.signal.aborted) return

                setUsers(data.users)
                setTotal(data.total)
            } catch (err) {
                if ((err as Error).name === 'AbortError') return
                setError('Произошла ошибка. Попробуйте позже.')

            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }

        void loadUsers()

        return () => controller.abort()

    }, [page, limit, search])

    return {users, total, isLoading, error}
}