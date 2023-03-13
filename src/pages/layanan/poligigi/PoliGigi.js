import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { antigen3, slide2, slide3, slide4 } from '../../../assets'
import Back from '../../../components/back/backLayanan'
import { poliGigi, poliUmum } from '../../../components/dummydata'
import { DokterPoliGigi } from '../../team/dataDokter'
import Header from '../../../components/head/Header'
import Footer from '../../../components/foot/Footer'
import { } from "react-icons/fa"
import axios from 'axios'
import Whatsapp from '../../../components/Whatsapp'

const PoliGigi = () => {

  const [poligigis, setPoliGigi] = useState([]);

  useEffect(() => {
    getEdukasis();
    window.scrollTo(0, 0)
  }, []);

  const getEdukasis = async () => {
    const response = await axios.get("http://localhost:5000/poligigis");
    setPoliGigi(response.data)
  }
  return (
    <>
      <Header />
      <div>
        <div className="hero-back">
          <section className="hero">
            {/* <img src={back} alt="" /> */}
            <h1>Poli Gigi</h1>
            <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <Link to="/">Home / </Link>
              <Link to="/PoliGigi"> Layanan / </Link>
              <p>Poli Gigi</p>
            </div>
            {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

          </section>
        </div>
        <div className='layanan'>
          <h2>LAYANAN</h2>
          <div className="container-layanan" >
            {poligigis.map((poligigi) => {
              return (
                <div className='box-layanan'>
                  <div className='detail-layanan'>
                    <div className='icon-layanan'>
                      <img src={poligigi.urlicon} />
                    </div>
                    <div className='title-layanan'>
                      <h2>{poligigi.title}</h2>
                    </div>
                    <div className='button-layanan'>
                      <Link to={`/poli-gigi-detail/${poligigi.id}`}>Lihat Detail</Link>
                    </div>
                  </div>

                </div>
              )
            })}

          </div>
          {/* <h2>DOKTER</h2>
          <div className='content-dokter'>
            {DokterPoliGigi.map((item) => {
              return (
                <div className='box1'>
                  <div className='pict'>
                    <img className='image' src={item.pict} />
                    <div class="middle">
                      <Link className='button' to={item.path}>
                        <h2>Lihat profil</h2>
                      </Link>
                    </div>
                  </div>

                  <div className='box'>
                    <div className='box-name'>
                      <h2>{item.name}</h2>
                    </div>


                    <hr color="#fff"></hr>
                    <div className='profesi'>
                      <p>{item.profesi}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> */}

          {/* <h2>GALERI</h2>
          <div className='galeri-layanan'>
            <div className='content-galeri'>
              <img src={slide3} />
              <img src={slide4} />
              <img src={slide2} />

            </div>
          </div> */}
        </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default PoliGigi