import { TypeUseBoolen } from "../../lib/castom-hook";

export const NavPanel = ({ switcher }: { switcher: TypeUseBoolen }) => {

    return (
        <div className="navreg">
            <p onClick={switcher.on}>вход <img src="/svg/door.svg" alt="" /></p>
            <p onClick={switcher.off}>регистрация <img src="/svg/reg_user.svg" alt="" /></p>
        </div>
    );
}