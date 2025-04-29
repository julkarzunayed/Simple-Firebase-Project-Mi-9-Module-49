import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    //Google Login
    const handleGoogleLogin = () => {
        console.log("login clicked");
        signInWithPopup(auth, provider).then(result => {
            console.log(result.user);
            setUser(result.user)
        })
            .catch(error => {
                console.log(error);
            })
    }

    //GitHub Login
    const handleGitHubLogin = () => {
        console.log("github btn clicked");
        signInWithPopup(auth, gitHubProvider).then(result => {
            console.log(result);
            setUser(result.user)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSingOut = () => {
        signOut(auth).then(() => {
            console.log("sign Out successfully")
            setUser(null)
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
            <h1>Please Login</h1>
            {/* <button onClick={handleGoogleLogin}>Signin with Google</button>
            <button onClick={handleSingOut}>Sign Out</button> */}

            {
                user ?
                    <button
                        onClick={handleSingOut}>Sign Out
                    </button>
                    : <>
                        <button
                            onClick={handleGoogleLogin}>Signin with Google
                        </button>
                        <button onClick={handleGitHubLogin}>
                                Signin With GitHub
                        </button>
                    </>
            }

            {
                user && <div style={{ borderRadius: '10px', border: 'solid 2px tomato' }}>
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                    <img style={{ borderRadius: '10px' }} src={user.photoURL} alt="Image" />
                </div>
            }
        </div>
    );
};

export default Login;