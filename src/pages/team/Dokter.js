
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai';
import Header from '../../components/head/Header';
import Footer from '../../components/foot/Footer';
import Back from '../../components/back/backDokter';
import "./profildokter.css"
import Whatsapp from '../../components/Whatsapp';

const Dokter = () => {
    const [dokters, setDokters] = useState([]);

    useEffect(() => {
        getEdukasis();
        window.scrollTo(0, 0)
    }, []);

    const getEdukasis = async () => {
        const response = await axios.get("http://localhost:5000/dokters");
        setDokters(response.data)
    }

    return (
        <>
            <Header />
            <div>
                <div className="hero-back">
                    <section className="hero">
                        {/* <img src={back} alt="" /> */}
                        <h1>Dokter</h1>
                        <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                            <Link to="/">Home / </Link>
                            <p>Dokter</p>
                        </div>
                    </section>
                </div>
                {dokters.length > 0 && (
                    <div className='contain'>
                        {dokters.map((dokters) => {
                            return (
                                <>
                                    <div className='box1'>
                                        <div className='pict'>
                                            <img className='image' src={dokters.url} />
                                            <div class="middle">
                                                <Link className='button' to={`/detail-dokter/${dokters.id}`}>
                                                    <h2>Lihat profil</h2>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='box'>
                                            <div className='box-name'>
                                                <h2>{dokters.name}</h2>
                                            </div>
                                            <hr color="#fff"></hr>
                                            <div className='profesi'>
                                                <p>{dokters.profesi}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}



                    </div>
                )
                }
                {
                    dokters.length < 1 && (
                        <div className='my-products please-wait'>Please wait...</div>
                    )
                }
            </div>
            <Whatsapp/>
            <Footer />
        </>
    )
}

export default Dokter