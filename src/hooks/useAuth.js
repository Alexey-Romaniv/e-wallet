import { useSelector} from "react-redux";
import {selectWallet, selectIsAuth, selectIsFetching, selectUser, selectUserName} from "../redux/auth/authSelectors";

export const useAuth = () => {
    const isAuth = useSelector(selectIsAuth);
    const isFetching = useSelector(selectIsFetching);
    const user = useSelector(selectUser);
    const userName = useSelector(selectUserName);
    const wallet = useSelector(selectWallet);

    return {isAuth, isFetching, user , userName, wallet};
}