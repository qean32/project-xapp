import { useNavigate } from "react-router-dom"
import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { SearchGroup, User } from "../component/shared"
import { changeTitle, getDataId } from "../lib/function"
import { usePage } from "../lib/castom-hook"
import React from "react"
import { userService } from "../service/user-service"

export const Community = () => {
    changeTitle('сообщество');
    usePage();

    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate('/chat/' + getDataId(e.target))
    }

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <SearchGroup />

                <GroupContainer
                    Component={User}
                    clickHandler={clickHandler}
                    fatchFn={userService.getUsers}
                    componentPropsName="user"
                    take={4}
                />
            </DftSETPage >
        </main >
    )
}