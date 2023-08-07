import {LoginForm} from "../../components/LoginForm/LoginForm";
import {AuthFlexWrapper, AuthWrapper} from "../../components/CommonComponents/authForm.styles";
import {Container} from "../../components/CommonComponents/Container.styles";
import {AuthLogo} from "../../components/AuthLogo/AuthLogo";


const LoginPage = () => {

    return <AuthWrapper>
        <Container>
            <AuthFlexWrapper>
                <AuthLogo page='login'/>
                <LoginForm/>
            </AuthFlexWrapper>
        </Container>
    </AuthWrapper>;
};

export default LoginPage;