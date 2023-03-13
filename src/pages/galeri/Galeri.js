// import React, { useEffect } from 'react'
// import { csr1, csr2, csr3, csr4, sd1, sd2, slide1, slide2 } from '../../assets'
// import Back from '../../components/back/back'
// import Footer from '../../components/foot/Footer'
// import Header from '../../components/head/Header'
// import "./galeri.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/js/src/modal"

// const Galeri = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <>
//       <Header />
//       <div>
//         <Back title="Galeri CSR" />
//         <div className='galery'>
//           <div className='title-galery'>
//           </div>
//           {/* <button className='btn btn-danger'>abc</button> */}
//           <div className='content-csr'>
//             <div className='content-galeri'>
//               <img className='img-galeri' src={csr1} data-bs-toggle="modal" data-bs-target="#imageExample" />
//               <img className='img-galeri' src={slide1} data-bs-toggle="modal" data-bs-target="#imageExample" />
//               <img className='img-galeri' src={slide2} data-bs-toggle="modal" data-bs-target="#imageExample" />

//             </div>
//           </div>

//           {/* MODAL */}
//           <div className='modal fade' id="imageExample" tabIndex="-1" aria-hidden="true">
//             <div className='modal-dialog'>
//               <div style={{ marginTop: "200px" }} className='modal-content'>
//                 <div className='modal-body'>
//                   <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
//                   <img src={csr1} />
//                   <span>Kegiatan 1</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Galeri

import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/src/modal"
import Footer from '../../components/foot/Footer'
import Header from '../../components/head/Header'
import axios from 'axios'
import Back from '../../components/back/back'
import GaleriModal from "./GaleriModal"
import "./galeri.css"
import Whatsapp from '../../components/Whatsapp'

const Galeri = () => {

  const [galeri, setGaleri] = useState([]);
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (url, title) => {
    let tempData = [url, title];
    console.warn(tempData)
    setTempdata(item => [1, ...tempData]);

    return setModal(true);
  }

  useEffect(() => {
    getGaleri();
    window.scrollTo(0, 0)
  }, []);

  const getGaleri = async () => {
    const response = await axios.get("http://localhost:5000/galeri");
    setGaleri(response.data)
  }
  return (
    <>
      <Header />
      <Back title="Galeri" />
      <div className='content-csr'>
        {galeri.map((galeri, index) => {
          return (

            <div className='content-galeri' key={index}>
              <img className='img-galeri' onClick={() => getData(galeri.url, galeri.title)} src={galeri.url} />
              <p>{galeri.title}</p>
            </div>

          )
        })}
      </div>


      {
        modal === true ? <GaleriModal url={tempdata[1]} title={tempdata[2]} hide={() => setModal(false)} /> : ''
      }
      <Whatsapp/>
      <Footer />
    </>
  )
}

export default Galeri