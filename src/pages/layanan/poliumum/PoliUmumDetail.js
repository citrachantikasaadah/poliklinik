import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Back from '../../../components/back/backLayanan';
import Footer from '../../../components/foot/Footer';
import Header from '../../../components/head/Header';
import Whatsapp from '../../../components/Whatsapp';

const PoliUmumDetail = () => {
    const [poliumum, setPoliUmum] = useState([]);
    const { uuid } = useParams();

    useEffect(() => {
        getDokters();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getDokters = async () => {
        const response = await axios.get(`http://localhost:5000/poliumum/${uuid}`);
        setPoliUmum(response.data)
    }

    return (
        <>
            <Header />
            <div className="hero-back">
                <section className="hero">
                    {/* <img src={back} alt="" /> */}
                    <h1>{poliumum.title}</h1>
                    <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                        <Link to="/">Home / </Link>
                        <Link to="/PoliUmum"> Layanan / </Link>
                        <Link to="/PoliUmum"> Poli Umum / </Link>
                        <p>{poliumum.title}</p>
                    </div>
                    {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

                </section>
            </div>
            <div className='content-edukasi-detail'>
                <div className='content-edukasi-content'>

                    <div className='content-detail'>
                        <h2 style={{ textAlign: "center" }}>{poliumum.title}</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img width={400} src={poliumum.url} />
                        </div>
                        {/* <p>{poliumum.description}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: poliumum.description }} />

                    </div>
                </div>
            </div>
            <Whatsapp/>
            <Footer />
        </>
    )
}

export default PoliUmumDetail