import React from "react";

type Props = {
}

export const EnterMessage: React.FC<Props> = ({ }: Props) => {
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

    const submitHandler = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault()

        console.log(message, files)
    }

    return (
        <div className="plate-color bg-color-light px-2 rounded-lg mb-5">
            <form className='w-100 flex gap-4 py-1 z-10' onSubmit={submitHandler} >

                <InputFile changeHandler={changeHandlerFile} />
                <input type='comment' className='input-commnet' placeholder='сообщение'
                    value={message} onChange={changeHandlerMessage} />

                <button><img src="./svg/send-message.svg" width={'36px'} /></button>
            </form>
        </div >
    );
}

type Props_ = {
    changeHandler: React.ChangeEventHandler<HTMLInputElement>
}

const InputFile: React.FC<Props_> = ({ changeHandler }: Props_) => {
    return (
        <>
            <input type="file" className="display-none" id="y1" onChange={changeHandler} />
            <label htmlFor="y1" className="fit-content pointer-events-auto" ><img src="./svg/upload-file-message.svg" width={'30px'} /></label>
        </>
    )
}