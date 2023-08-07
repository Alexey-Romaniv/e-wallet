import React from 'react';
import {AuthLogoText} from "./AuthLogo.styles";

export const AuthLogo = ({page}) => {

    return <div>
        <AuthLogoText key={page} page={page}>Finance App</AuthLogoText>
    </div>
}