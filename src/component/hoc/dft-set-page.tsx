import React from 'react'
import { BottomTool, TopMenu } from '../shared'
import { DefaultContiner } from '.'
import { RightSide } from '../general'

interface Props {
    children?: React.ReactNode
}


export const DftSETPage: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <TopMenu />
            <BottomTool />

            <div className="flex gap-12 justify-center" style={{ flex: 1 }}>
                <DefaultContiner className="h-100 pb-[90px] pt-5 adaptive-center w-[760px]">
                    {children}
                </DefaultContiner>
                <RightSide />
            </div >
        </>
    )
}
