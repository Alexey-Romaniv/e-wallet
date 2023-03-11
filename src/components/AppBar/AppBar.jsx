import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/authOperations";
// import {NavLink} from "react-router-dom";
import logo from '../../assets/icons/logo.svg'
import {HeaderContainer, LogoImg, LogoLink, Name} from "./AppBar.styles";

export const AppBar = () => {
    const {userName} = useAuth();
    console.log(userName)
    const dispath = useDispatch();
    const logoutHandler = () => {
        dispath(logout());
    }
    return (<header><HeaderContainer><LogoLink to='/'><LogoImg src={logo} alt='logoImg'/> Wallet</LogoLink> <div><Name>{userName}</Name>
        <button onClick={logoutHandler}>Exit</button></div>
    </HeaderContainer></header>);
};
