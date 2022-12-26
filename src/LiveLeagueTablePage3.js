import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';
import GeneralLeagueTable from "./GeneralLeagueTable";


const LiveLeagueTablePage3 = () => {

    let [updatedTeamsList, setUpdatedTeamsList] = useState([]);

    useEffect((e) => {
        axios.get("http://localhost:8989/get-lives").then((res) => {
            setUpdatedTeamsList(res.data);
            //updateList
            e.preventDefault();})
        });

    return (
        <div>
            <GeneralLeagueTable list={updatedTeamsList}/>
        </div>
    );
}

export default LiveLeagueTablePage3;
