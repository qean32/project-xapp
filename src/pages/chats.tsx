import { DftSETPage, GroupContainer } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { changeTitle, getDataId } from "../lib/function"
import { Chat } from "../component/shared"
import { useNavigate } from "react-router-dom"
import { usePage } from "../lib/castom-hook"
import { messageService } from "../service/message-service"

export const Chats = () => {
    changeTitle('мессенджер')
    usePage()
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate('/chat/' + getDataId(e.target))
    }

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <GroupContainer
                    RQkey="chats"
                    Component={Chat}
                    clickHandler={clickHandler}
                    fatchFn={() => messageService.getChats(2)}
                    take={10}
                    componentPropsName="chat"
                />
            </DftSETPage>
        </main>
    )
}