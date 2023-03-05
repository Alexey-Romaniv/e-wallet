import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {registration} from "../../redux/auth/authOperations";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.email.value,
        })
        dispatch(registration({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    }
    return (<><form onSubmit={handleSubmit}>
        <label>
            Name
            <input type='text' name='name'/>
        </label>
        <label>
            Email
            <input type='email' name='email'/>
        </label>
        <label>
            Password
            <input type='password' name='password'/>
        </label>
        <button type='submit' >Register</button>
    </form><NavLink to='/login'>Login</NavLink></>)
}