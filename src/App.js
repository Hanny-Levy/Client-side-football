import './App.css';
import Navbar from "./Navbar";

import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    state = {
        users : [],
        teams : [],
        games : []
    }

    componentDidMount() {

    }

    render() {
        return (
            <div >
                <Navbar/>
            </div>
        );
    }
}


export default App;
