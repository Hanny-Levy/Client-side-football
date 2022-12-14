import React from 'react';
import {useEffect, useState} from "react";

const SignInPage4 = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [signIn,setSignIn]=useState(false);
    let validPassword = password.length >= 6 ;
    let validUsername = username.includes('@') ;
    let validLogin = validUsername && validPassword;


    useEffect(()=>{
    },[username,password])

    useEffect(()=>{
        // setUsername("");
        // setPassword("");
    },[signIn])

    const  onSignInClick = () =>{
        validLogin ? setSignIn(true) : setSignIn(false);
    }

    const  onLogOutClick = () =>{
        setSignIn(false);
        setUsername("");
        setPassword("");
    }



    return (
        <div >
            {
                !signIn ? <table>
                    <tr>
                        <td>
                            <input placeholder={"Enter your username"} value={username} onChange={(event) => {
                                setUsername(event.target.value)}}/>
                        </td>
                    </tr>
                            <tr>
                            {
                               username!=="" && !validUsername &&
                                <td  className={"warning"}>not valid!</td>
                            }
                            </tr>

                    <tr>
                        <td>
                            <input placeholder={"Enter your password"} value={password} type={"password"} onChange={(event) => setPassword(event.target.value)}/>

                        </td>
                    </tr>
                        <tr>
                            {
                               password!=="" && !validPassword &&
                                <td  className={"warning"}>not valid!</td>
                            }
                        </tr>
                    <tr>
                        <td>
                            <button onClick={onSignInClick} disabled={!validUsername || !validPassword}  >Sign In</button>
                        </td>
                    </tr>
                </table> :
                    <table>
                        hello {username} <br/>
                        <button onClick={onLogOutClick}>Log Out</button>
                    </table>
            }






        </div>
    );
};

export default SignInPage4;