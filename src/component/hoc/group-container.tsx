import React from 'react'
import { cn } from '../../lib/function'
import { useDinamickPagination, useHookScroll } from '../../lib/castom-hook';
import { userService } from '../../service/user-service';
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
    search?: string
    clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    componentPropsName: string
}

// @ts-ignore
export const GroupContainer: React.FC<Props_> = ({ className, search = '', Component, clickHandler, componentPropsName }: Props_) => {
    const { refHandler, refParent, finaldata: array, offset } = useDinamickPagination(() => userService.getUsers(offset, 2), ['community'], 2)

    React.useEffect(() => {
        if (search)
            console.log(search)
    }, [search])

    return (
        <>
            {/* <Loader /> */}
            <div className={cn("flex flex-col max-h-[90%] relative overflow-scroll", className)} onClick={clickHandler} ref={refParent}>
                {array && array.map((item, i) => {

                    return <Component key={i} {...{ [componentPropsName]: item }} />
                })}
                <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            </div >
        </>
    )
}
