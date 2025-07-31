import React from 'react'
import { generateId, setToken } from '../../../lib/function'
import { Button } from '../../ui'
import { useBoolean } from '../../../lib/castom-hook'
import { plusImg, uploadImg } from '../../import'
import { useMutation } from 'react-query'
import { userService } from '../../../service/user-service'

interface Props {
}


export const UploadImgChild: React.FC<Props> = ({ }: Props) => {
    const id = generateId().toString()
    const [src, setSrc] = React.useState<any>([]);
    const { boolean, off, on } = useBoolean(false)

    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
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
    }

    const establishFile = useMutation(() => userService.updateUser(returnformData())
        .then(data => setToken(data))
        .then(() => location.reload()))
    const returnformData = () => {
        const data = new FormData()
        // @ts-ignore
        data.append('ava', document.getElementById(id).files[0])

        return data
    }


    const saveHandler = () => {
        establishFile.mutate()
    }

    return (
        <>
            <div className='small-ava ava absolute right-[-30%]' style={{ backgroundImage: `url(${urls[0]})` }} ></div>
            <Button place='сохранить' function_={saveHandler} className='absolute bottom-[-25%]' />
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' className='display-none' id={id} onChange={changeHandler} />
            <label
                className="flex p-0 cursor-pointer pointer-events-auto justify-center items-center w-[400px] h-[300px] modal-upload"
                htmlFor={id}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={e => dragStartHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => dropHandler(e)}
            >
                {boolean ? <img src={plusImg} alt="" width={50} /> : <img src={uploadImg} alt="" width={50} />}
            </label>
        </>
    )
}
