import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { fs } from '../../../Config/Config';
import { doc, getDoc } from "firebase/firestore";
import Back from '../../../components/back/backDokter'
import Header from '../../../components/head/Header';
import Footer from '../../../components/foot/Footer';
import axios from 'axios';
import "../dokter.css"
import Whatsapp from '../../../components/Whatsapp';

const DokterDetail = () => {
    const [dokters, setDokters] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getDokters();
        window.scrollTo(0, 0)
    }, []);

    const getDokters = async () => {
        const response = await axios.get(`http://localhost:5000/dokters/${id}`);
        setDokters(response.data)
    }
    return (
        <>
            <Header />
            <div>
                <div className="hero-back">
                    <section className="hero">
                        {/* <img src={back} alt="" /> */}
                        <h1>{dokters.name}</h1>
                        <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                            <Link to="/">Home / </Link>
                            <Link to="/Dokter">Dokter / </Link>
                            <p>{dokters.name}</p>
                        </div>
                    </section>
                </div>
                <div className='contain'>
                    <div className='dr'>
                        <img src={dokters.url} />
                        <div className='description'>
                            <h2>{dokters.name}</h2>
                            <p>{dokters.profesi}</p>
                            <hr className='hr1' color="#263159" width="30%" ></hr>
                            <br />
                            <p style={{ marginTop: "-20px" }}>{dokters.description}</p>
                            <hr color="#263159"  ></hr>
                            <br />
                            <div className='jadwal'>
                                <div className='jadwalP'>
                                    <p>Jadwal Praktek :</p>
                                </div>
                                <div className='day'>
                                    <div className='dayy'>
                                        <div className='des'>
                                            <p>Senin</p>
                                            <span>{dokters.senin}</span>
                                        </div>
                                        <div className='des'>
                                            <p>Selasa</p>
                                            <span>{dokters.selasa}</span>
                                        </div>
                                        <div className='des'>
                                            <p>Rabu</p>
                                            <span>{dokters.rabu}</span>
                                        </div>
                                        <div className='des'>
                                            <p>Kamis</p>
                                            <span>{dokters.kamis}</span>
                                        </div>
                                        <div className='des'>
                                            <p>Jum'at</p>
                                            <span>{dokters.jumat}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Whatsapp/>
            <Footer />
        </>
    )
}

export default DokterDetail