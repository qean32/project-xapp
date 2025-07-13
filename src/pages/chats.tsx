import { DftSETPage } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { Chat } from "../component/shared"
import { getDataId } from "../lib/function"
import { useNavigate } from "react-router-dom"

export const Chats = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                <ChatsGroup />
            </DftSETPage>
        </main>
    )
}


const ChatsGroup: React.FC<{}> = ({ }) => {
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate('/chat/' + getDataId(e.target))
    }

    return (
        <>
            {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                        </div> */}

            <div className="flex flex-col max-h-[80%] pt-8 relative overflow-y-scroll" onClick={clickHandler} >
                <Chat />
                <Chat />
                <Chat />
            </div>
        </>
    )
}