import React, { CSSProperties } from "react"
import { InputPassword, InputEmail, InputText } from "../component/ui"
import { useBoolean } from "../lib/castom-hook"
import { changeTitle } from "../lib/function"
import { DefaultContiner } from "../component/hoc"

export const Auth = () => {
    changeTitle('вход')

    const [firstname, setFirstname] = React.useState<string>('')
    const [lastname, setLastname] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')

    const reg = useBoolean(true)
    const reg_ = useBoolean(true)
    const on = useBoolean(true)

    React.useEffect(() => {
        if (on.bool) {
            reg_.swap()
            setTimeout(() => {
                reg.swap()
            }, 500);
        } else {
            reg.swap()
            setTimeout(() => {
                reg_.swap()
            }, 500);
        }
    }, [on.bool])

    const clickHandler = () => {
        on.off();
    }

    return (
        <>
            <div className="flex justify-center items-center w-100 h-100">
                <DefaultContiner className="w-1/2">
                    <div className="regwindow transition07" style={reg.bool ? { maxHeight: '510px' } : { maxHeight: '340px' }}>
                        <Carousel />
                        <div className="regentrance" style={{ width: '200%' }}>
                            <NavPanel on={on} />
                            <div style={reg_.bool ? { marginLeft: '-50%' } : {}} className="transition07">
                                <form className="windowreg">
                                    <div style={{ width: '70%' }}><InputEmail value={email} setValue={setEmail} title="почта" /></div>
                                    <div style={{ width: '70%' }}><InputPassword value={password} setValue={setPassword} title="пароль" /></div>
                                    <div className="regwarning">
                                        <p> забыли пароль? --анлак</p>
                                        <p onClick={on.off}> нет аккаунта? --регистрация</p>
                                    </div>
                                    <div>
                                        {/* <Button title="вход" /> */}
                                    </div>
                                </form>
                                <form className="windowreg" onSubmit={clickHandler}>
                                    <div style={{ width: '70%' }}>
                                        <InputText value={firstname} setValue={setFirstname} title="имя" max={20} />
                                    </div>
                                    <div style={{ width: '70%' }}>
                                        <InputText value={lastname} setValue={setLastname} title="фамилия" max={20} />
                                    </div>
                                    <div style={{ width: '70%' }}>
                                        <InputEmail value={email} setValue={setEmail} title="почта" />
                                    </div>
                                    <div style={{ width: '70%' }}>
                                        <InputPassword value={password} setValue={setPassword} title="пароль" />
                                    </div>
                                    <div className="regwarning">
                                        <p onClick={on.on}> есть аккаунт? --войти</p>
                                    </div>
                                    {/* <div><Button title="регистрация" function_={clickHandler} /></div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </DefaultContiner>
            </div>
        </>
    );
}


export const Carousel = ({ }: {}) => {

    const [carousel, setCarousel] = React.useState<number>(0)
    const [carouselStyle, setCarouselStyle] = React.useState<CSSProperties>({ marginTop: '-20%' })

    React.useEffect(() => {
        const intervalID = setInterval(() => setCarousel((prev: any) => prev + 1), 12000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    React.useEffect(() => {
        switch (carousel) {
            case 1: {
                setCarouselStyle({ marginTop: '-180%' })
                break;
            }
            case 2: {
                setCarouselStyle({ marginTop: '-330%' })
                break;
            }
            case 3: {
                setCarouselStyle({ marginTop: '-480%' })
                break;
            }
            default: {
                setCarouselStyle({ marginTop: '-30%' })
                setCarousel(0)
                break;
            }
        }
    }, [carousel])

    return (
        <div style={{ zIndex: '12', backgroundColor: '#292929' }} onClick={() => setCarousel((prev: any) => prev + 1)}>
            <div style={{ width: '100%' }}>
                <div style={carouselStyle} className="carousel">
                    <div><img src="/svg/cs.svg" alt="" className="carouselimg" /><p>играй в CS2 c нами</p></div>
                    <div><img src="/svg/bascketball.svg" alt="" className="carouselimg" /><p>корт зовет нас...</p></div>
                    <div><img src="/svg/dota.svg" alt="" className="carouselimg" /><p>ГОТОВ ???</p></div>
                    <div><img src="/svg/empieLogo.svg" alt="" className="carouselimg" /><p>цитата 10.10</p></div>
                </div>
            </div>
        </div>
    );
}


export const NavPanel = ({ on }: { on: any }) => {
    return (
        <div className="navreg">
            <p onClick={on.on}>вход <img src="/svg/door.svg" alt="" /></p>
            <p onClick={on.off}>регистрация <img src="/svg/reg_user.svg" alt="" /></p>
        </div>
    );
}