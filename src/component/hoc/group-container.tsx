import React from 'react'
import { cn, getDataId } from '../../lib/function'
import { useNavigate } from 'react-router-dom';
// import { Loader } from '../ui';

interface Props {
    className?: string
    link: string
    children: React.ReactNode
}


export const GroupContainerLink: React.FC<Props> = ({ className, link, children }: Props) => {
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate(link + getDataId(e.target))
    }

    return (
        <div className={cn('', className)}>
            {/* <Loader /> */}

            <div className="flex flex-col max-h-[80%] relative overflow-y-scroll" onClick={clickHandler} >
                {children}
            </div>
        </div>
    )
}


interface Props_ {
    className?: string
    fn: React.MouseEventHandler<HTMLDivElement>
    children: React.ReactNode
}


export const GroupContainer: React.FC<Props_> = ({ className, fn, children }: Props_) => {
    return (
        <div className={cn('', className)}>
            {/* <Loader /> */}
            <div className="flex flex-col max-h-[80%] relative overflow-y-scroll" onClick={fn} >
                {children}
            </div>
        </div>
    )
}