import React from "react"
import { IsImageFile } from "../../lib/function"
import { uploadfilemessageImg } from "../import"
import { createPortal } from "react-dom"
import { useBoolean } from "../../lib/castom-hook"
import { ImgModal } from "../children"
import { ModalSET } from "../general"


type Props = {
    path: string
}

export const FileInMessage: React.FC<Props> = ({ path }: Props) => {
    const { boolean, swap } = useBoolean(false)
    return (
        <>
            {!IsImageFile(path) ?
                <a className="py-2 flex gap-5 transform-right items-end" href={path} download={''} >
                    <img src={uploadfilemessageImg} alt="" width={'30px'} />
                    <p className="text-ellipsis w-[80%] overflow-hidden">{path.split('/').at(-1)}</p>
                </a>
                :
                <>
                    {boolean && createPortal(
                        <ModalSET fn={swap} className="items-start justify-start" classNameWindow="modal-add-playlist-anim h-100 rounded-none" >
                            <ImgModal path={path} />
                        </ModalSET>, document.body)}
                    <img src={path} className="bg-color-dark max-w-[45%] rounded-lg" onClick={swap} />
                </>
            }
        </>
    )
}