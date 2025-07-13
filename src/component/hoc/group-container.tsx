import React from 'react'
import { cn, getDataId } from '../../lib/function'
import { useNavigate } from 'react-router-dom';
// import { Loader } from '../ui';

interface Props {
    className?: string
    Component: React.FC | React.ReactNode | any
    link: string
}


export const GroupContainerLink: React.FC<Props> = ({ className, Component, link }: Props) => {
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate(link + getDataId(e.target))
    }

    return (
        <div className={cn('', className)}>
            {/* <Loader /> */}

            <div className="flex flex-col max-h-[80%] relative overflow-y-scroll" onClick={clickHandler} >
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}


interface Props_ {
    className?: string
    Component: React.FC | React.ReactNode | any
}


export const GroupContainer: React.FC<Props_> = ({ className, Component }: Props_) => {
    return (
        <div className={cn('', className)}>
            {/* <Loader /> */}

            <div className="flex flex-col max-h-[80%] relative overflow-y-scroll" >
                <Component />
                <Component />
                <Component />
            </div>
        </div>
    )
}