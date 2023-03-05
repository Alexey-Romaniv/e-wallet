import {NavLink} from "react-router-dom";

export const  Navigation = () => {
    return <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/statistics'>Statistics</NavLink>
    <NavLink to='/currency'>$</NavLink>
    </>
}