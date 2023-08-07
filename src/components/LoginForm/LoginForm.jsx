import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {login} from "../../redux/auth/authOperations";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {Formik} from "formik";
import * as Yup from 'yup';
import sprite from '../../assets/icons/InlineSprite.svg';
import logo from '../../assets/icons/logo.svg';
import {
     AuthFormWrapper,
    FormError,
    FormWrapper,
    Input,
    InputWrapper,
    Svg
} from "../CommonComponents/authForm.styles";
import {LogoImg, LogoText} from "../CommonComponents/Logo.styles";
import {selectError} from "../../redux/auth/authSelectors";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const errorMessage = useSelector(selectError)

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6).required("Required"),
    });


    return (<AuthFormWrapper>
                <LogoText><LogoImg src={logo}></LogoImg>Wallet</LogoText>
                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={LoginSchema}
                    onSubmit={(values, {resetForm}) => {
                        try {
                        dispatch(login(values))

                        } catch (e){
                            console.log(errorMessage)
                            console.log(e.message)
                            console.log("111")
                        } finally {

                        resetForm();
                        }
                    }}
                >
                    {({isSubmitting}) => (
                        <FormWrapper>
                            <InputWrapper>
                                <Input type="email" name="email" placeholder="Email"/>
                                <Svg>
                                    <use xlinkHref={`${sprite}#src-3`}></use>
                                </Svg>
                                <FormError name="email" component="div"/>
                            </InputWrapper>
                            <InputWrapper>
                                <Input type="password" name="password" placeholder="Password"/>
                                <Svg>
                                    <use xlinkHref={`${sprite}#src-2`}></use>
                                </Svg>
                                <FormError name="password" component="div"/>
                            </InputWrapper>
                            <MainBtn type="submit" disabled={isSubmitting}>
                                Login
                            </MainBtn>
                        </FormWrapper>
                    )}
                </Formik>
                <NavLink to='/register'>
                    <SecondBtn>Register</SecondBtn>
                </NavLink>
    </AuthFormWrapper>)
}