import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
            <li><NavLink to='/currency'>$</NavLink></li>
        </ul>
    </nav>
}