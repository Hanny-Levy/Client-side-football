import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';
import GeneralLeagueTable from "./GeneralLeagueTable";

const LeagueTablePage2 = () => {

    const [allTeamsFromServer, setAllTeamsFromServer] = useState([]);

    useEffect((e) => {
        axios.get("http://localhost:8989/getAllTeams").then((res) => {
            setAllTeamsFromServer(res.data)
            //updateList();
            e.preventDefault();
        })
    },[]);

    return (
        <div>
            <GeneralLeagueTable list={allTeamsFromServer}/>
        </div>
    );
}
export default LeagueTablePage2;
