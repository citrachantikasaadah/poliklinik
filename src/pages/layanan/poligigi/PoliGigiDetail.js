// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Back from '../../../components/back/backLayanan';
// import Footer from '../../../components/foot/Footer';
// import Header from '../../../components/head/Header';

// const PoliGigiDetail = () => {
//     const [poligigis, setPoliGigi] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {
//         getDokters();
//     }, []);

//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])

//     const getDokters = async () => {
//         const response = await axios.get(`http://localhost:5000/poligigis/${id}`);
//         setPoliGigi(response.data)
//     }

//     return (
//         <>
//             <Header />
//             <div>
//                 <div className="hero-back">
//                     <section className="hero">
//                         {/* <img src={back} alt="" /> */}
//                         <h1>{poligigis.title}</h1>
//                         <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
//                             <Link to="/">Home / </Link>
//                             <Link to="/PoliGigi"> Layanan / </Link>
//                             <Link to="/PoliGigi"> Poli Gigi / </Link>
//                             <p>{poligigis.title}</p>
//                         </div>
//                         {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

//                     </section>
//                 </div>
//                 {/* <div className='container-detailpoliumum'>
//                     <div className='content-detailpoliumum'>
//                         <div className='image-details'>
//                             <div className='image-detail'>
//                                 <img className='img-detail-layanan' src={poligigis.url} />
//                             </div>
//                         </div>

//                         <div className='desc-poliumum'>
//                             <h2>{poligigis.title}</h2>
//                             <p><div dangerouslySetInnerHTML={{ __html: poligigis.description }} /></p>

//                         </div>



//                     </div>
//                 </div> */}

//                 <div className='content-edukasi-content'>

//                     <div className='content-detail'>
//                         <h2 style={{ textAlign: "center" }}>{poligigis.title}</h2>
//                         <div style={{ display: "flex", justifyContent: "center" }}>
//                             <img width={400} src={poligigis.url} />
//                         </div>
//                         {/* <p>{poligigis.description}</p> */}
//                         <div dangerouslySetInnerHTML={{ __html: poligigis.description }} />

//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default PoliGigiDetail

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { fs } from '../../../Config/Config';
import { doc, getDoc } from "firebase/firestore";
// import "../edukasi.css"
import axios from 'axios';
import Footer from '../../../components/foot/Footer';
import Header from '../../../components/head/Header'
import Whatsapp from '../../../components/Whatsapp';

const EdukasiDetail = () => {
    const [poligigis, set] = useState([]);
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        getpoligigis();
        window.scrollTo(0, 0)
    }, []);

    const getpoligigis = async () => {
        const response = await axios.get(`http://localhost:5000/poligigis/${id}`);
        set(response.data)
    }

    const body = poligigis.description

    return (
        <>
            <Header />
            <div className="hero-back">
                <section className="hero">
                    {/* <img src={back} alt="" /> */}
                    <h1>{poligigis.title}</h1>
                    <div style={{ background: "none", display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                        <Link to="/">Home / </Link>
                        <Link to="/PoliGigi"> Layanan / </Link>
                        <Link to="/PoliGigi"> Poli Gigi / </Link>
                        <p>{poligigis.title}</p>
                    </div>
                    {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

                </section>
            </div>
            <div className='content-edukasi-detail'>
                <div className='content-edukasi-content'>

                    <div className='content-detail'>
                        <h2 style={{ textAlign: "center" }}>{poligigis.title}</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img width={400} src={poligigis.url} />
                        </div>
                        {/* <p>{poligigis.description}</p> */}
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