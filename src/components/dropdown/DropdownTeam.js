import React, { Component, useState } from 'react';
import  "./dropdown.css"
import { Link } from "react-router-dom";

function Dropdown() {

    const [dropdownteam, setDropdownTeam] = useState(false);

    const Team = [
        {
            id: 1,
            title: "Dokter",
            path: "/Dokter",
        },
        {
            id: 2,
            title: "Team",
            path: "/Team"
        },
    ]
    

    return (
        <>
            <ul
             className={dropdownteam ? "tentangkamiClicked" : "tentangkami"}
             onClick={() => setDropdownTeam(!dropdownteam)}>
                {Team.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                                to={item.path}
                                className='submenuitem'
                                onClick={() => setDropdownTeam(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </>
    )
}

export default Dropdown;