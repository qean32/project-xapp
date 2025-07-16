import { useNavigate } from "react-router-dom"
import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { User } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { changeTitle, getDataId } from "../lib/function"

export const Community = () => {
    changeTitle('сообщество')
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate('/chat/' + getDataId(e.target))
    }

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search fn={() => { }} />
                <ResultSearch />

                <GroupContainer
                    Component={User}
                    clickHandler={clickHandler}
                    fatchFn={() => { }}
                    search=""
                    componentPropsName="user"
                />
            </DftSETPage >
        </main >
    )
}