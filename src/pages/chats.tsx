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

                <GroupContainerLink link="/chat/">
                    {[1, 2, 4].map(item => {
                        
                        return <Chat key={item} />
                    })}
                </GroupContainerLink>
            </DftSETPage>
        </main>
    )
}