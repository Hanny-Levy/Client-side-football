import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';

const LiveResultPage1 = (props) => {
    const [liveGames,setLiveGames]=useState([]);
    const [changeInGame,setChangeInGame ]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8989/get-all-live-games").then((res)=>{
            setLiveGames(res.data)
            });

    } , [changeInGame]);

        useEffect(() => {
            const interval =setInterval(gameHasChanged,1000);
            return () => clearInterval(interval);
        },[])

        const gameHasChanged= () =>{
            setChangeInGame(props.changeInGame)
        }


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

    return (

        <div className="table-wrapper">

            <table class="fl-table">
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

                        return(

                                <tr>
                                    <td style={{background : checkWinner(team1Goals,team2Goals)}} >
                                        {game.team1}
                                    </td>
                                    <td style={{background : checkWinner(team2Goals,team1Goals)}}>
                                        {game.team2}

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