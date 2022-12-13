import React from 'react';
import {useEffect, useState} from "react";

const SignInPage4 = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [signIn,setSignIn]=useState(false);
    let validLogin=false;

    useEffect(()=>{
         validLogin = password.length >= 6 && username.includes('@')
    },[username,password])


    const  onSignInClick = () =>{
          validLogin ? setSignIn(true) : setSignIn(false);
    }

    return (
        <div >
            <table>
                <tr>
                    <td>
                        <input placeholder={"Enter your username"} value={username} onChange={(event) => setUsername(event.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input placeholder={"Enter your password"} value={password} type={"password"} onChange={(event) => setPassword(event.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={onSignInClick} >Sign In</button>
                    </td>
                </tr>
            </table>

            {
                signIn &&
            <div>
                hello {username}
            </div>
            }





        </div>
    );
};

export default SignInPage4;