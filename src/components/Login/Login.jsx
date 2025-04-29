import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        console.log("login clicked");
        signInWithPopup(auth, provider).then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleLogin}>Signin with Google</button>
        </div>
    );
};

export default Login;