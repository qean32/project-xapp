import { useBoolean } from "../../lib/castom-hook"
import { cn } from "../../lib/function"

export const Button = ({ place, function_, className }: {
    place: string | React.ReactNode,
    function_: Function
    className?: string
}) => {
    const color = useBoolean(false)
    const fn = (e: any) => {
        e.preventDefault()
        color.swap()

        setTimeout(() => {
            color.swap()
            function_()
        }, 700);
    }
    return (
        <button className={cn("rounded-md transotion07 flex justify-center items-center", className)} onClick={fn} type="submit">
            <div className={color.boolean ? 'opacity-0' : ''}>{place}</div>
            {color.boolean && <span className="loader"></span>}
        </button>
    );
}