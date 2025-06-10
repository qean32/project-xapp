import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const Search: React.FC<Props> = React.memo(({ className }: Props) => {
    return (
        <div className={cn('flex items-center fit-content w-100', className)}>
            <input type="search" placeholder='поиск..' style={{ width: '90%' }} className='py-3 pl-5' />
            <img src="./svg/search.svg" alt="" style={{ width: '1.3rem', transform: 'translateX(-37px)' }} />
        </div>
    )
}
)