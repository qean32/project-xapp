import React from 'react'
import { cn } from '../../lib/function'
import { searchImg } from '../import'
import { useAppDispatch } from '../../lib/castom-hook/redux'
import { setSearch } from '../../store/search'
import { useDebounceFunction } from '../../lib/castom-hook'

interface Props {
    className?: string
}


export const Search: React.FC<Props> = React.memo(({ className }: Props) => {
    const dispatch = useAppDispatch()
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch({ search: e.target.value }))
    }
    const changeHandler = useDebounceFunction(change, 1200)

    return (
        <div className={cn('flex items-center fit-content w-100 my-5 pl-6', className)}>
            <input type="search" placeholder='поиск..' style={{ width: '92%' }} className='py-3 pl-5' onChange={changeHandler} />
            <img src={searchImg} alt="" style={{ width: '1.3rem', transform: 'translateX(-37px)' }} />
        </div>
    )
}
)