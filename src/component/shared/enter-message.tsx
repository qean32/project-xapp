import { cn } from "../../lib/function";

type Props = {
    className?: string
}

export const EnterMessage: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className="plate-color bg-color-light px-7 py-1 rounded-lg mb-5">
            <div className={cn('w-100 relative flex gap-4', className)} >

                <img src="./svg/upload-file-message.svg" width={'30px'} />
                <input type='comment' className='input-commnet' placeholder='сообщение' />
                <img src="./svg/send-message.svg" width={'36px'} />
            </div>
        </div>
    );
}