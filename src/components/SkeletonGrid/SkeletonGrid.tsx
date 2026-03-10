import { SkeletonCard } from '../SkeletonCard/SkeletonCard'
import './SkeletonGrid.scss'

type SkeletonGridProps = {
    count?: number
}

export function SkeletonGrid({ count = 10 }: SkeletonGridProps) {
    return (
        <div className="skeleton-grid">
            {Array.from({ length: count }, (_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}