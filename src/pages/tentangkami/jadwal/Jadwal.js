// import React, { Component } from 'react';
// import Back from '../components/back/backTentangKami';
// import Styles from '../components/styles/jadwal.module.css';
// import { AiOutlineMinus } from 'react-icons/ai';

// class Jadwal extends Component {
//     render() {
// const Jadwal = [
//     {
//         day: "Senin",
//         time: "07.30-16.30WIB"
//     },
//     {
//         day: "Selasa",
//         time: "07.30-16.30WIB"
//     },
//     {
//         day: "Rabu",
//         time: "07.30-16.30WIB"
//     },
//     {
//         day: "Kamis",
//         time: "07.30-16.30WIB"
//     },
//     {
//         day: "Jum'at",
//         time: "07.30-16.30WIB"
//     },
// ]
//         return (
// <div>
//     <Back title="Jadwal Poliklinik" />

//     <div className={Styles.container}>
//     <div className={Styles.box}>
//         {Jadwal.map((item) => {
//             return (
//                 <div className={Styles.day}>
//                     <p>{item.day} {item.time} </p>
//                 </div>
//             )
//         })}
//     </div>
//     </div>
// </div>
//         )
//     }
// }

// export default Jadwal;

import React from 'react'
import Back from '../../../components/back/backTentangKami'
import "./jadwal.css"
import { AiOutlineMinus } from 'react-icons/ai';

const Jadwal = () => {
  const Jadwal = [
    {
      day: "Senin",
      time: "07.30-16.30WIB"
    },
    {
      day: "Selasa",
      time: "07.30-16.30WIB"
    },
    {
      day: "Rabu",
      time: "07.30-16.30WIB"
    },
    {
      day: "Kamis",
      time: "07.30-16.30WIB"
    },
    {
      day: "Jum'at",
      time: "07.30-16.30WIB"
    },
  ]
  return (
      <div>
        <Back title="Jadwal Poliklinik" />

        <div className='container-jadwal'>
          <div className='box-jadwal'>
            {Jadwal.map((item) => {
              return (
                <div className='day-jadwal'>
                  <p>{item.day} {item.time} </p>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Jadwal