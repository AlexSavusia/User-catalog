import './SearchInput.scss'

type SearchInputProps = {
    value: string
    onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="search-input">
            <input className="search-input__field" type="text" placeholder="Поиск по имени" value={value} onChange={(event) => onChange(event.target.value)}/>
        </div>
    )
}