import { TypeUseBoolen } from "../../lib/castom-hook";

export const NavPanel = ({ switcher }: { switcher: TypeUseBoolen }) => {

    return (
        <div className="navreg">
            <p onClick={switcher.off}>вход</p>
            <p onClick={switcher.on}>регистрация</p>
        </div>
    );
}