import type { User } from '../../types'
import './UserCard.scss'

type UserCardProps = {
    user: User
}

export function UserCard({ user }: UserCardProps) {
    const fullName = `${user.firstName} ${user.lastName}`

    return (
        <article className="user-card">
            <div className="user-card__content">
                <h3 className="user-card__title">{fullName}</h3>
                <p className="user-card__subtitle">@{user.username}</p>

                <ul className="user-card__meta">
                    <li>
                        <span>Почта:</span> {user.email}
                    </li>
                    <li>
                        <span>Телефон:</span> {user.phone}
                    </li>
                    <li>
                        <span>Возраст:</span> {user.age}
                    </li>
                    <li>
                        <span>Место работы:</span> {user.company.name}
                    </li>
                    <li>
                        <span>Роль:</span> {user.role}
                    </li>
                    <li>
                        <span>Город проживания:</span> {user.address.city}
                    </li>
                </ul>
            </div>
            <img className="user-card__avatar" src={user.image} alt={fullName} />
        </article>
    )
}