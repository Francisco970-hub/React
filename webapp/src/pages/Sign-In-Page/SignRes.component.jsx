import React from 'react';

import './SignRes.style.scss';

import SignIn from '../../components/SignIn/SignIn.component';

import Res from'../../components/Res/Res.component';

const SignInOut = () => (

    <div className="signInOut">
        <SignIn />
        <Res />
    </div>

);

export default SignInOut;