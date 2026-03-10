const DEFAULT_PAGE = 1

export function getPageFromSearchParams(searchParams: URLSearchParams): number {
    const raw = searchParams.get('page')
    const page = Number(raw)

    if (!raw || Number.isNaN(page) || page < 1) {
        return DEFAULT_PAGE
    }

    return page
}

export function getSearchFromSearchParams(searchParams: URLSearchParams): string {
    return searchParams.get('q')?.trim() ?? ''
}

export function updateBrowserQueryParams(params: { page: number; search: string }) {
    const searchParams = new URLSearchParams()

    if (params.page > 1) {
        searchParams.set('page', String(params.page))
    }

    if (params.search.trim()) {
        searchParams.set('q', params.search.trim())
    }

    const queryString = searchParams.toString()
    const nextUrl = queryString ? `?${queryString}` : window.location.pathname

    window.history.replaceState(null, '', nextUrl)
}