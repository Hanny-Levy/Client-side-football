import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';

const LiveResultPage1 = () => {
    const [liveGames,setLiveGames]=useState([]);

    useEffect((e)=>{
        axios.get("http://localhost:8989/get-all-live-games").then((res)=>{
            setLiveGames(res.data)
             e.preventDefault();
            });
    } );

    const checkWinner = (goalsTeam1,goalsTeam2) => {
        let color;
        if (goalsTeam1===goalsTeam2){

            color="#FFFF00";
        }else if (goalsTeam1>goalsTeam2){
            color="#32CD32";
        }else {
            color="#FF6347"
        }
        return color ;
    }

    return (
        <div>
            <table className={"fl-table"} >
                <tr id={"row"}>
                    <th>
                       Team Name 1
                    </th>
                    <th>
                        Goals For
                    </th>
                    <th>
                        Goals For
                    </th>
                    <th>
                        Team Name 2
                    </th>
                </tr>
                {
                    liveGames.map((game)=>{
                        const team1Goals = game.team1GoalsFor-game.team1Against ;
                        const team2Goals = game.team2GoalsFor-game.team2Against ;
                        return(
                                <tr>
                                    <td style={{background : checkWinner(team1Goals,team2Goals)}} >
                                        {game.team1.name}
                                    </td>
                                    <td style={{background : checkWinner(team1Goals,team2Goals)}} >
                                    {game.team1GoalsFor}</td>
                                    <td style={{background : checkWinner(team2Goals,team1Goals)}}>
                                        {game.team2GoalsFor}</td>
                                    <td style={{background : checkWinner(team2Goals,team1Goals)}}>
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
