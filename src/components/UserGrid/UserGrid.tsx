import type { User } from '../../types'
import { UserCard } from '../UserCard/UserCard'
import './UserGrid.scss'

type UserGridProps = {
    users: User[]
}

export function UserGrid({ users }: UserGridProps) {
    return (
        <div className="user-grid">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}