import React, { useEffect, useState } from 'react'
import './visimisi.css'
import Back from '../../../components/back/backTentangKami'
import { prima } from '../../../assets'
import Footer from '../../../components/foot/Footer'
import Header from '../../../components/head/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Whatsapp from '../../../components/Whatsapp'

const VisiMisi = () => {

  const [tentangkami, setTentangKami] = useState([]);

  useEffect(() => {
    getTentangKami();
    window.scrollTo(0, 0)
  }, []);

  const getTentangKami = async () => {
    const response = await axios.get("http://localhost:5000/sejarah/1");
    setTentangKami(response.data)
  }
  return (
    <>
      <Header />
      <div className='visi'>
        <div className="hero-back">
          <section className="hero">
            {/* <img src={back} alt="" /> */}
            <h1>Visi Misi</h1>
            <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <Link to="/">Home / </Link>
              <Link to="/VisiMisi"> Tentang Kami / </Link>
              <p>Visi Misi</p>
            </div>
            {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

          </section>
        </div>
        <div className='container-visimisi'>
          {/* {tentangkami.map((tentangkami) => {
            return (
              <> */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ float: 'right' }}>
                    <h2 style={{ color: "#263159", fontWeight: "600" }}>CULTURE POLIKLINIK</h2>
                    <img width={400} src={prima} />
                  </div>
                  <div className='content-visimisi'>
                    <h2>WBAWI</h2>
                    {/* <p>Menyelenggarakan pelayanan Kesehatan yang bermutu, dengan mengutamakan keselamatan pasien; Menyediakan pelayanan kesehatan yang ramah, cepat dan profesional; Menyelenggarakan pelayanan kesehatan sesuai terstandart dan perkembangan teknologi; Mengembangkan summberdaya Klinik.</p> */}
                    <p><div dangerouslySetInnerHTML={{ __html: tentangkami.wbawi}} /></p>
                    <h2>VISI</h2>
                    <p><div dangerouslySetInnerHTML={{ __html: tentangkami.visi }} /></p>
                    {/* <p>"Menjadi Klinik Kesehatan pilihan utama dengan pelayanan yang prima dan menjadi Strategic Partner EHS/HC Dept dan Manajemen dalam pengelolaan Kesehatan"</p> */}
                    <h2>MISI</h2>
                    {/* <p>
                      <ul>
                        <li>- Menyelenggarakan pelayanan Kesehatan yang bermutu, dengan mengutamakan keselamatan pasien.</li>
                        <li>- Menyediakan pelayanan kesehatan yang ramah, cepat dan profesional.</li>
                        <li>- Menyelenggarakan pelayanan kesehatan sesuai terstandart dan perkembangan teknologi.</li>
                        <li>- Mengembangkan summberdaya Klinik.</li>
                      </ul>
                    </p> */}
                    <p><div dangerouslySetInnerHTML={{ __html: tentangkami.misi }} /></p>
                  </div>
                </div>
              {/* </>
            )
          })} */}

        </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default VisiMisi