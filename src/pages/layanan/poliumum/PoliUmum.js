import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Back from '../../../components/back/backLayanan'
import Header from '../../../components/head/Header'
import Footer from '../../../components/foot/Footer'
import { } from "react-icons/fa"
import axios from 'axios'
import "../poliumum.css"
import Whatsapp from '../../../components/Whatsapp'

const PoliUmum = () => {

  const [poliumum, setPoliUmum] = useState([]);

  useEffect(() => {
    getPoliUmum();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getPoliUmum = async () => {
    const response = await axios.get("http://localhost:5000/poliumum");
    setPoliUmum(response.data)
  }
  return (
    <>
      <Header />
      <div>
        <div className="hero-back">
          <section className="hero">
            {/* <img src={back} alt="" /> */}
            <h1>Poli Umum</h1>
            <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <Link to="/">Home / </Link>
              <Link to="/PoliUmum"> Layanan / </Link>
              <p>Poli Umum</p>
            </div>
            {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

          </section>
        </div>
        <div className='layanan'>
          <h2>LAYANAN</h2>
          <div className="container-layanan" >
            {poliumum.map((poliumum) => {
              return (
                <div className='box-layanan'>
                  <div className='detail-layanan'>
                    <div className='icon-layanan'>
                      <img src={poliumum.urlicon} />
                    </div>
                    <div className='title-layanan'>
                      <h2>{poliumum.title}</h2>
                    </div>
                    <div className='button-layanan'>
                      <Link to={`/poli-umum-detail/${poliumum.uuid}`}>Lihat Detail</Link>
                    </div>
                  </div>

                </div>
              )
            })}

          </div>
        </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default PoliUmum