import { useSelector} from "react-redux";
import { selectIsAuth, selectIsFetching, selectUser, selectUserName} from "../redux/auth/authSelectors";

export const useAuth = () => {
    const isAuth = useSelector(selectIsAuth);
    const isFetching = useSelector(selectIsFetching);
    const user = useSelector(selectUser);
    const userName = useSelector(selectUserName);

    return {isAuth, isFetching, user , userName};
}