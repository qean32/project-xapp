import React from 'react'

interface Props {
    refHandler: React.MutableRefObject<HTMLDivElement | null> | undefined
}


export const ScrollHandler: React.FC<Props> = ({ refHandler }: Props) => {
    return (
         <div className="w-100 min-h-[1px]" ref={refHandler} ></div>
    )
}
