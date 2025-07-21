import React from 'react'
import { crossImg } from '../import'

interface Props {
    files: { file: FileList, name: string }[]
    clickHandler: () => void
}


export const FilesInMessage: React.FC<Props> = ({ files, clickHandler }: Props) => {
    return (
        <div className="flex flex-col gap-2 px-3 relative">
            {files.length && files?.map(item => {
                return <div key={item.name}>{item.name}</div>
            })}
            <img src={crossImg} alt="" className="cursor-pointer absolute right-2 top-0" onClick={clickHandler} />
        </div>
    )
}
