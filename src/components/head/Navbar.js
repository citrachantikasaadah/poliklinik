// import React, { Component, useState } from 'react';
// import { Link } from "react-router-dom";
// import "./header.css"
// import Search from './Search';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaBars, FaTimes } from "react-icons/fa"
// import DropdownLayanan from "../dropdown/DropdownLayanan"
// import DropdownTeam from "../dropdown/DropdownTeam"
// import DropdownTentangKami from "../dropdown/DropdownTentangKami"

// function Navbar() {

//     const [dropdown, setDropdown] = useState(false);
//     const [dropdownteam, setDropdownTeam] = useState(false);
//     const [dropdownlayanan, setDropdownTeamLayanan] = useState(false);

//     const navItems = [
//         {
//             id: 1,
//             title: "Beranda",
//             path: "/",
//             cName: "nav-item"
//         },
//         {
//             id: 2,
//             title: "Tentang Kami",
//             // path: ",
//             cName: "nav-item"
//         },
//         {
//             id: 3,
//             title: "Layanan",
//             // path: "/layanan",
//             cName: "nav-item"
//         },
//         {
//             id: 4,
//             title: "Team",
//             // path: "/profildokter",
//             cName: "nav-item"
//         },
//         {
//             id: 5,
//             title: "Edukasi",
//             path: "/edukasi",
//             cName: "nav-item"
//         },
//         {
//             id: 6,
//             title: "Kontak",
//             path: "/kontak",
//             cName: "nav-item"
//         },
//     ]
//     return (
//         <>
//             <div className='konten'>
//                 <nav className='navbar'>
// <ul className='navItems'>
//     {navItems.map((item) => {
// if (item.title === "Tentang Kami") {
//     return (
//         <li
//             key={item.id}
//             className='navItem'
//             onMouseEnter={() => setDropdown(true)}
//             onMouseLeave={() => setDropdown(false)}
//         >
//             <Link to={item.path} >{item.title}<MdKeyboardArrowDown /></Link>
//             {dropdown && <DropdownTentangKami />}
//         </li>
//     )
// }

// if (item.title === "Team") {
//     return (
//         <li
//             key={item.id}
//             className='navItem'
//             onMouseEnter={() => setDropdownTeam(true)}
//             onMouseLeave={() => setDropdownTeam(false)}
//         >
//             <Link to={item.path} >{item.title}<MdKeyboardArrowDown /></Link>
//             {dropdownteam && <DropdownTeam />}
//         </li>
//     )
// }

// if (item.title === "Layanan") {
//     return (
//         <li
//             key={item.id}
//             className='navItem'
//             onMouseEnter={() => setDropdownTeamLayanan(true)}
//             onMouseLeave={() => setDropdownTeamLayanan(false)}
//         >
//             <Link to={item.path} >{item.title}<MdKeyboardArrowDown /></Link>
//             {dropdownlayanan && <DropdownLayanan />}
//         </li>
//     )
// }
//         return (
// <li key={item.id} className='navItem'>
//     <Link to={item.path} className='dropdown'>{item.title}</Link>
// </li>


//         )
//     })}
// </ul>
//                     {/* <Search /> */}
//                 </nav>
//             </div>
//         </>
//     )

// }

// export default Navbar;

import React from 'react'
import { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import "./header.css"
import DropdownLayanan from "../dropdown/DropdownLayanan"
import DropdownTeam from "../dropdown/DropdownTeam"
import DropdownTentangKami from "../dropdown/DropdownTentangKami"

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
    const [dropdownteam, setDropdownTeam] = useState(false);
    const [dropdownlayanan, setDropdownTeamLayanan] = useState(false);

    const navItems = [
        {
            id: 1,
            title: "Beranda",
            path: "/",
            cName: "nav-item"
        },
        {
            id: 2,
            title: "Tentang Kami",
            // path: ",
            cName: "nav-item"
        },
        {
            id: 3,
            title: "Layanan",
            // path: "/layanan",
            cName: "nav-item"
        },
        {
            id: 4,
            title: "Dokter",
            path: "/Dokter",
            cName: "nav-item"
        },
        {
            id: 5,
            title: "Edukasi",
            path: "/edukasiHome",
            cName: "nav-item"
        },
        {
            id: 7,
            title: "Galeri CSR",
            path: "/galeri",
            cName: "nav-item"
        },
        {
            id: 6,
            title: "Kontak",
            path: "/kontak",
            cName: "nav-item"
        },

    ]

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <nav ref={navRef}>
                <ul className='navItems'>
                    {navItems.map((item) => {
                        if (item.title === "Tentang Kami") {
                            return (
                                <li
                                    key={item.id}
                                    className='navItem'
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path} >{item.title}<MdKeyboardArrowDown /></Link>
                                    {dropdown && <DropdownTentangKami />}
                                </li>
                            )
                        }

                        if (item.title === "Team") {
                            return (
                                <li
                                    key={item.id}
                                    className='navItem'
                                    onMouseEnter={() => setDropdownTeam(true)}
                                    onMouseLeave={() => setDropdownTeam(false)}
                                >
                                    <Link to={item.path} >{item.title}<MdKeyboardArrowDown /></Link>
                                    {dropdownteam && <DropdownTeam />}
                                </li>
                            )
                        }

                        if (item.title === "Layanan") {
                            return (
                                <li
                                    key={item.id}
                                    className='navItem'
                                    onMouseEnter={() => setDropdownTeamLayanan(true)}
                                    onMouseLeave={() => setDropdownTeamLayanan(false)}
                                >
                                    <Link to={item.path} >{item.title}<MdKeyboardArrowDown /></Link>
                                    {dropdownlayanan && <DropdownLayanan />}
                                </li>
                            )
                        }
                        return (
                            <li key={item.id} className='navItem'>
                                <Link to={item.path} className='dropdown'>{item.title}</Link>
                            </li>
                        )
                    })}
                    {/* <li>
                        <Link to="/">Beranda</Link>
                        <Link to="/">Tentang Kami</Link>
                        <Link to="/">Layanan</Link>
                        <Link to="/">Beranda</Link>
                        <Link to="/">Beranda</Link>
                        <Link to="/">Beranda</Link>
                    </li> */}
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar