import { LeftNavigate } from "../component/general"
import { DftSETPage } from "../component/hoc"
import { EnterMessage } from "../component/shared"
import { Message, RightClickMessageWindowComponent } from "../component/shared"
import React from 'react'
import { changeTitle } from "../lib/function"
import { useChat, useHandlerScroll, useHookScroll, usePage } from "../lib/castom-hook"
import { useParams } from "react-router-dom"

export const Chat = () => {
    changeTitle('мессенджер');
    usePage();
    const socket = useChat();

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <div className="px-12 pt-8 flex flex-col justify-between h-100">

                    <GroupMessages socket={socket} />
                    <EnterMessage
                        updateMessage={socket.updateMessage}
                        sendMessage={socket.sendMessage}
                    />
                </div>

            </DftSETPage>
        </main>
    )
}

type Props = { socket: ReturnType<typeof useChat> }

const GroupMessages: React.FC<Props> = React.memo(({ socket }: Props) => {
    // @ts-ignore
    const { id }: { id: number } = useParams()
    const { refHandler, refParent } = useHandlerScroll(70, "bottom")
    useHookScroll(refParent)

    return (
        <div className="flex flex-col-reverse relative gap-5 py-6 overflow-y-scroll" ref={refParent} >
            <RightClickMessageWindowComponent />

            {socket.valueTyping && <p className="fixed top-3 py-2">Собеседник печатает...</p>}

            {socket.messages && socket.messages.map((item) => {

                return <Message userId={id} message={item} key={item.id} />
            })}

            <div className="w-100 min-h-[1px]" ref={refHandler} ></div>
        </div>
    )
})