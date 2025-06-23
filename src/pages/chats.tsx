import { DftSETPage } from "../component/hoc"
import { LeftNavigate } from "../component/general"
import { Chat } from "../component/shared"

export const Chats = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>

                {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                    </div> */}

                <div className="flex flex-col max-h-[80%] pt-8 relative overflow-y-scroll">
                    <Chat />
                    <Chat />
                    <Chat />
                </div>
            </DftSETPage>
        </main>
    )
}
