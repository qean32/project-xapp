import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { UploadImgChild } from '../children'
import { ModalSET } from '../general'

interface Props {
    className?: string
    avaPath: string
}


export const Ava: React.FC<Props> = ({ className, avaPath }: Props) => {
    const { bool, swap } = useBoolean(false)

    return (
        <>
            {bool && createPortal(
                <ModalSET fn={swap} className="items-center justify-center" classNameWindow="modal-upload-anim" >
                    <UploadImgChild />
                </ModalSET>, document.body)}

            <div
                className={cn('ava small-ava bg-color-light cursor-pointer', className)}
                onClick={swap}
                style={{ backgroundImage: `url(${avaPath})` }}
            >
            </div>
        </>
    )
}
