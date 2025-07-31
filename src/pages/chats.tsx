import { DftSETPage } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { changeTitle } from "../lib/function"
import { usePage } from "../lib/castom-hook"
import { ChatsChild } from "../component/children/pages"

export const Chats = () => {
    changeTitle('мессенджер')
    usePage()

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <ChatsChild />
            </DftSETPage>
        </main>
    )
}