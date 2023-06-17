import sprite from '../../assets/icons/InlineSprite.svg';
import {NavIcon, NavigationLink, NavList} from "./Navigation.styles";

export const Navigation = () => {
    return <nav>
        <NavList>
            <li><NavigationLink to='/'><NavIcon><use href={`${sprite}#home`}></use></NavIcon></NavigationLink></li>
            <li><NavigationLink to='/statistics'><NavIcon><use href={`${sprite}#statistics`}></use></NavIcon></NavigationLink></li>
            <li><NavigationLink to='/currency'><NavIcon><use href={`${sprite}#currency`}></use></NavIcon></NavigationLink></li>
        </NavList>
    </nav>
}