import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { fs } from '../../../Config/Config';
import { doc, getDoc } from "firebase/firestore";
import "../edukasi.css"
import axios from 'axios';
import Footer from '../../../components/foot/Footer';
import Header from '../../../components/head/Header'
import Whatsapp from '../../../components/Whatsapp';

const EdukasiDetail = () => {
  const [edukasis, setEdukasis] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    getEdukasis();
    window.scrollTo(0, 0)
  }, []);

  const getEdukasis = async () => {
    const response = await axios.get(`http://localhost:5000/edukasis/${id}`);
    setEdukasis(response.data)
  }

  const body = edukasis.description

  return (
    <>
      <Header />
      <div className='content-edukasi-detail'>
        <div style={{ background: "none", display: "flex", paddingTop: "10px" }}>
          <Link style={{ color: "#263159", textDecoration: "none", display: "flex" }} to="/">Home / </Link>
          <Link style={{ color: "#263159", textDecoration: "none", display: "flex" }} to="/Edukasi"> Edukasi / </Link>
          <p>{edukasis.title}</p>
        </div>
        <div className='content-edukasi-content'>

          <div className='content-detail'>
            <h2 style={{ textAlign: "center" }}>{edukasis.title}</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
              <img width={400} src={edukasis.url} />
            </div>
            {/* <p>{edukasis.description}</p> */}
            <div dangerouslySetInnerHTML={{ __html: body }} />

          </div>
        </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default EdukasiDetail