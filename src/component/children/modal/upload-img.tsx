import React from 'react'
import { cn, generateId, renameFile } from '../../../lib/function'
import { Button } from '../../ui'
import { useBoolean } from '../../../lib/castom-hook'

interface Props {
    className?: string
}


export const UploadImgChild: React.FC<Props> = ({ className }: Props) => {
    const id = generateId().toString()
    const [src, setSrc] = React.useState<any>([]);
    const { bool, off, on } = useBoolean(false)

    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
        // @ts-ignore
        setValue(renameFile(e))
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        off()
    }
    const dragStartHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        on()
    }
    const dropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        e.dataTransfer.files && setSrc([e.dataTransfer.files[0]])
        // @ts-ignore
        setValue(renameFile(e))
    }

    return (
        <div className={cn('relative', className)}>
            <div className='small-ava ava absolute right-[-30%]' style={{ backgroundImage: `url(${urls[0]})` }} ></div>
            <Button title='сохранить' function_={() => { }} className='absolute bottom-[-25%]' />
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' style={{ display: 'none' }} id={id} onChange={changeHandler} />
            <label
                className="flex p-0 cursor-pointer pointer-events-auto justify-center items-center w-[400px] h-[300px] modal-upload"
                htmlFor={id}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={e => dragStartHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => dropHandler(e)}
            >
                {bool ? <img src="./svg/plus.svg" alt="" width={50} /> : <img src="./svg/upload.svg" alt="" width={50} />}
            </label>
        </div>
    )
}
