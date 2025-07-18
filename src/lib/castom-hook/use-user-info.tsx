import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "./redux";
import { setUser } from "../../store/user";
import { getToken } from "../function";

export const useUserInfo = () => {
    const user = useAppSelector(state => state.user)
    const dispath = useAppDispatch()

    if (!user.id && getToken()) {
        dispath(setUser(jwtDecode(getToken())))
    }

    return user
}