import { Auth } from 'aws-amplify';

import Axios from "axios";
import { email } from 'ra-core';

async function signUp() {
    try {
        const  user  = await Axios.post("http://localhost:5000/register", {
            email: email,
            password: password,
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}