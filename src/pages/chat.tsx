import { LeftNavigate } from "../component/general"
import { DftSETPage } from "../component/hoc"
import { EnterMessage } from "../component/shared"
import { Message, RightClickMessageWindowComponent } from "../component/shared"
import React from 'react'
import { changeTitle } from "../lib/function"

export const Chat = () => {
    changeTitle('мессенджер')
    
    return (
        <main>
            <LeftNavigate />
            <RightClickMessageWindowComponent />
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
    return (
        <div className="flex flex-col-reverse gap-5 py-6 overflow-y-scroll">
            <Message />
            <Message />
            <Message />
        </div>
    )
})