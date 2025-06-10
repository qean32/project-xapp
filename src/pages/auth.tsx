import React, { CSSProperties } from "react"
import { InputPassword, InputEmail, InputText } from "../component/ui"
import { useBoolean } from "../lib/castom-hook"
import { changeTitle } from "../lib/function"
import { DefaultContiner } from "../component/hoc"
import { style } from "../export"
import { Button } from "../component/ui/custom-buttom"

export const Auth = () => {
    changeTitle('вход')

    const [firstname, setFirstname] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')

    const authWindow = useBoolean(true)
    const on = useBoolean(true)

    React.useEffect(() => {
        authWindow.swap()
    }, [on.bool])

    return (
        <div className="flex justify-center items-center h-100" >
            <DefaultContiner>
                <div className="regwindow transition07" style={!authWindow.bool ? { maxHeight: '500px' } : { maxHeight: '360px' }}>
                    <Carousel />
                    <div className="regentrance" style={{ width: '200%' }}>
                        <NavPanel switcher={on} />
                        <div style={!authWindow.bool ? { marginLeft: '-50%' } : {}} className="transition07">
                            <form className="windowreg">
                                <InputEmail value={email} setValue={setEmail} title="почта" />
                                <InputPassword value={password} setValue={setPassword} title="пароль" />
                                <div className="regwarning">
                                    <p> забыли пароль? --анлак</p>
                                    <p onClick={on.off}> нет аккаунта? --регистрация</p>
                                </div>
                                <Button title="вход" function_={() => { }} />
                            </form>
                            <form className="windowreg">
                                <InputText value={firstname} setValue={setFirstname} title="имя" max={20} />
                                <InputEmail value={email} setValue={setEmail} title="почта" />
                                <InputPassword value={password} setValue={setPassword} title="пароль" />
                                <div className="regwarning">
                                    <p onClick={on.on}> есть аккаунт? --войти</p>
                                </div>
                                <Button title="регистрация" function_={() => { }} />
                            </form>
                        </div>
                    </div >
                </div >
            </DefaultContiner >
        </div >
    );
}


export const Carousel = () => {
    const [index, setIndex] = React.useState<number>(0)
    const [carouselStyle, setCarouselStyle] = React.useState<CSSProperties>({ transform: 'translateY(0%)' })

    React.useEffect(() => {
        const intervalID = setInterval(() => setIndex((prev: any) => prev + 1), 5000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    React.useEffect(() => {
        setCarouselStyle({ transform: `translateY(-${index * 25}%)` })

        if (index == 4) {
            setIndex(0)
        }
    }, [index])

    return (
        <div style={{ zIndex: '10', backgroundColor: `${style.$plate_color}` }} onClick={() => setIndex((prev: any) => prev + 1)}>
            <div className="w-100">
                <div style={{ ...carouselStyle, height: 'calc(100% * 4)' }} className="transition07">
                    <div className="h-1/4 flex justify-center items-center"><img src="/svg/cs.svg" alt="" /><p>играй в CS2 c нами</p></div>
                    <div className="h-1/4 flex justify-center items-center"><img src="/svg/bascketball.svg" alt="" /><p>корт зовет нас...</p></div>
                    <div className="h-1/4 flex justify-center items-center"><img src="/svg/dota.svg" alt="" /><p>ГОТОВ ???</p></div>
                    <div className="h-1/4 flex justify-center items-center"><img src="/svg/empieLogo.svg" alt="" /><p>цитата 10.10</p></div>
                </div>
            </div>
        </div>
    );
}


export const NavPanel = ({ switcher }: { switcher: any }) => {
    return (
        <div className="navreg">
            <p onClick={switcher.on}>вход <img src="/svg/door.svg" alt="" /></p>
            <p onClick={switcher.off}>регистрация <img src="/svg/reg_user.svg" alt="" /></p>
        </div>
    );
}