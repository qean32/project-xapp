import { LeftSide, RightSide } from "../component/general"
import { DefaultContiner, DftSETPage } from "../component/hoc"
import { User } from "../component/shared"
import { Search } from "../component/ui"

export const Community = () => {
    return (
        <>
            <DftSETPage />

            <main className="overflow-hidden">
                <LeftSide />

                <DefaultContiner className="pb-5 pt-8 h-100 min-h-[300px]">
                    <Search className="my-5 pl-11" />

                    <h2 className="pl-11 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                    {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                    </div> */}

                    <div className="flex flex-col w-[700px] max-h-[83%] overflow-y-scroll relative">
                        <User />
                        <User />
                        <User />
                    </div>
                </DefaultContiner>

                <RightSide />
            </main>
        </>
    )
}
