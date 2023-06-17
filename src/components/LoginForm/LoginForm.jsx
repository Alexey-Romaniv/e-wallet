import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {login} from "../../redux/auth/authOperations";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {Formik} from "formik";
import * as Yup from 'yup';
import sprite from '../../assets/icons/InlineSprite.svg';
import logo from '../../assets/icons/logo.svg';
import {
    AuthBackground,
    FormError,
    AuthWrapper,
    FormWrapper,
    Input,
    InputWrapper,
    Svg
} from "../CommonComponents/authForm.styles";
import {Container} from "../CommonComponents/Container.styles";
import {LogoImg, LogoText} from "../CommonComponents/Logo.styles";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });


    return (<AuthBackground>
        <Container>
            <AuthWrapper>
                <LogoText><LogoImg src={logo}></LogoImg>Wallet</LogoText>
                <Formik
                    initialValues={{email: "", password: ""}}
                    initialValues={{email: "", password: ""}}
                    validationSchema={LoginSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(login(values))

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
            </AuthWrapper>
        </Container>
    </AuthBackground>)
}