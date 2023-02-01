import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./header.css"
import Navbar from "./Navbar"
// import Search from "./Search"
import { logo_foot_poli, email_head, telp_head, lokasi_head, jam_head, logo_poli_foot, logo_poli } from '../../assets';


class Header extends Component {
    render() {
        const icon = [
            {
                id: 1,
                icon: telp_head,
                desc: "TELEPON",
                desc2: " 0811 9059 118",
            },
            {
                id: 2,
                icon: email_head,
                desc: "JAM",
                desc2: "Senin-Jumat",
            },
            {
                id: 2,
                icon: jam_head,
                desc: "JAM",
                desc2: "Senin-Jumat ",
            },
        ];



        return (
            <div className="head-content">
                {/* <div className="header-top">
                    <h6>
                        Buka : Senin - Jum'at 07.00 - 16.30 WIB
                    </h6>
                    <span>
                            Sabtu & Minggu tutup
                        </span>
                </div> */}
                <div className='head'>
                    {/* LOGO */}
                    <div className='logo'>
                        <img width={220} src={logo_poli} alt="" />
                    </div>
                    {/* ICON HEADER */}
                    <div className='head_icon'>
                        {/* {icon.map((item) => {
                            return ( */}
                                <ul className='icon'>
                                    <li >
                                        <img src={telp_head} alt="" />
                                        <div>
                                            <p className='desc'>TELEPON</p>
                                            <p className='desc2'> 0811 9059 118</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img  src={email_head} alt="" />
                                        <div>
                                            <p className='desc'>EMAIL</p>
                                            <p className='desc2'> admpoliklinik.ut@ykbut.co.id</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={jam_head} alt="" />
                                        <div>
                                            <p className='desc'>JAM</p>
                                            <p className='desc2'>07.00 - 16.30 WIB</p>
                                            <p className='desc3'>Sabtu & Minggu Tutup</p>
                                        </div>
                                    </li>
                                </ul>
                            {/* )
                        })} */}
                    </div>
                </div>
                <Navbar />
            </div>
        )
    }
}
export default Header;