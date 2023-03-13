import React, { useEffect, useState } from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiOutlineMail, AiFillCaretRight } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { logo_poli } from '../../assets';
import "./footer.css"
import axios from 'axios';

const Footer = () => {


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
        <div className='content'>
            <div className='footer'>
                <div className='content-footer'>
                    <div className='footer-box-social'>
                        <div className='logo-area'>
                            <img width={220} src={logo_poli} />
                        </div>

                        <div className='desc-area'>
                            <p>{kontak.alamat}</p>
                        </div>

                        <div className='footer-social'>
                            <a href="https://www.instagram.com/poliklinikpratama.ut/?hl=id">
                                <AiFillInstagram />
                            </a>
                            {/* <a href="#">
                                <AiFillYoutube />
                            </a>
                            <a href="#">
                                <AiFillLinkedin />
                            </a>
                            <a href="#">
                                <AiFillFacebook />
                            </a> */}
                        </div>
                    </div>

                    <div className='link-area'>
                        <ul className='link-header'>
                            <li className='link-name'>Link</li>
                            <li> <a href="/"><IoIosArrowForward />Beranda</a> </li>
                            <li> <a href="/Dokter"><IoIosArrowForward />Dokter</a> </li>
                            <li> <a href="/edukasi"><IoIosArrowForward />Edukasi</a> </li>
                            <li> <a href="/galeri"><IoIosArrowForward />Galeri</a> </li>
                            <li> <a href="/kontak"><IoIosArrowForward />Kontak</a> </li>
                        </ul>

                        <ul className='link-header'>
                            <li className='link-name'>Layanan</li>
                            <li> <a href="/PoliUmum"><IoIosArrowForward />Poli Umum</a> </li>
                            <li> <a href="/PoliGigi"><IoIosArrowForward />Poli Gigi</a> </li>
                        </ul>

                        <ul className='link-header'>
                            <li className='link-name'>Kontak</li>
                            <li> <a style={{color: "#263159"}}><MdEmail style={{color: "#263159"}} />  {kontak.email}</a> </li>
                            <li> <a style={{color: "#263159"}}><BsFillTelephoneFill style={{color: "#263159"}}/> {kontak.telepon}</a> </li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div className='footer-bottom'>
                    <div className='footer-copy'>
                        <p className='footer-col'>
                            &copy;{new Date().getFullYear()} Poliklinik United Tractors | All right reserve
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer

