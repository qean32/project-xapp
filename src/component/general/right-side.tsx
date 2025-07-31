import React from 'react'
import { cn } from '../../lib/function'
import { Ava } from '../shared'
import { useUserInfo } from '../../lib/castom-hook'

interface Props {
    className?: string
}


export const RightSide: React.FC<Props> = React.memo(({ className }: Props) => {
    const { ava, name } = useUserInfo()

    return (
        <div className={cn('mt-12 min-w-[270px] right-side-adaptive', className)}>
            <div className="flex justify-between mb-8">
                <h2>{name}</h2>
                <Ava avaPath={ava} />
            </div>
        </div>
    )
}
)