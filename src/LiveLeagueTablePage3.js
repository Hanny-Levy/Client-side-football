import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';

const LiveLeagueTablePage3 = () => {


    const [allTeams, setAllTeams] = useState([]);


    useEffect((e) => {
        axios.get("http://localhost:8989/getAllTeams").then((res) => {
            setAllTeams(res.data)
            e.preventDefault();

        })
    });



    return (
        <div className="table-wrapper">

            <table className="fl-table">
                <tr>
                    <td >
                        Position
                    </td>
                    <td>
                        Team name
                    </td>
                    <td>
                        Points
                    </td>
                    <td >
                        GoalsFor
                    </td>
                    <td >
                        GoalAgainst
                    </td>
                </tr>
            </table>

        </div>
    );
};

export default LiveLeagueTablePage3;