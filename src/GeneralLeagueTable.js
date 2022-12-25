import React, {useEffect, useState} from 'react';
import './Table.css';


const GeneralLeagueTable = (props) => {
    const [teamsList,setTeamsList]=useState(props.list);
  // let teamsList = ;



    // const updateList = () => {
    //     let list = [];
    //     teamsList.map((teamFromServer ) => {
    //         const newTeam = {
    //             name : teamFromServer.name ,
    //             played : teamFromServer.gamesWon + teamFromServer.gamesLost + teamFromServer.gameDrawn ,
    //             won : teamFromServer.gamesWon ,
    //             drawn: teamFromServer.gameDrawn ,
    //             lost : teamFromServer.gamesLost ,
    //             goalsFor : teamFromServer.goalsFor ,
    //             goalsAgainst : teamFromServer.goalAgainst,
    //             goalsDrawn : teamFromServer.goalsFor - teamFromServer.goalAgainst,
    //             points : teamFromServer.gamesWon * 3 + teamFromServer.gameDrawn
    //         }
    //         list.push(newTeam);
    //     })
    //     list=list.sort();
    //
    //     list = list.sort((a,b) => {
    //         return (
    //             b.goalsDrawn - a.goalsDrawn
    //         )
    //     });
    //     list = list.sort((a,b) => {
    //         return (
    //             b.points - a.points
    //         )
    //     });
    //     setTeamsList(list);
    // }



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
                    teamsList.map((newTeam,index)=> {
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
};

export default GeneralLeagueTable ;