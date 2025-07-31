import { serverHost } from "../../export";
import { cn, IsImageFile } from "../../lib/function";
import { MessageDto, UserDto } from "../../model";
import { useAppDispatch } from "../../store";
import { setSelectMessage } from '../../store/right-click-message-window'
import { FileInMessage, MessageRead, SmallAva } from "../ui";

type Props = {
    message: MessageDto
    user: UserDto
}

export const Message: React.FC<Props> = ({ message, user }: Props) => {
    const dispatch = useAppDispatch()
    const reverse = message.from == (user.id ?? 0)

    const rightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setSelectMessage({ position: { top: e.pageY + 'px', left: e.pageX + 'px' }, message: message }))
    }

    return (
        <div className={cn("flex gap-5", (reverse && 'reverse'))} onContextMenu={rightClick} >
            <SmallAva path={message.fromId.ava} />

            <div className={cn("messagecontext cursor-pointer relative p-5 m-line flex flex-col gap-3", (reverse && 'm-reverse reverse'))}>
                <div>
                    {/* <p>{message.fromId.name}</p> */}
                    <p>{message.hashMessage}</p>
                </div>

                <MessageRead read={message.isView} />

                <div>
                    {message.files && message.files.split(', ').filter(item => !IsImageFile(item)).map(item => {
                        return <FileInMessage path={`${serverHost}file/${item}`} key={item} />
                    })}
                </div>

                <div className="flex items-start gap-3 flex-wrap">
                    {message.files && message.files.split(', ').filter(item => IsImageFile(item)).map(item => {
                        return <FileInMessage path={`${serverHost}file/${item}`} key={item} />
                    })}
                </div>
            </div>
        </div >
    );
}