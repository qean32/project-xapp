import { LeftSide, RightSide } from "../component/general"
import { DefaultContiner } from "../component/hoc"
import { DftSETPage } from "../component/hoc"
import { cn } from "../lib/function"

export const Chat = () => {
    return (
        <>
            <DftSETPage />

            <main>
                <LeftSide />

                <DefaultContiner className="py-5 px-5 h-100 min-h-[300px]">

                    <div className="flex flex-col-reverse gap-5 w-[700px] max-h-[83%] overflow-y-scroll relative">
                        <Message />
                        <Message />
                        <Message />
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
        <div className={cn("message", (false && 'transform-reverse'))}>
            <div className="small-ava" style={{ backgroundImage: `url(${'zxczxc'})` }}></div>

            <div className={cn("messagecontext", (false && 'transform-reverse'))}>
                <p style={{ transform: 'translateY(-10px)' }} className="cursor-pointer" >{'zxczxzxc'}</p>
                <p>{'zxczxczxcz zxczxczxcz zxczxczxcz zxczxczxcz zxczxczxcz zxczxczxcz zxczxczxcz'}</p>
            </div>
        </div>
    );
}