// import React from 'react'
// import Back from '../../components/back/back'
// import { news } from '../../components/dummydata'
// import "./edukasi.css"
// import { Link } from "react-router-dom";
// import { AiFillCaretRight } from 'react-icons/ai';
// // import { edukasi } from '../../assets';

// const Edukasi = ({edukasi}) => {

//     console.log(edukasi);

//   return (
    // <div>
    //   <Back title="Edukasi" />
    //   <div className="edukasi">
    //             <div className="container-edukasi">
    //                 {news.map((item) => {
    //                     return (
    //                         <div className="box-edukasi">
    //                             <div className="news">
    //                                 <div className="image-edukasi">
    //                                     <img width={300} src={item.pict} />
    //                                 </div>
    //                                 <div className="content-edukasi">
    //                                     <h2>{item.title}</h2>
    //                                     <p>{item.desc}</p>
    //                                 </div>
    //                             </div>
    //                             <div className='edukasidetail'>
    //                                 <Link to="/edukasidetail">Lihat Detail <AiFillCaretRight /> </Link>
    //                             </div>

    //                         </div>
    //                     )
    //                 })}
    //             </div>



    //         </div>
    // </div>
//   )
// }

// export default Edukasi

import React from 'react'
import IndividualEdukasi from './IndividualEdukasi'

const Edukasi = ({edukasi}) => {
    // console.log(edukasi);
  return edukasi.map((individualEdukasi)=>(
    <IndividualEdukasi key = {individualEdukasi.ID} individualEdukasi={individualEdukasi}/>
  ))
}

export default Edukasi