import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';


const SignInPage4 = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [selectedTeam1, setSelectedTeam1] = useState("");
    const [selectedTeam2, setSelectedTeam2] = useState("");
    const [signIn,setSignIn]=useState(false);
    const [live,setIsLive]=useState(false);

    let validPassword = password.length >= 6 ;
    let validUsername = username.includes('@') ;
    let validLogin = validUsername && validPassword;
    const [teams,setTeams]=useState([]);


    useEffect(()=>{
    },[username,password])

    useEffect(()=>{
        axios.get("http://localhost:8989/getAllTeams").then(res =>{
            setTeams(res.data)
            })
        },[])


    const  onSignInClick = () =>{
        validLogin ? setSignIn(true) : setSignIn(false);
    }

    const  onLogOutClick = () =>{
        setSignIn(false);
        setUsername("");
        setPassword("");
    }

    const team1 = (event) => {
        setSelectedTeam1(event.target.value)
    }

    const team2 = (event) => {
        setSelectedTeam2(event.target.value)
    }

    const onSaveButton = () =>{
        setIsLive(true);
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
                    <table >
                        hello {username} <br/>
                        {/*<button onClick={onLogOutClick}>Log Out</button>*/}
                        <select  id ="teams"  value={selectedTeam1} onChange={team1}>
                            <option disabled={true} value={""}  >
                                select your team
                            </option>
                        {
                            teams.map(team =>{
                                let isDisable = team.name==selectedTeam2
                                return (
                                    <option value={team.name} disabled={isDisable}>{team.name}</option>
                                )
                            })
                        }
                        </select>
                        <select id ="teams" value={selectedTeam2} onChange={team2} >
                            <option disabled={true} value={""}  >
                                select second team
                            </option>
                                {
                                teams.map(team =>{
                                    let isDisable = team.name==selectedTeam1
                                    return (
                              <option value={team.name} disabled = {isDisable}>{team.name} </option>)
                                })
                            }
                        </select>
                        <button onClick={onSaveButton}>save</button>
                        {
                            live &&
                            <table>

                           <table/>
                        }
                    </table>
            }






        </div>
    );
};

export default SignInPage4;