import { useBoolean } from "../../lib/castom-hook"

export const Button = ({ title, function_ }: {
    title: string,
    function_: Function
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
        <button className="rounded-md transotion07 flex justify-center items-center" onClick={fn} type="submit">
            <p className={color.bool ? 'opacity-0' : ''}>{title}</p>
            {color.bool && <span className="loader"></span>}
        </button>
    );
}