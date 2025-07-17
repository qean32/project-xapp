import React from 'react'
import { DefaultContiner } from '.'
import { RightSide } from '../general'

interface Props {
    children?: React.ReactNode
}


export const DftSETPage: React.FC<Props> = React.memo(({ children }: Props) => {
    return (
        <>
            <div className="flex gap-12 justify-center adaptive-center-parent" style={{ flex: 1 }}>
                <DefaultContiner className="h-100 pb-[90px] pt-12 adaptive-center w-[740px]">
                    {children}
                </DefaultContiner>
                <RightSide />
            </div >
        </>
    )
})
