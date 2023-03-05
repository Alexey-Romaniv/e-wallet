import { Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

export const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
    const {isAuth, isFetching} = useAuth();
    const shouldRedirect = !isAuth && !isFetching;
    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;
}