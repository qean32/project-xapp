import { ToolMusic } from "../component/shared"
import { useBoolean, usePage } from "../lib/castom-hook";
import { changeTitle, cn } from "../lib/function"
import { IpcEventNameDto } from "../model";

export const Overlay = () => {
    changeTitle('');
    usePage();

    const { bool, swap } = useBoolean(true)
    const hoverHandler = (key: IpcEventNameDto) => {
        // @ts-ignore
        window.electron?.sendFrameAction(key);
        swap();
    }

    return (
        <div
            className={cn("bg-color p-3 py-2 fit-content overflow-hidden overlay rounded-b-md", (bool ? 'h-[35px]' : 'h-[75px]'))}
            onClick={() => hoverHandler('CHANGE-SIZE-OVERLAY-WINDOW')}>
            <div className="flex gap-2">
                <p className="text-ellipsis max-w-[120px] overflow-hidden text-nowrap text-sm" >НАЗВАНИЕНАЗВАНИЕ НАЗВАНИЕ</p>

                <img src="/svg/arrow.svg" alt=""
                    style={!bool ? { transform: 'rotate(90deg)' } : { transform: 'rotate(-90deg)' }}
                    className="transition07" />

            </div>
            <ToolMusic left={false} className="p-0" small />
        </div>
    )
}
