import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/authOperations";
// import {NavLink} from "react-router-dom";
import logo from '../../assets/icons/logo.svg'
import sprite from '../../assets/icons/InlineSprite.svg'

import {ExitBtn, Header, HeaderContainer, HeaderFlexbox, LogoImg, LogoLink, Name} from "./AppBar.styles";

export const AppBar = () => {
    const {userName} = useAuth();
    const dispath = useDispatch();
    const logoutHandler = () => {
        dispath(logout());
    }
    return (<Header><HeaderContainer><LogoLink to='/'><LogoImg src={logo} alt='logoImg'/> Wallet</LogoLink> <HeaderFlexbox><Name>{userName}</Name>
        <ExitBtn onClick={logoutHandler}><svg width="18" height="18">
            <use href={`${sprite}#exit`}></use>
        </svg><span>Exit</span></ExitBtn></HeaderFlexbox>
    </HeaderContainer></Header>);
};
