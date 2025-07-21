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

type Props = {}

const GroupMessages: React.FC<Props> = React.memo(({ }: Props) => {
    const { messages, refHandler, refParent } = useChat({ getData: true });
    // @ts-ignore
    const { id }: { id: number } = useParams()
    // useHookScroll(refParent)

    return (
        <div className="flex flex-col-reverse relative gap-5 py-6 overflow-y-scroll" ref={refParent} >
            <RightClickMessageWindowComponent />
            {messages && messages.map((item) => {

                return <Message userId={id} message={item} key={item.id} />
            })}

            <div className="w-100 min-h-[1px]" ref={refHandler} ></div>
        </div>
    )
})