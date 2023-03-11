import { useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {login} from "../../redux/auth/authOperations";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch((
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        ))
        form.reset();
    }

    return (<><form onSubmit={handleSubmit}>
        <label>
            Email
            <input type='email' name='email'/>
        </label>
        <label>
            Password
            <input type='password' name='password'/>
        </label>
        <MainBtn type='submit'>Login</MainBtn>
    </form><NavLink to='/register'><SecondBtn>Register</SecondBtn></NavLink>  </>)
}