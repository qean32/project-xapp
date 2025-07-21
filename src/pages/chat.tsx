import { LeftNavigate } from "../component/general"
import { DftSETPage } from "../component/hoc"
import { EnterMessage } from "../component/shared"
import { Message, RightClickMessageWindowComponent } from "../component/shared"
import React from 'react'
import { changeTitle } from "../lib/function"
import { useChat, useHookScroll, usePage, useRequest, useUserInfo } from "../lib/castom-hook"
import { userService } from "../service/user-service"
import { useParams } from "react-router-dom"
import { UserDto } from "../model"

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
    const { id } = useParams<{ id: string }>()
    useHookScroll(refParent);
    // @ts-ignore
    const { finaldata: opponent } = useRequest<UserDto>(() => userService.getUser(id), ['let-user'])

    return (
        <div className="flex flex-col-reverse relative gap-5 py-6 overflow-y-scroll" ref={refParent} >
            <RightClickMessageWindowComponent />
            {messages && messages.map((item) => {

                return <Message user={user} message={item} key={item.id} opponent={opponent[0]} />
            })}

            <div className="w-100 min-h-[1px]" ref={refHandler} ></div>
        </div>
    )
})