import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    const tabs = ["list", "status"]
    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <div className="container w-50 mt-3 nav nav-tabs">
                <div className="nav-item">
                    <Link onClick={e => {setActiveTab(tabs[0])}} className={`nav-link ${activeTab==="list" ? "active" : ""}`} to="/players/list">Manage Players</Link>
                </div>
                <div className="nav-item">
                    <Link onClick={e => {setActiveTab(tabs[1])}} className={`nav-link ${activeTab==="status" ? "active" : ""}`} to="/status/game/1">Manage Player Status</Link>
                </div>
        </div>
    );
};


export default Nav;