import React from 'react'
import { cn } from '../../lib/function'
import { useDinamickPagination, useHookScroll } from '../../lib/castom-hook';
import { useAppSelector } from '../../lib/castom-hook/redux';
// import { Loader } from '../ui';

interface Props {
    className?: string
    Component: React.ReactNode | React.FC | any
    clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    componentPropsName: string
    array: any[]
}


export const GroupContainerAllData: React.FC<Props> = ({ className, Component, clickHandler, componentPropsName, array }: Props) => {
    const ref = React.useRef<HTMLDivElement | null>(null)
    useHookScroll(ref)

    return (
        <>
            {/* <Loader /> */}
            <div className={cn("flex flex-col max-h-[90%] relative overflow-scroll", className)} onClick={clickHandler} ref={ref} >
                {array && array.map((item, i) => {

                    return <Component key={i} {...{ [componentPropsName]: item }} />
                })}
                <div className='w-100 min-h-[50px]'></div>
            </div >
        </>
    )
}


interface Props_ {
    className?: string
    Component: React.ReactNode | React.FC | any
    fatchFn: Function
    clickHandler: (...args: any) => void
    componentPropsName: string
    take: number
    RQkey: string
}

export const GroupContainer: React.FC<Props_> = ({ className, Component, clickHandler, componentPropsName, fatchFn, take, RQkey }: Props_) => {
    const { search } = useAppSelector(state => state.search);
    const { refHandler, refParent, finaldata: array, skip } = useDinamickPagination(() => fatchFn(skip, take, search), [RQkey], 0, search);
    const clickHandler_ = RQkey == 'music' ? (...args: any) => clickHandler(...args, array) : clickHandler


    return (
        <>
            {/* <Loader /> */}
            <div className={cn("flex flex-col max-h-[90%] relative overflow-scroll", className)} onClick={clickHandler_} ref={refParent}>
                {array && array.map((item, i) => {

                    return <Component key={i} {...{ [componentPropsName]: item }} />
                })}
                <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            </div >
        </>
    )
}