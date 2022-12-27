import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import LiveResultPage1 from "./LiveResultPage1";
import LeagueTablePage2 from "./LeagueTablePage2";
import LiveLeagueTablePage3 from "./LiveLeagueTablePage3";
import SignInPage4 from "./SignInPage4";

const Navbar = () => {
    const activeMenuClass=({isActive})=>(isActive ? "active-menu":"non-active-menu")
    const links=[{to:"/LiveResultPage1",text:"Live Result"},{to:"/LeagueTablePage2",text:"League Table"}
        ,{to:"/LiveLeagueTablePage3",text:"Live League Table"},{to:"/SignInPage4",text:"Sign In"}]
    return (
        <div>
            <BrowserRouter>
                <nav className={"navMenu"}>

                    {
                        links.map((link)=>{
                            return(
                                    <NavLink to={link.to} className={activeMenuClass}> {link.text} <br/></NavLink>

                            )
                        })
                    }
                    <div id="indicator"></div>
                </nav>

                <Routes>
                    <Route path={"/LiveResultPage1"} element={<LiveResultPage1/>}/>
                    <Route path={"/LeagueTablePage2"} element={<LeagueTablePage2/>}/>
                    <Route path={"/LiveLeagueTablePage3"} element={<LiveLeagueTablePage3/>}/>
                    <Route path={"/SignInPage4"} element={<SignInPage4/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default Navbar;
