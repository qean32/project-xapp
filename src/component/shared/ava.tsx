import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { UploadImgChild } from '../children'
import { ModalSET } from '../general'
import { serverHost } from '../../export'

interface Props {
    className?: string
    avaPath: string
}


export const Ava: React.FC<Props> = ({ className, avaPath }: Props) => {
    const { boolean, swap } = useBoolean(false)

    return (
        <>
            {boolean && createPortal(
                <ModalSET fn={swap} className="items-center justify-center" classNameWindow="modal-upload-anim" >
                    <UploadImgChild />
                </ModalSET>, document.body)}

            <div
                className={cn('ava small-ava bg-color-light cursor-pointer', className)}
                onClick={swap}
                style={{ backgroundImage: `url(${serverHost}file/${avaPath})` }}
            >
            </div>
        </>
    )
}
