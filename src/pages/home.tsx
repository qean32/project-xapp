import { DefaultContiner } from "../component/hoc"
import { Music } from "../component/shared"
import { Search, TopMenu } from "../component/ui"

export const Home = () => {
    return (
        <>
            <TopMenu />
            <main>
                <DefaultContiner className="py-5 px-0"><>zxc</></DefaultContiner>
                <DefaultContiner className="py-5 h-100">
                    <>
                        <Search className="my-5 pl-11" />

                        <h2 className="pl-11 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                        <div className="flex flex-col w-[700px] min-h-[500px] max-h-[83%] overflow-y-scroll relative">
                            {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0' }}>
                                <span className="loader w-[40px] h-[40px]"></span>
                            </div> */}
                            <Music />
                            <Music />
                            <Music />
                        </div>
                    </>
                </DefaultContiner>
                <DefaultContiner className="py-5 px-0"><></></DefaultContiner>
            </main>
        </>
    )
}
