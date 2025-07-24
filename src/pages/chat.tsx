import { LeftNavigate } from "../component/general"
import { DftSETPage } from "../component/hoc"
import { EnterMessage } from "../component/shared"
import { Message, RightClickMessageWindowComponent } from "../component/shared"
import React from 'react'
import { changeTitle } from "../lib/function"
import { useChat, useHookScroll, usePage, useUserInfo } from "../lib/castom-hook"
import { ScrollHandler } from "../component/ui"

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
    const user = useUserInfo();
    useHookScroll(refParent);

    return (
        <div className="flex flex-col-reverse relative gap-5 py-6 overflow-y-scroll" ref={refParent} >
            <RightClickMessageWindowComponent />
            {messages && messages.map((item) => {

                return <Message user={user} message={item} key={item.id} />
            })}

            <ScrollHandler refHandler={refHandler} />
        </div>
    )
})