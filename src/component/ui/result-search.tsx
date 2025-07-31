import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const ResultSearch: React.FC<Props> = ({ className }: Props) => {
    return (
        <h2 className={cn("pl-6 mb-5", className)}>РЕЗУЛЬТАТЫ ПОИСКА</h2>
    )
}
