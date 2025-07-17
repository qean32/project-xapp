import React from "react";
import { useMessage } from "../../lib/castom-hook";
import { sendmessageImg, uploadfilemessageImg } from "../import";
import { Button, ChangeMessage } from "../ui";
import { useAppDispatch, useAppSelector } from "../../lib/castom-hook/redux";
import { unsetMessage } from "../../store/change-message";

type Props = {
}

export const EnterMessage: React.FC<Props> = ({ }: Props) => {
    const { changeHandlerFile, changeHandlerMessage, files, message, setMessage } = useMessage();
    const { hashMessage } = useAppSelector(state => state.changeMessage)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        setMessage(hashMessage)
    }, [hashMessage])

    const submitHandler = () => {
        if (hashMessage) {
        }

        dispatch(unsetMessage())
        console.log(message, files)
    }

    const clickHandler = React.useCallback(() => {
        dispatch(unsetMessage())
    }, [])

    return (
        <div className="bg-color-light py-1 pt-3 pl-2 rounded-md mb-5">
            {hashMessage && <ChangeMessage clickHandler={clickHandler} />}

            <form className='w-100 flex gap-4 z-10' onSubmit={submitHandler} >
                <InputFile changeHandler={changeHandlerFile} />
                <input type='comment' className='input-commnet' placeholder='сообщение'
                    value={message} onChange={changeHandlerMessage} />

                <Button place={<img src={sendmessageImg} width={'36px'} alt="" />} function_={submitHandler} />
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
            <label htmlFor="y1" className="fit-content pointer-events-auto" ><img src={uploadfilemessageImg} width={'29px'} /></label>
        </>
    )
}