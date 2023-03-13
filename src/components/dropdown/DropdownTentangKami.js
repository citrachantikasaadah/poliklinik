import React, { Component, useState } from 'react';
import "./dropdown.css"
import { Link } from "react-router-dom";

function Dropdown() {

    const [dropdown, setDropdown] = useState(false);

    const TentangKami = [
        {
            id: 1,
            title: "Sejarah",
            path: "/Sejarah",
        },
        {
            id: 2,
            title: "VisiMisi",
            path: "/VisiMisi",
        },
        // {
        //     id: 3,
        //     title: "Struktur Organisasi",
        //     path: "/StrukturOrganisasi",
        // },
        // {
        //     id: 4,
        //     title: "Jadwal",
        //     path: "/Jadwal",
        // },
    ];

    return (
        <>
            <ul
                className={dropdown ? "tentangkamiClicked" : "tentangkami"}
                onClick={() => setDropdown(!dropdown)}>
                {TentangKami.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                                to={item.path}
                                className='submenuitem'
                                onClick={() => setDropdown(false)}
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