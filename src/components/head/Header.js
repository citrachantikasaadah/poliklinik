import React, { Component, useEffect, useState } from "react";
import "./header.css"
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Navbar from "./Navbar"
import axios from "axios";
import { logo_poli } from '../../assets';

const Header = () => {
    const [kontak, setKontak] = useState([]);

    useEffect(() => {
        getTentangKami();
        window.scrollTo(0, 0)
    }, []);

    const getTentangKami = async () => {
        const response = await axios.get("http://localhost:5000/kontak/1");
        setKontak(response.data)
    }
    return (
        <div className="head-content">
            <div className='head'>
                {/* LOGO */}
                <div className='logo'>
                    <a href="/"><img width={220} src={logo_poli} alt="" /></a>
                </div>
                {/* ICON HEADER */}
                <div className='head_icon'>
                    <ul className='icon'>
                        <li className="contact-item" >
                            <div className="icon-box">
                                <a><BsTelephone style={{ color: "#5ec5cc" }} /></a>
                            </div>
                            <div className="item-box">
                                <p className='desc'>TELEPON</p>
                                <p className='desc2'> {kontak.telepon}</p>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <a><AiOutlineMail style={{ color: "#5ec5cc" }} /></a>
                            </div>
                            <div className="item-box">
                                <p className='desc'>EMAIL</p>
                                <p className='desc2'>{kontak.email}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navv">
                <Navbar />
            </div>
        </div>
    )
}

export default Header