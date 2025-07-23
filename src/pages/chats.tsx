import { DftSETPage, GroupContainer } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { changeTitle, getDataId } from "../lib/function"
import { Chat } from "../component/shared"
import { useNavigate } from "react-router-dom"
import { useChat, usePage } from "../lib/castom-hook"
import { messageService } from "../service/message-service"
import React from "react"

export const Chats = () => {
    changeTitle('мессенджер')
    usePage()
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = getDataId(e.target)
        id && navigate('/chat/' + id)
    }
    const { messages } = useChat({ userRoom: true });
    React.useEffect(() => {
        console.log(messages)
    }, [messages])

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <GroupContainer
                    RQkey="chats"
                    Component={Chat}
                    clickHandler={clickHandler}
                    fatchFn={messageService.getChats}
                    take={10}
                    componentPropsName="chat"
                />
            </DftSETPage>
        </main>
    )
}