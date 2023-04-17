import { useSelector } from "react-redux";
import {PostSelectors} from "../redux/reducers/userSlice";

export function useAuth() {
    const { name, email, token, id } = useSelector(PostSelectors.getUserInfo);

    return {
        isLoggedIn: !!email,
        name,
        email,
        token,
        id,
    }

}