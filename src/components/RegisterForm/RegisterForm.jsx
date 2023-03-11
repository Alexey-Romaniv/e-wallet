import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {registration} from "../../redux/auth/authOperations";
import {toast, ToastContainer} from "react-toastify";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.elements.password.value !== form.elements.confirm.value){
            return toast.error("Confirm is not the same!")
        }
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
        <label>
            Confirm password
            <input type='password' name='confirm'/>
        </label>
        <MainBtn type='submit' >Register</MainBtn>
    </form><NavLink to='/login'><SecondBtn>Login</SecondBtn></NavLink>
    <ToastContainer/></>)
}