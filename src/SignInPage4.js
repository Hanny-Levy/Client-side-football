import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const SignInPage4 = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [selectedTeam1, setSelectedTeam1] = useState("");
    const [selectedTeam2, setSelectedTeam2] = useState("");
    const [signIn,setSignIn]=useState(false);
    const [live,setIsLive]=useState(false);
    const tableHeaders = ["Name" , "Goals For" , "Goals Against" , "Live"];
    const [team1GoalsFor , setTeam1GoalsFor]=useState(0)
    const [team1GoalsAgainst , setTeam1GoalsAgainst]=useState(0)
    const [team2GoalsAgainst , setTeam2GoalsAgainst]=useState(0)
    const [team2GoalsFor , setTeam2GoalsFor]=useState(0)


    let validPassword = password.length >= 6 ;
    let validUsername = username.includes('@') ;
    let validLogin = validUsername && validPassword;
    const [teams,setTeams]=useState([]);


    useEffect(() => {
        return () => {

        }
    }, [])

    useEffect(()=>{
    },[username,password])

    useEffect(()=>{
        axios.get("http://localhost:8989/getAllTeams").then(res =>{
            setTeams(res.data)
            })
        },[])


    const  onSignInClick = () =>{
        if (validLogin)
        axios.get("http://localhost:8989/sign-in",{
            params:{
                username: {username},
                password: {password}
            }
        }).then((res=>{
            debugger;
            if (res.data.errorCode==null){
                setSignIn(true);
            alert("sign in successful!")
            }else {
                return(
                    <div>
                        {res.data.errorCode}
                    </div>
                )

            }

        }));


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


    const endGameButton=()=> {
        axios.post("http://localhost:8989/updateLeagueTeam",
            {
                params: {
                    team1:selectedTeam1,
                    team2:selectedTeam2,
                    goalsForTeam1:team1GoalsFor,
                    goalsAgainstTeam1:team1GoalsAgainst,
                    goalsForTeam2:team2GoalsFor,
                    goalsAgainstTeam2:team2GoalsAgainst,
                }

            }).then((res) =>{
                alert("update successful")
        });
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
                      <h1> hello {username} </h1> <br/>
                      <h1> Please choose 2 teams: </h1><br/>
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
                              <option value={team.name} disabled={isDisable}>{team.name} </option>)
                                })
                            }
                        </select>
                        <button onClick={onSaveButton}>save</button>

                        {
                            live &&
                            <div>
                            <table border={1}>
                            <tr>
                                {
                                    tableHeaders.map(header => {
                                        return (
                                            <th>
                                                {header}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                                <tr>
                                    <td>{selectedTeam1}</td>
                                    <td><input type={"number"} min={"0"} onChange={(event) => {setTeam1GoalsFor(event.target.value)}}/></td>
                                    <td><input type={"number"} min={"0"} onChange={(event) => {setTeam1GoalsAgainst(event.target.value)}}/></td>
                                    <td>V</td>

                                </tr>
                                <tr>
                                    <td>{selectedTeam2}</td>
                                    <td><input type={"number"}  min={"0"} onChange={(event) => {setTeam2GoalsFor(event.target.value)}}/></td>
                                    <td><input type={"number"}  min={"0"} onChange={(event) => {setTeam2GoalsAgainst(event.target.value)}}/></td>
                                    <td>V</td>
                                </tr>

                           </table>
                            <button onClick={endGameButton}> End game </button>
                            </div>
                        }
                        }
                    </table>


            }

        </div>
    );
};

export default SignInPage4 ;