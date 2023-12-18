import { BikeData } from "../../types"

export type BikeFilter = {
    page?: number,
    per_page?: number
}

export type DataContextProps = {
    data?: BikeData[]
    isLoading?: boolean
    err?: string
    filter?: BikeFilter,
    lastPage?: number
    setFilter?: (filter: ((filter: BikeFilter) => BikeFilter) | BikeFilter) => void
    setPage?: (pageNumber: number) => void
}