export type User = {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    domain: string
    ip: string
    macAddress: string
    university: string
    ein: string
    ssn: string
    userAgent: string
    role: string
    address: {
        address: string
        city: string
        state: string
        stateCode: string
        postalCode: string
        coordinates: {
            lat: number
            lng: number
        }
        country: string
    }
    bank: {
        cardExpire: string
        cardNumber: string
        cardType: string
        currency: string
        iban: string
    }
    company: {
        department: string
        name: string
        title: string
        address: {
            address: string
            city: string
            state: string
            stateCode: string
            postalCode: string
            coordinates: {
                lat: number
                lng: number
            }
            country: string
        }
    }
}

export type UsersResponse = {
    users: User[]
    total: number
    skip: number
    limit: number
}

export type UsersQueryParams = {
    page: number
    limit: number
    search: string
}