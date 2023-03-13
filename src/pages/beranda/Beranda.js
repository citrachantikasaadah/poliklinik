import "./beranda.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight, AiOutlineArrowRight } from 'react-icons/ai';
import ImageSlider from "./ImageSlider"
import Carousel from "../../pages/beranda/Carousel"
import { fasilitas, news, slides } from '../../components/dummydata';
import { hero, vidiopoli } from '../../assets';
import React from 'react'
import Blog from "../edukasi/Blog";
import Footer from "../../components/foot/Footer";
import Header from "../../components/head/Header";
import axios from "axios";
import { excerpt } from "../../components/utility";
import Whatsapp from "../../components/Whatsapp";
import Scroll from "../../components/Scroll";
import Slider from "../iklan/Slider.js"

const Beranda = () => {

    const [slides, setEdukasis] = useState([]);

    useEffect(() => {
        getEdukasis();
        window.scrollTo(0, 0)
    }, []);

    const getEdukasis = async () => {
        const response = await axios.get("http://localhost:5000/iklans");
        setEdukasis(response.data)
    }
    console.log("slides", slides)
    return (
        <>
            <Header />
            <div className='beranda-container'>
                {/* BANNER */}
                <div className='hero-beranda'>
                    <div className="container-beranda">
                        <h1>POLIKLINIK</h1>
                        <h1>UNITED TRACTORS</h1>
                        <div className='more-beranda'>
                            <a href="https://reservasi.myklinik.id/?reservasiOnline=OFVLb1ZEdGZWL1pCVlpmZnlxcmJlUT09">Daftar disini <AiFillCaretRight /></a>
                        </div>
                    </div>
                </div>

                {/* SLIDER */}
                <div className="containerStyles" >
                    <h2>Kesehatan anda adalah prioritas kami</h2>
                    <ImageSlider >
                        {slides.map((s) => {
                            return (
                                <img style={{ width: "100%", height: "100%" }} src={s.url} />

                            )

                        })}
                    </ImageSlider>
                    {/* <Slider/> */}
                </div>
                {/* KEUNGGULAN LAYANAN */}
                <div className='fasilitas'>
                    <div className='title-fasilitas'>
                        <h2>Keunggulan Layanan</h2>
                        <h5>Melayani dengan sepenuh hati</h5>
                    </div>
                    <div className="container-fasilitas" style={{ display: 'flex', flexDirection: 'row' }}>
                        {fasilitas.map((item) => {
                            return (
                                <div className='box-fasilitas'>
                                    <div className='keunggulan'>
                                        <div className="keunggulan-img">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* EDUKASI */}
                <div className="edukasi">
                    <div className="title-edukasi">
                        <h2>Edukasi</h2>
                    </div>
                    <Blog />
                    <div className="read-more-edukasi">
                        <Link className="read" to="/Edukasi">Lihat semua <AiOutlineArrowRight /></Link>
                    </div>

                </div>

            </div>
            <Whatsapp/>
            <Scroll/>
            <Footer />
        </>
    )
}
export default Beranda