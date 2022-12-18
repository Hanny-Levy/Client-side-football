import React, {useEffect,useState} from 'react';
import axios from "axios";

const LiveResultPage1 = (props) => {
    const [teamsLiveGames,setTeamsLiveGames]=useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8989/getLiveResult").then((res)=>{
            setTeamsLiveGames(res.data)
            }
        )
    } , [ ]);




    return (
        <div >

            <table border={1}>
                {
                    teamsLiveGames.map((game)=>{
                        return(

                                <tr>
                                    <td style={{color : game.team1.goalsFor > game.team2.goalsFor ? "green" : "red"}} >

                                        {game.team1.name}
                                    </td>
                                    <td>
                                        {game.team2.name}
                                    </td>
                                </tr>

                            );
                        })
                }
            </table>
        </div>
    );
};

export default LiveResultPage1;