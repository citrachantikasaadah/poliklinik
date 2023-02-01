// import React, { Component } from 'react';
// import Styles from '../components/styles/strukturorganisasi.module.css';
// import { Struktur_Organisasi } from '../assets';
// import Back from '../components/back/backTentangKami';

// class StrukturOrganisasi extends Component {
//     render() {
//         return (
//             <div>
//                 <Back title="Struktur Organisasi" />

//                 <div className={Styles.container}>

//                     <img src={Struktur_Organisasi} alt="strukturorganisasi" />

//                 </div>
//             </div>
//         )
//     }
// }

// export default StrukturOrganisasi;

import React from 'react'
import { Struktur } from '../../assets'
import Back from '../../components/back/backTentangKami'
import "./struktur.css"

const StrukturOrganisasi = () => {
  return (
    <div>
      <Back title="Struktur"/>
      <div className='container-struktur'>
          <img width= {500} src={Struktur}/>
      </div>
    </div>
  )
}

export default StrukturOrganisasi