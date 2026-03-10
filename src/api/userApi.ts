import type {UsersQueryParams, UsersResponse} from '../types'

const BASE_URL = 'https://dummyjson.com/users'

export async function fetchUsers(
    params: UsersQueryParams,
    signal?: AbortSignal
): Promise<UsersResponse> {
    const { page, limit, search } = params
    const skip = (page - 1) * limit

    const url = search.trim()
        ? `${BASE_URL}/search?q=${encodeURIComponent(search.trim())}&limit=${limit}&skip=${skip}`
        : `${BASE_URL}?limit=${limit}&skip=${skip}`

    const response = await fetch(url, { signal })

    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`)
    }

    return await response.json()
}