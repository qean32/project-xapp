import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    fn: () => void
}


export const ClickHocFn: React.FC<Props> = React.memo(({ className, children, fn }: Props) => {
    return (
        <div className={cn('fit-content', className)} onClick={fn} >
            {children}
        </div>
    )
}
)