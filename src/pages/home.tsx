import { DefaultContiner } from "../component/hoc"
import { BottomTool, Music, MusicShort, PlayList, TopMenu } from "../component/shared"
import { IconAndAText, Search } from "../component/ui"
import { style } from "../export"

export const Home = () => {
    return (
        <>
            <TopMenu />
            <BottomTool />
            <main>
                <div>
                    <DefaultContiner className="py-5 px-0 mt-8 max-h-[39%] min-h-[300px] overflow-hidden">
                        <h2 className="px-5">ТЕКУЩИЙ ПЛЕЙЛИСТ: </h2>
                        <h2 className="px-5">автоподбор</h2>

                        <div className="flex flex-col relative py-10 overflow-y-scroll max-h-[300px]">
                            <MusicShort />
                            <MusicShort />
                            <MusicShort />
                            <MusicShort />
                            <MusicShort />
                            <MusicShort />
                            <MusicShort />
                            <MusicShort />
                        </div>
                    </DefaultContiner>

                    <div className="flex gap-5 pl-3 pt-3">
                        <IconAndAText icon="svg/message.svg" text="чат" />
                        <IconAndAText icon="svg/community.svg" text="сообщество" />
                    </div>
                </div>

                <DefaultContiner className="py-5 h-100 min-h-[300px]">
                    <Search className="my-5 pl-11" />

                    <h2 className="pl-11 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                    <div className="flex flex-col w-[700px] max-h-[83%] overflow-y-scroll relative">
                        {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0' }}>
                                <span className="loader w-[40px] h-[40px]"></span>
                            </div> */}
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                        <Music />
                    </div>
                </DefaultContiner>

                <div className="mt-8">
                    <div className="flex justify-between mb-8">
                        <h2>НИКНЕЙМ</h2>
                        <div className="ava music-ava h-[70px] w-[100px] bg-color-light"></div>
                    </div>

                    <DefaultContiner className="pt-5 px-0 max-h-[30%] min-h-[300px] overflow-hidden">
                        <h2 className="px-5">ПЛЕЙЛИСТЫ</h2>

                        <div className="flex flex-col relative pt-10 overflow-y-scroll max-h-[300px]">
                            <PlayList />
                            <PlayList />
                            <PlayList />
                            <PlayList />
                            <PlayList />
                            <PlayList />
                            <PlayList />
                        </div>
                    </DefaultContiner>
                </div>
            </main>
        </>
    )
}
