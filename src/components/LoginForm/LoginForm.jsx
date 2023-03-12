import { useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {login} from "../../redux/auth/authOperations";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
export const LoginForm = () => {
    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });


    return (<>

        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                dispatch(login(values))

            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" />
                    <MainBtn type="submit" disabled={isSubmitting}>
                        Login
                    </MainBtn>
                </Form>
            )}
        </Formik>
        <NavLink to='/register'><SecondBtn>Register</SecondBtn></NavLink>  </>)
}