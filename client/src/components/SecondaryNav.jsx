import React, {useState} from 'react';
import {Link} from 'react-router-dom'


const SecondaryNav = () => {
    const tabs = [{url: "list", text: "List"}, {url: "addplayer", text: "Add Player"}]
    const [activeTab, setActiveTab] = useState(tabs[0].url)

    return (
        <div className="nav nav-tabs mb-4">
            {tabs.map( (tab, i) => { return ( 
                <div key={i} className="nav-item">
                    <Link onClick={ () => {setActiveTab(tab.url)}} className={`nav-link ${activeTab===tab.url ? "active" : ""}`} to={`/players/${tab.url}`}>{tab.text}</Link>
                </div>
            )})}
        </div>
    );
};



export default SecondaryNav;