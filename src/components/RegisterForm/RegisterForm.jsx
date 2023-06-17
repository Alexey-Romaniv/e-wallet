import {useDispatch} from "react-redux";
import {registration} from "../../redux/auth/authOperations";
import {toast} from "react-toastify";
import { Formik} from "formik";
import * as Yup from "yup";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {Link} from "react-router-dom";
import {
    AuthBackground,
    FormError,
    AuthWrapper,
    FormWrapper,
    Input,
    InputWrapper,
    Svg
} from "../CommonComponents/authForm.styles";
import sprite from '../../assets/icons/InlineSprite.svg'
import {Container} from "../CommonComponents/Container.styles";
import {LogoImg, LogoText} from "../CommonComponents/Logo.styles";
import logo from "../../assets/icons/logo.svg";


const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

export const RegisterForm = () => {

    const dispatch = useDispatch();

    return (<AuthBackground>
        <Container>
            <AuthWrapper>
                <LogoText><LogoImg src={logo}></LogoImg>Wallet</LogoText>
                <Formik
                    initialValues={{name: "", email: "", password: ""}}
                    validationSchema={RegisterSchema}
                    onSubmit={async (values, {setSubmitting}) => {
                        const {confirmPassword, ...result} = values;
                        console.log(result)
                        dispatch(await registration(result));
                        setSubmitting(false);
                        toast.success("Registration successful");

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
                            <InputWrapper>
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />

                                <Svg>
                                    <use xlinkHref={`${sprite}#src-2`}></use>
                                </Svg>
                                <FormError name="confirmPassword" component="div"/>
                            </InputWrapper>
                            <InputWrapper>
                                <Input type="text" name="name" placeholder="First name"/>

                                <Svg>
                                    <use xlinkHref={`${sprite}#src-1`}></use>
                                </Svg>
                                <FormError name="name" component="div"/>
                            </InputWrapper>
                            <MainBtn type="submit" disabled={isSubmitting}>
                                Register
                            </MainBtn>
                        </FormWrapper>
                    )}
                </Formik>
                <Link to='/login'><SecondBtn>Login</SecondBtn></Link>
            </AuthWrapper>
        </Container>
</AuthBackground>
);
};