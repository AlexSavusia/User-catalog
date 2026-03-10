import type { PropsWithChildren } from 'react'
import './PageContainer.scss'

export function PageContainer({ children }: PropsWithChildren) {
    return (
        <div className="page">
            <div className="page__container">{children}</div>
        </div>
    )
}