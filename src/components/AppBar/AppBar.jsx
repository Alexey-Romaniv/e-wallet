import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/authOperations";

export const AppBar = () => {
    const {userName} = useAuth();
    console.log(userName)
    const dispath = useDispatch();
    const logoutHandler = () => {
        dispath(logout());
    }
    return (<div>Wallet {userName} <button onClick={logoutHandler}>Exit</button></div>);
};
