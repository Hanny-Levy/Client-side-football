import React from 'react';
import {useEffect, useState} from "react";

const SignInPage4 = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [signIn,setSignIn]=useState(false);

    let validLogin = password.length >= 6 && username.includes('@')


    const  onSignInClick = () =>{
          validLogin ? setSignIn(true) : setSignIn(false);
          printHello();


    }
    const printHello=()=>{
         return(

                 {signIn} &&
             <div>
                 hello {username}
             </div>

            )


    }



    return (
        <div>
            <table>
                <tr>
                    <td>
                        <input placeholder={"Enter your username"} value={username} onChange={(event) => setUsername(event.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input placeholder={"Enter your password"} value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={onSignInClick} >Sign In</button>
                    </td>
                </tr>
            </table>







        </div>
    );
};

export default SignInPage4;