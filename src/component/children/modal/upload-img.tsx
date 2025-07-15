import React from 'react'
import { generateId, renameFile } from '../../../lib/function'
import { Button } from '../../ui'
import { useBoolean } from '../../../lib/castom-hook'
import { plusImg, uploadImg } from '../../ui/img'

interface Props {
}


export const UploadImgChild: React.FC<Props> = ({ }: Props) => {
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
        <>
            <div className='small-ava ava absolute right-[-30%]' style={{ backgroundImage: `url(${urls[0]})` }} ></div>
            <Button title='сохранить' function_={() => { }} className='absolute bottom-[-25%]' />
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' className='display-none' id={id} onChange={changeHandler} />
            <label
                className="flex p-0 cursor-pointer pointer-events-auto justify-center items-center w-[400px] h-[300px] modal-upload"
                htmlFor={id}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={e => dragStartHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => dropHandler(e)}
            >
                {bool ? <img src={plusImg} alt="" width={50} /> : <img src={uploadImg} alt="" width={50} />}
            </label>
        </>
    )
}
