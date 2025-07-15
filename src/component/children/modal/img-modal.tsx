import React from 'react'

interface Props {
    path: string
}


export const ImgModal: React.FC<Props> = ({ path }: Props) => {
    return (
        <>
            <img src={path} alt="" className='max-w-[550px]' />
        </>
    )
}
