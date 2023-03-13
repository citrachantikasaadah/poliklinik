import React, { useEffect, useState } from 'react'
import Back from '../../../components/back/backTentangKami'
import { gedung_poli } from '../../../assets'
import './sejarah.css'
import Header from '../../../components/head/Header'
import Footer from '../../../components/foot/Footer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getMe } from '../../cms/features/AuthSlice'
import Whatsapp from '../../../components/Whatsapp'

const Sejarah = () => {

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
      <div className="hero-back">
        <section className="hero">
          {/* <img src={back} alt="" /> */}
          <h1>Sejarah</h1>
          <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            <Link to="/">Home / </Link>
            <Link to="/Sejarah">Tentang Kami / </Link>
            <p>Sejarah</p>
          </div>
          {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

        </section>
      </div>
      <div className='container-sejarah'>
       
              <div className='sejarah-img'>
                <img src={tentangkami.url} />
              </div>
              <div className='content-sejarah'>
                <h2>TENTANG POLIKLINIK</h2>
                {/* <hr color="#263159" width={150} style={{display: "flex", justifyContent: "center"}} ></hr> */}
                <p><div dangerouslySetInnerHTML={{ __html: tentangkami.sejarah }} /></p>
                {/* <p>
               United Tractors melalui Yayasan Karya Bakti UT mendirikan Poliklinik UT, sebagai bentuk karya bakti untuk negeri di bidang Kesehatan. Dengan semangat, untuk meningkatkan derajat kesehatan karyawan, keluarga dan masyarakat sekitar.Dalam perjalanannya, Poliklinik akan memperluas layanannya dengan membuka poliklinik baru di berbagai kota di Indonesia.Poliklinik UT hadir dengan berbagai layanan kesehatan yang komperehensif meliputi pelayanan promotif, preventif, kuratif dan rehabilitatif.
              </p> */}
              </div>
              {/* <div className='sejarah-img'> */}
              <h2>STRUKTUR ORGANISASI</h2>
              <h4>Poliklinik United Tractors</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img width={900} src={tentangkami.urlstruktur} />
              </div>

              {/* </div> */}
       

      </div>
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default Sejarah