import React, { Component, useState } from 'react';
import "./dropdown.css"
import { Link } from "react-router-dom";

function Dropdown() {

    const [dropdownlayanan, setDropdownLayanan] = useState(false);

    const Layanan = [
        {
            id: 1,
            title: "Poli Umum",
            path: "/PoliUmum",
        },
        {
            id: 2,
            title: "Poli Gigi",
            path: "/PoliGigi",
        },
    ];

    return (
        <>
            <ul
                className={dropdownlayanan ? "tentangkamiClicked" : "tentangkamiLayanan"}
                onClick={() => setDropdownLayanan(!dropdownlayanan)}>
                {Layanan.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                                to={item.path}
                                className='submenuitem'
                                onClick={() => setDropdownLayanan(false)}
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