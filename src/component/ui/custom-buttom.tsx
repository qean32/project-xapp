import { useBoolean } from "../../lib/castom-hook"
import { cn } from "../../lib/function"

export const Button = ({ title, function_, className }: {
    title: string,
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
            <p className={color.bool ? 'opacity-0' : ''}>{title}</p>
            {color.bool && <span className="loader"></span>}
        </button>
    );
}