import './SkeletonCard.scss'

export function SkeletonCard() {
    return (
        <article className="skeleton-card" aria-hidden="true">
            <div className="skeleton-card__content">
                <div className="skeleton-card__line skeleton-card__line--title shimmer" />
                <div className="skeleton-card__line skeleton-card__line--subtitle shimmer" />
                <div className="skeleton-card__meta">
                    <div className="skeleton-card__line shimmer" />
                    <div className="skeleton-card__line shimmer" />
                    <div className="skeleton-card__line shimmer" />
                    <div className="skeleton-card__line shimmer" />
                    <div className="skeleton-card__line shimmer" />
                    <div className="skeleton-card__line shimmer" />
                    <div className="skeleton-card__line shimmer" />
                </div>
            </div>

            <div className="skeleton-card__avatar shimmer" />
        </article>
    )
}