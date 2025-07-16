import React, { useState } from "react"
import { useDebounce } from "../use-debounce"

export const useSearch = <T,>(array: T[], searchField: string, secondSearchField: string = '') => {
    const [search, setSearch] = React.useState('')
    const deboucedSearch = useDebounce(search, 100)
    const [results, setResults] = useState<T[]>(array)

    React.useEffect(() => {
        if (deboucedSearch)
            // @ts-ignore
            setResults(array.filter(item => item[searchField].toLowerCase().includes(deboucedSearch.toLowerCase())
                ||
                // @ts-ignore
                (secondSearchField ? item[secondSearchField].toLowerCase().includes(deboucedSearch.toLowerCase()) : false)))
        else
            setResults(array)
    }, [deboucedSearch])

    const searchFuncttion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return { results, searchFuncttion }
}