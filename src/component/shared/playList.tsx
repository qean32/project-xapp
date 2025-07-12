import React from 'react'

interface Props {
}


export const PlayList: React.FC<Props> = ({ }: Props) => {
    return (
        <div className='flex gap-5 py-3 px-5 music transition03 cursor-pointer w-[400px]' data-id={'1'} >
            <div className="small-ava pointer-events-none"></div>
            <p className='text-nowrap pt-1 text-ellipsis overflow-hidden pointer-events-none'>НАЗВАНИЕ НАЗВАНИЕ</p>
        </div>
    )
}
