// import { useRef, useEffect } from 'react'
// import emailjs from '@emailjs/browser';
// import Back from '../../components/back/back'
// import "./kontak.css"
// import { myklinik, qr } from '../../assets';
// import Header from '../../components/head/Header';
// import Footer from '../../components/foot/Footer';

// const Kontak = () => {

//   // useEffect(() => {
//   //   window.scrollTo(0, 0)
//   // }, [])

//   const form = useRef()

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_jbrt6ql', 'template_zketa8q', form.current, 'Rp-jZyX9eeZVNPnZh')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });
//     e.target.reset()
//   };

//   return (
//     <>
//       <Header />
//       <div>
//         <Back title="Kontak" />
//         <div className='content-kontak'>
//           <div className='content-maps'>
//             <iframe width="1000" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=poliklinik%20united%20tractors&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//           </div>
//           <div className='content_'>
//             <div className='container-contact'>
//               <form ref={form} onSubmit={sendEmail}
//                 className='form'>
//                 <h2>Layanan</h2>
//                 <input className='input-field' type="text" placeholder='Nama' name='user_name' required />
//                 <input className='input-field' type="email" placeholder='Email' name='user_email' required />
//                 <input className='input-field' type="text" placeholder='Subjek' name='user_subjek' required />
//                 <textarea className='textarea-field' name='message' cols="30" rows="10" placeholder='Ketik Pesan..'></textarea>
//                 <button className='btn-kontak'>Kirim</button>
//               </form>
//             </div>
//             <div className='myklinik'>
//               <h2>BUAT JANJI DOKTER</h2>
//               <span>Langkah mudah dan tidak berbelit</span>
//               <div className='mykliniks'>
//                 <br></br>
//                 <div className='scan-item'>
//                   <h5>JAM BUKA</h5>
//                   <p>Senin - Jum'at : 07.00 - 16.30 WIB</p>
//                   <p style={{color: "red", marginTop: "-20px"}}>Sabtu & Minggu TUTUP</p>
//                 </div>
//                 {/* <br></br> */}
//                 <div className='info-myklinik'>
//                   <div className='more'>
//                     <h4>POLI UMUM & POLI GIGI</h4>
//                     <p><img width={30} src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" /> poliklinikpratama.ut</p>
//                     <p><img width={30} src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png" /> 0811 9059 118</p>
//                   </div>

//                   <div className='qr'>
//                     <img style={{ marginBottom: "-20px", marginLeft: "-19px", marginTop: "-10px" }} src={qr} />
//                     <img width={90} src={myklinik} />
//                   </div>

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

// export default Kontak

import { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import Back from '../../components/back/back'
import "./kontak.css"
import { myklinik, qr } from '../../assets';
import Header from '../../components/head/Header';
import Footer from '../../components/foot/Footer';
import axios from 'axios';
import Whatsapp from '../../components/Whatsapp';

const Kontak = () => {

  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    getTentangKami();
    window.scrollTo(0, 0)
  }, []);

  const getTentangKami = async () => {
    const response = await axios.get("http://localhost:5000/kontak/1");
    setKontak(response.data)
  }

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9pxxnt4', 'template_dopbj3q', form.current, 'Rp-jZyX9eeZVNPnZh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <>
      <Header />
      <div>
        <Back title="Kontak" />
        <div className='content-kontak'>
          <div className='content-maps'>
            <iframe width="1000" height="450" id="gmap_canvas" src={kontak.maps} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
          <div className='content_'>
            <div className='container-contact'>
              <form ref={form} onSubmit={sendEmail}
                className='form'>
                <h2>Hubungi Kami</h2>
                <input className='input-field' type="text" placeholder='Nama' name='user_name' required />
                <input className='input-field' type="email" placeholder='Email' name='user_email' required />
                <input className='input-field' type="text" placeholder='Subjek' name='user_subjek' required />
                <textarea className='textarea-field' name='message' cols="30" rows="10" placeholder='Ketik Pesan..'></textarea>
                <button className='btn-kontak'>Kirim</button>
              </form>
            </div>
            <div className='myklinik'>
              
              <h2><a style={{textDecoration: "none", color: "#263159"}} href='https://reservasi.myklinik.id/?reservasiOnline=OFVLb1ZEdGZWL1pCVlpmZnlxcmJlUT09'>{kontak.title}</a></h2>
              <span>Langkah mudah dan tidak berbelit</span>
              <div className='mykliniks'>
                <br></br>
                <div className='scan-item'>
                  <h5>JAM LAYANAN</h5>
                  <p>{kontak.jambuka}</p>
                  <p style={{ color: "red", marginTop: "-20px" }}>{kontak.tutup}</p>
                </div>
                {/* <br></br> */}
                <div className='info-myklinik'>
                  <div className='more'>
                    <h4>POLI UMUM & POLI GIGI</h4>
                    <p><img width={30} src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" /> <a style={{textDecoration: "none", color: "#263159"}} href='https://www.instagram.com/poliklinikpratama.ut/?hl=id'>{kontak.instagram}</a></p>
                    <p><img width={30} src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png" /><a style={{textDecoration: "none", color: "#263159"}} href='https://wa.me/628119059118?'>{kontak.telepon}</a></p>
                  </div>

                  <div className='qr'>
                    <img style={{ marginBottom: "-20px", marginLeft: "-19px", marginTop: "-10px" }} src={kontak.url} />
                    <img width={90} src={myklinik} />
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

export default Kontak