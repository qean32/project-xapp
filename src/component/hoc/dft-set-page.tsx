import React from 'react'
import { BottomTool, TopMenu } from '../shared'

interface Props {
}


export const DftSETPage: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            <TopMenu />
            <BottomTool />
        </>
    )
}
