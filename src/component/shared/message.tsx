import { cn } from "../../lib/function";
import { MessageDto } from "../../model";
import { useAppDispatch } from "../../store";
import { setSelectMessage } from '../../store/right-click-message-window'
import { FileInMessage, MessageRead } from "../ui";

type Props = {
    message: MessageDto
}

export const Message: React.FC<Props> = ({ message }: Props) => {
    const dispatch = useAppDispatch()

    const rightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setSelectMessage({ position: { top: e.pageY + 'px', left: e.pageX + 'px' }, message: message }))
    }

    return (
        <div className={cn("flex gap-5", (false && 'transform-reverse'))} onContextMenu={rightClick} >
            <div className="small-ava" style={{ backgroundImage: `url(${'zxczxc'})` }}></div>

            <div className={cn("messagecontext cursor-pointer relative p-5 m-line flex flex-col gap-3", (false && 'm-reverse transform-reverse'))}>
                <p>{message.hashMessage}</p>

                <MessageRead read={message.isView} />

                <div>
                    <FileInMessage path="http://localhost:3000/789429383.rar" />
                    <FileInMessage path="http://localhost:3000/789429383.rar" />
                </div>

                <div className="flex items-start gap-3 flex-wrap">
                    <FileInMessage path="https://i.pinimg.com/736x/0d/68/64/0d68647fbd2514040becbaab2de3a8dc.jpg" />
                    <FileInMessage path="https://i.pinimg.com/736x/0d/68/64/0d68647fbd2514040becbaab2de3a8dc.jpg" />
                </div>
            </div>
        </div >
    );
}