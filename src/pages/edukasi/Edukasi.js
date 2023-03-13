import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { edukasi } from '../../assets'
import Back from '../../components/back/back'
import Footer from '../../components/foot/Footer'
import Header from '../../components/head/Header'
import { excerpt } from '../../components/utility'
import Whatsapp from '../../components/Whatsapp'
import Blog from './Blog'

const Edukasi = () => {
  const [edukasis, setEdukasis] = useState([]);

  useEffect(() => {
    getEdukasis();
    window.scrollTo(0, 0)
  }, []);

  const getEdukasis = async () => {
    const response = await axios.get("http://localhost:5000/edukasis");
    setEdukasis(response.data)
  }
  return (
    <>
      <Header />
      <div>
        <div className="hero-back">
          <section className="hero">
            {/* <img src={back} alt="" /> */}
            <h1>Edukasi</h1>
            <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <Link to="/">Home / </Link>
              <p>Edukasi</p>
            </div>
          </section>
        </div>
        <div className='edukasi-blog'>
          {edukasis.map((edukasi) => {
            return (
              <>
                <div className='post-blog'>
                  <div className='image-blog'>
                    <img src={edukasi.url} />
                  </div>

                  <div className='text-blog'>
                    <h2>{edukasi.title}</h2>
                    <span style={{ color: "gray" }}>{edukasi.createdAt}</span>
                    <div className='des-blog'>
                      <p><div dangerouslySetInnerHTML={{ __html: excerpt(edukasi.description, 2000) }} /></p>
                    </div>
                    <div className='edukasidetail'>
                      <Link to={`/detail/${edukasi.id}`}>Lihat Detail <AiFillCaretRight /> </Link>
                    </div>
                  </div>

                </div>
                <hr></hr>
              </>
            )
          })}

        </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default Edukasi