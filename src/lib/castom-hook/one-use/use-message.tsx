import React from "react"

export const useMessage = () => {
    const [message, setMessage] = React.useState('')
    const [files, setFiles] = React.useState<{ file: FileList, name: string }[]>([])

    const changeHandlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {

            // @ts-ignore
            setFiles(prev => [...prev, { buffer: e.target.files, name: e.target.files[0].name }])
        }
    }

    const changeHandlerMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const unset = () => {
        setMessage('')
        setFiles([])
    }

    return { message, files, changeHandlerFile, changeHandlerMessage, unset, setMessage }
}