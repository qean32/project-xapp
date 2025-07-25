import React from "react"

export const useMessage = () => {
    const [message, setMessage] = React.useState('')
    const [files, setFiles] = React.useState<{ file: File, name: string }[]>([])

    const changeHandlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {

            setFiles([...e.target.files].map(item => { return { file: item, name: item.name } }))
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