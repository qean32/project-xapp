import { LeftSide, RightSide } from "../component/general"
import { DefaultContiner } from "../component/hoc"
import { DftSETPage } from "../component/hoc"
import { Search } from "../component/ui"

export const Chat = () => {
    return (
        <>
            <DftSETPage />

            <main>
                <LeftSide />

                <DefaultContiner className="py-5 h-100 min-h-[300px]">
                    <Search className="my-5 pl-11" />

                    <h2 className="pl-11 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                    {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                    </div> */}

                    <div className="flex flex-col w-[700px] max-h-[83%] overflow-y-scroll relative">
                        {/* <Music />
                        <Music />
                        <Music /> */}
                    </div>
                </DefaultContiner>

                <RightSide />
            </main>
        </>
    )
}
