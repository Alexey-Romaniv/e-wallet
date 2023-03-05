import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({component: Component, redirectTo = '/'}) => {
    const {isAuth} = useAuth();
    return isAuth ? <Navigate to={redirectTo}/> : Component;
}