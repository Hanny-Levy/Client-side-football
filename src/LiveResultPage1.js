import React, {useEffect,useState} from 'react';
import axios from "axios";

const LiveResultPage1 = () => {
    const [liveGames,setLiveGames]=useState([]);
    const [teamName,setTeamName] = useState("");


    useEffect(()=>{
        axios.get("http://localhost:8989/get-all-live-games").then((res)=>{
            setLiveGames(res.data)
            });

    } , [ ]);



    const checkWinner = (goalsTeam1,goalsTeam2) => {
        let color;
        if (goalsTeam1===goalsTeam2){
            color="yellow";
        }else if (goalsTeam1>goalsTeam2){
            color="red";
        }else {
            color="green"
        }
        return color ;
    }

    const getTeamName = (id) =>{
        axios.get("http://localhost:8989/team-name-by-id", {
            params: {
                id : id
            }
        })
            .then((res)=>{
              setTeamName(res.data);
        });
    }
    return (
        <div >

            <table border={1} color={"white"}>
                <tr>
                    <th>
                       Name
                    </th>
                    <th>
                        Name
                    </th>
                </tr>
                {
                    liveGames.map((game)=>{
                        const team1Goals = game.team1GoalsFor-game.team1Against ;
                        const team2Goals = game.team2GoalsFor-game.team2Against ;
                        const teamName1=getTeamName(game.team1);
                        const teamName2=getTeamName(game.team2);

                        return(

                                <tr>
                                    <td style={{color : checkWinner(team1Goals,team2Goals)}} >
                                        {teamName1}

                                    </td>
                                    <td style={{color : checkWinner(team2Goals,team1Goals)}}>
                                        {teamName2}

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