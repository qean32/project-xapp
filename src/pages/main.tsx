import { DftSETPage } from "../component/hoc"
import { LeftNavigate, Music } from "../component/shared"
import { Search } from "../component/ui"

export const Main = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search className="my-5 pl-10" />
                <h2 className="pl-10 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                        </div> */}

                <div className="flex flex-col max-h-[80%] relative overflow-y-scroll">
                    <Music />
                    <Music />
                    <Music />
                </div>
            </DftSETPage>
        </main >
    )
}
