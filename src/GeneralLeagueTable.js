import React from 'react';
import './Table.css';

const GeneralLeagueTable = (props) => {
    const teamsList = props.list;
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