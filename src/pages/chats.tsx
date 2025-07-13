import { DftSETPage, GroupContainerLink } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { Chat } from "../component/shared"

export const Chats = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <GroupContainerLink Component={Chat} link="/chat/" />
            </DftSETPage>
        </main>
    )
}