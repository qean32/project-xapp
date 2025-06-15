import { LeftSide, RightSide } from "../component/general"
import { DefaultContiner } from "../component/hoc"
import { DftSETPage } from "../component/hoc"
import { Chat } from "../component/shared"

export const Chats = () => {
    return (
        <>
            <DftSETPage />

            <main className="overflow-hidden">
                <LeftSide />

                <DefaultContiner className="py-5 h-100 min-h-[300px]">
                    {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                    </div> */}

                    <div className="flex flex-col w-[660px] max-h-[83%] pt-6 overflow-y-scroll relative">
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                    </div>
                </DefaultContiner>

                <RightSide />
            </main>
        </>
    )
}
