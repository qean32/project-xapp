import React from "react"
import { LeftSide, RightSide } from "../component/general"
import { DefaultContiner } from "../component/hoc"
import { DftSETPage } from "../component/hoc"
import { InputText } from "../component/ui"
import { cn } from "../lib/function"

export const Chat = () => {
    const [value, setValue] = React.useState('')

    return (
        <>
            <DftSETPage />

            <main className="overflow-hidden">
                <LeftSide />

                <DefaultContiner className="h-100 min-h-[300px]">

                    {/* <div className="h-[70px] bg-color"></div> */}
                    <div className="w-[700px] px-8 relative pt-9 flex flex-col justify-between" style={{ height: '85%' }} >
                        <div className="flex flex-col-reverse gap-5 overflow-y-scroll">
                            <Message />
                            <Message />
                            <Message />
                        </div>
                        <div>
                            <InputText max={300} setValue={setValue} value={value} title="Сообщение" />
                        </div>
                    </div>
                </DefaultContiner>

                <RightSide />
            </main>
        </>
    )
}

type Props = {
}

export const Message: React.FC<Props> = ({ }: Props) => {
    return (
        <div className={cn("flex gap-5", (false && 'transform-reverse'))}>
            <div className="small-ava" style={{ backgroundImage: `url(${'zxczxc'})` }}></div>
            <div className={cn("messagecontext p-5 m-line flex flex-col gap-3", (false && 'm-reverse transform-reverse'))}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus aut accusantium.</p>
            </div>
        </div>
    );
}