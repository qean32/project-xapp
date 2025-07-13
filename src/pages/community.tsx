import { LeftNavigate } from "../component/general"
import { DftSETPage } from "../component/hoc"
import { User } from "../component/shared"
import { Search } from "../component/ui"

export const Community = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search className="my-5 pl-9" />
                <h2 className="pl-9 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                {/* <div className="absolute flex justify-center items-center" style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
                        <span className="loader w-[35px] h-[35px]"></span>
                    </div> */}

                <div className="flex flex-col max-h-[80%] relative overflow-y-scroll">
                    <User />
                    <User />
                    <User />
                </div>
            </DftSETPage >
        </main >
    )
}
