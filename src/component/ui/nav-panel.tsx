import { TypeUseBoolen } from "../../lib/castom-hook";

export const NavPanel = ({ switcher }: { switcher: TypeUseBoolen }) => {

    return (
        <div className="navreg">
            <p onClick={switcher.on}>вход</p>
            <p onClick={switcher.off}>регистрация</p>
        </div>
    );
}