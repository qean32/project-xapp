import React, { useState } from "react"
import { useDebounce } from "./use-debounce"

export const useSearch = <T,>(array: T[], searchField: keyof T) => {
    const [search, setSearch] = React.useState('')
    const deboucedSearch = useDebounce(search, 100)
    const [results, setResults] = useState<T[]>(array)

    React.useEffect(() => {
        if (deboucedSearch && array.length)
            // @ts-ignore
            setResults(array.filter(item => item[searchField].toLowerCase().includes(deboucedSearch.toLowerCase())))
        else if (results.length != array.length) {
            setResults(array)
        }
    }, [deboucedSearch, array])

    const searchFuncttion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return { results, searchFuncttion }
}