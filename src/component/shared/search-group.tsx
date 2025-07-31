import React from 'react'
import { ResultSearch, Search } from '../ui'

interface Props {
}


export const SearchGroup: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            <Search />
            <ResultSearch />
        </>
    )
}
