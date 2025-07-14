import React from "react"
import { NavPanel } from "../component/ui"
import { TypeUseBoolen, useBoolean } from "../lib/castom-hook"
import { changeTitle } from "../lib/function"
import { DefaultContiner } from "../component/hoc"
import { AuthForm, RegistrationForm } from "../component/children"
import { VerticalCarousel } from "../component/shared"

export const Auth = () => {
    changeTitle('вход')
    const authWindow = useBoolean(true)
    const on = useBoolean(true)

    React.useEffect(() => {
        authWindow.swap()
    }, [on.bool])

    return (
        <main>
            <div className="flex justify-center items-center h-75 w-100" >
                <DefaultContiner>
                    <div className="regwindow transition07" style={!authWindow.bool ? { maxHeight: '500px' } : { maxHeight: '360px' }}>

                        <VerticalCarousel />
                        <RightSide authWindow={authWindow} on={on} />
                    </div >
                </DefaultContiner >
            </div >
        </main>
    );
}

type Props = {
    on: TypeUseBoolen
    authWindow: TypeUseBoolen
}

const RightSide: React.FC<Props> = ({ authWindow, on }: Props) => {
    return (
        <div className="regentrance" style={{ width: '200%' }}>
            <NavPanel switcher={on} />
            <div style={!authWindow.bool ? { marginLeft: '-50%' } : {}} className="transition07">
                <AuthForm on={on} />
                <RegistrationForm on={on} />
            </div>
        </div >
    )
}