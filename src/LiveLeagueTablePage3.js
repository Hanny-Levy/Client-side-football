import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';

const LiveLeagueTablePage3 = () => {
    const [allTeamsFromServer, setAllTeamsFromServer] = useState([]);
    let [updatedTeamsList, setUpdatedTeamsList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8989/get-All-Teams-In-Games").then((res) => {
            setAllTeamsFromServer(res.data);
            updateList();
        });
    });

    const updateList = () => {
        let list = [];
        // eslint-disable-next-line array-callback-return
        allTeamsFromServer.map((team) => {
            const newTeam = {
                position: 0,
                name : team.name ,
                played : team.gamesWon + team.gamesLost + team.gameDrawn ,
                won : team.gamesWon ,
                drawn: team.gameDrawn ,
                lost : team.gamesLost ,
                goalsFor : team.goalsFor ,
                goalsAgainst : team.goalAgainst,
                goalsDrawn : team.goalsFor - team.goalAgainst,
                points : team.gamesWon * 3 + team.gameDrawn
            }
           // alert(team.name);
            list.push(newTeam);
        })
        list=list.sort();

        list = list.sort((a,b) => {
            return (
                b.goalsDrawn - a.goalsDrawn
            )
        });
        list = list.sort((a,b) => {
            return (
                b.points - a.points
            )
        });
        setUpdatedTeamsList(list)
    }

    return (
        <div className="table-wrapper">
            <table className="fl-table" >
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>Goals For</th>
                    <th>Goals Against</th>
                    <th>Goals Drawn</th>
                    <th>Points</th>

                </tr>
                {
                    updatedTeamsList.map((newTeam,index)=> {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{newTeam.name}</td>
                                <td>{newTeam.played}</td>
                                <td>{newTeam.won}</td>
                                <td>{newTeam.drawn}</td>
                                <td>{newTeam.lost}</td>
                                <td>{newTeam.goalsFor}</td>
                                <td>{newTeam.goalsAgainst}</td>
                                <td>{newTeam.goalsDrawn}</td>
                                <td>{newTeam.points}</td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    );
}

export default LiveLeagueTablePage3;