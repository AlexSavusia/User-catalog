import './StatusView.scss'

type StatusViewProps = {
    title: string
    description?: string
    variant?: 'default' | 'error'
}

export function StatusView({title, description, variant = 'default'}: StatusViewProps) {
    return (
        <div className={`status-view status-view--${variant}`}>
            <h2 className="status-view__title">{title}</h2>
            {description ? <p className="status-view__description">{description}</p> : null}
        </div>
    )
}