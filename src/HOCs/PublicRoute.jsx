import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router";

export const PublicRoute = ({component: Component, redirectTo = '/'}) => {
    const {isAuth} = useAuth();
    return isAuth ? <Navigate to={redirectTo}/> : Component;
}