// @ts-nocheck

import { LeftNavigate } from "../component/general"
import { DftSETPage } from "../component/hoc"
import { EnterMessage } from "../component/shared"
import { Message, RightClickMessageWindowComponent } from "../component/shared"
import React from 'react'
import { changeTitle } from "../lib/function"
import { useChat, useHandlerScroll } from "../lib/castom-hook"

export const Chat = () => {
    changeTitle('мессенджер')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <div className="px-12 pt-8 flex flex-col justify-between h-100">
                    <GroupMessages />
                    <EnterMessage />
                </div>

            </DftSETPage>
        </main>
    )
}


const GroupMessages: React.FC<{}> = React.memo(() => {
    const {
        getPrevMessage,
        messages,
        offset,
        removeMessage,
        sendMessage,
        typing,
        updateMessage,
        valueTyping,
        viewMessage,
    } = useChat(1);
    const { bool, refHandler, refParent } = useHandlerScroll(70, "bottom")

    React.useEffect(() => {
        if (bool) {
            console.log('bool')
        }
    }, [bool])

    return (
        <div className="flex flex-col-reverse relative gap-5 py-6 pb-11 overflow-y-scroll" ref={refParent} >
            <RightClickMessageWindowComponent />
            {valueTyping && <p className="fixed top-2 py-2">Собеседник печатает...</p>}

            {messages && messages.map((item) => {

                return <Message message={item} key={item.id} />
            })}

            <div className="w-100 min-h-[1px]" ref={refHandler} ></div>
        </div>
    )
})