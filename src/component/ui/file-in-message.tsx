import React from "react"
import { IsImageFile } from "../../lib/function"
import { uploadfilemessageImg } from "./img"


type Props = {
    path: string
}

export const FileInMessage: React.FC<Props> = ({ path }: Props) => {
    return (
        <>
            {IsImageFile(path) ?
                <a className="py-2 flex gap-5 transform-right" href={path} download={''} >
                    <img src={uploadfilemessageImg} alt="" width={'30px'} />
                    <p className="text-ellipsis w-[80%] overflow-hidden">{path.split('/').at(-1)}</p>
                </a>
                :
                <img src={path} className="bg-color-dark max-w-[45%] rounded-lg" />
            }
        </>
    )
}