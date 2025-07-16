import { DftSETPage, GroupContainer } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { changeTitle, getDataId } from "../lib/function"
import { Chat } from "../component/shared"
import { useNavigate } from "react-router-dom"

export const Chats = () => {
    changeTitle('мессенджер')
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate('/chat/' + getDataId(e.target))
    }

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <GroupContainer
                    Component={Chat}
                    clickHandler={clickHandler}
                    fatchFn={() => { }}
                    search=""
                    componentPropsName="data"
                />
            </DftSETPage>
        </main>
    )
}