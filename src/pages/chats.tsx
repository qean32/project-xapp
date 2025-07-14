import { DftSETPage, GroupContainerLink } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { Chat } from "../component/shared"
import { changeTitle } from "../lib/function"

export const Chats = () => {
    changeTitle('мессенджер')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <GroupContainerLink Component={Chat} link="/chat/" />
            </DftSETPage>
        </main>
    )
}