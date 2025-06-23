import { DftSETPage } from "../component/hoc"
import { EnterMessage } from "../component/shared"
import { LeftNavigate, Message, RightClickMessageWindowComponent } from "../component/shared"

export const Chat = () => {
    return (
        <main>
            <LeftNavigate />
            <RightClickMessageWindowComponent />
            <DftSETPage>
                <div className="px-12 pt-8 flex flex-col justify-between h-100">
                    <div className="flex flex-col-reverse gap-5 py-6 overflow-y-scroll">
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <EnterMessage />
                </div>
            </DftSETPage>
        </main>
    )
}
