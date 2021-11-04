/* eslint-disable no-unused-vars */
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";


import Axios from "axios";

import { useHistory } from 'react-router';

// Change this to be your own authentication token URI.
//const authenticationTokenUri ='egV7ttGiP-ifiNnppI70CN:APA91bF741ZldL21fNjjXKgKOLtJ6wBEaqq-uWYXxgCICT-BRL6HpvLtvrRMPDkydB0KER0DNfENy6vgeCTaLLKjdwFvCh1rCYlveJL1yj2yxjJ-qVwt5kQZYA1P1PewEN17cSvxdHMd' 
//'http://localhost:5000/login'
//'egV7ttGiP-ifiNnppI70CN:APA91bF741ZldL21fNjjXKgKOLtJ6wBEaqq-uWYXxgCICT-BRL6HpvLtvrRMPDkydB0KER0DNfENy6vgeCTaLLKjdwFvCh1rCYlveJL1yj2yxjJ-qVwt5kQZYA1P1PewEN17cSvxdHMd';

const authProvider = async (type, params) => {
  switch (type) {
    case AUTH_LOGIN:
      
      console.log(params);
      await Axios.post("http://localhost:5000/login", {
        email: params.username,
        password: params.password,
    }).then((response) => { 
            console.log(response);     
            localStorage.setItem("email", params.username);
            localStorage.setItem("token", response.data.token); // The token is stored in the browser's local storage
            //window.location.replace("/chat");
            //History.push('/chat');

          //return response.json();
        })
        break

    case AUTH_LOGOUT:
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      break;

    case AUTH_ERROR:
      if (401 === params.status || 403 === params.status) {
        localStorage.removeItem("username");
        localStorage.removeItem("token");

        return Promise.reject();
      }
      break;

    case AUTH_CHECK:
      return localStorage.getItem("token")
        ? Promise.resolve()
        : Promise.reject();

    default:
      return Promise.resolve();
    };
  }
 export default authProvider;

