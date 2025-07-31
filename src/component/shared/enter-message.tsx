import React from "react";
import { useChat, useDebounceFunction, useMessage, useUserInfo } from "../../lib/castom-hook";
import { sendmessageImg, uploadfilemessageImg } from "../import";
import { Button, ChangeMessage } from "../ui";
import { useAppDispatch, useAppSelector } from "../../lib/castom-hook/redux";
import { unsetMessage } from "../../store/change-message";
import { FilesInMessage, UserTyping } from ".";

type Props = {
}

export const EnterMessage: React.FC<Props> = ({ }: Props) => {
    const { updateMessage, sendMessage, typing, valueTyping } = useChat({ isTyping: true });
    const { changeHandlerFile, changeHandlerMessage, files, message, unset, setMessage } = useMessage();
    const changeMessage = useAppSelector(state => state.changeMessage)
    const { id } = useUserInfo()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (changeMessage.hashMessage)
            setMessage(changeMessage.hashMessage)

        document.getElementById('inpit_')?.focus()
    }, [changeMessage])


    const submitHandler = () => {
        if (changeMessage.hashMessage) {
            updateMessage({ ...changeMessage, hashMessage: message })
            dispatch(unsetMessage())
            unset()
            return
        }

        sendMessage({ message: message, from: id, files: files })
        dispatch(unsetMessage())
        unset()
    }

    const typing_ = useDebounceFunction(typing, 200)
    const changeHandlerMessage_ = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeHandlerMessage(e)
        typing_()
    }

    const clickHandler = React.useCallback(() => {
        dispatch(unsetMessage())
        unset()
    }, [])

    return (
        <div className="pt-5 plate-color">
            <UserTyping valueTyping={valueTyping} />

            <div className="enter-message bg-color-light py-1 pt-3 pl-2 rounded-md mb-5">
                {changeMessage.hashMessage && <ChangeMessage clickHandler={clickHandler} />}
                {!!files.length && <FilesInMessage clickHandler={clickHandler} files={files} />}

                <form className='w-100 flex gap-4 z-10' onSubmit={submitHandler} >
                    <InputFile changeHandler={changeHandlerFile} />
                    <input type='comment' placeholder='сообщение' id='inpit_'
                        value={message} onChange={changeHandlerMessage_} />

                    <Button place={<img src={sendmessageImg} width={'36px'} alt="" />} function_={submitHandler} />
                </form>
            </div >
        </div>
    );
}

type Props_ = {
    changeHandler: React.ChangeEventHandler<HTMLInputElement>
}

const InputFile: React.FC<Props_> = ({ changeHandler }: Props_) => {
    return (
        <>
            <input type="file" multiple className="display-none" id="y1" onChange={changeHandler} />
            <label htmlFor="y1" className="fit-content pointer-events-auto" ><img src={uploadfilemessageImg} width={'29px'} /></label>
        </>
    )
}