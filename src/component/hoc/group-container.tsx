import React from 'react'
import { cn, getDataId } from '../../lib/function'
import { useNavigate } from 'react-router-dom';
import { useHandlerScroll } from '../../lib/castom-hook';
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

            <div className="flex flex-col max-h-[80%] relative overflow-scroll" onClick={clickHandler} >
                {children}
            </div>
        </div>
    )
}


interface Props_ {
    className?: string
    fn: React.MouseEventHandler<HTMLDivElement>
    children: React.ReactNode
    swap: () => void
}


export const GroupContainer: React.FC<Props_> = ({ className, fn, children, swap }: Props_) => {
    const { bool, refHandler, refParent } = useHandlerScroll()

    React.useEffect(() => {
        swap()
    }, [bool])
    return (
        <>
            {/* <Loader /> */}
            <div className={cn("flex flex-col max-h-[90%] relative overflow-scroll", className)} onClick={fn} ref={refParent} id='zxc' >
                {children}
                <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            </div >
        </>
    )
}