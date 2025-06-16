import React from "react"
import { DftSETPage } from "../component/hoc"
import { InputComment } from "../component/ui"
import { cn } from "../lib/function"
import { LeftNavigate } from "../component/shared"

export const Chat = () => {
    const [value, setValue] = React.useState('')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <div className="px-12 pt-8 relative flex flex-col justify-between h-100">
                    <div className="flex flex-col-reverse gap-5 py-6 overflow-y-scroll">
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="plate-color py-5">
                        <InputComment setValue={setValue} value={value} />
                    </div>
                </div>
            </DftSETPage>
        </main>
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