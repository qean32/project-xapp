import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const Search: React.FC<Props> = React.memo(({ className }: Props) => {
    return (
        <div className={cn('flex justify-center items-center fit-content', className)}>
            <input type="search" placeholder='поиск..' />
            <img src="./svg/search.svg" alt="" style={{ width: '1.3rem', transform: 'translateX(-37px)' }} />
        </div>
    )
}
)