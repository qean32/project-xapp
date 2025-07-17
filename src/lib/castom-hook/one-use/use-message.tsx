import React from "react"

export const useMessage = () => {
    const [message, setMessage] = React.useState('')
    const [files, setFiles] = React.useState<FileList>()

    const changeHandlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {

            setFiles(e.target.files)
        }
    }

    const changeHandlerMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return { message, files, changeHandlerFile, changeHandlerMessage, setMessage }
}