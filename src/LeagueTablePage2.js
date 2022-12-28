import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Table.css';
import GeneralLeagueTable from "./GeneralLeagueTable";

const LeagueTablePage2 = () => {

    const [allTeamsFromServer, setAllTeamsFromServer] = useState([]);

    useEffect((e) => {
        axios.get("http://localhost:8989/get-all-teams").then((res) => {
            setAllTeamsFromServer(res.data)
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
