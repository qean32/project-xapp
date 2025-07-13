import { ToolMusic } from "../component/shared"
import { changeTitle } from "../lib/function"

export const Overlay = () => {
    changeTitle('');

    return (
        <div className="p-2 bg-color fit-content rounded-md px-3">
            <div className="opacity-0 w-0"></div>
            <p className="text-ellipsis overflow-hidden max-w-[140px] mb-1" >НАЗВАНИЕНАЗВАНИЕНАЗВАНИЕ</p>
            <ToolMusic left={false} className="p-1" />
        </div>
    )
}
