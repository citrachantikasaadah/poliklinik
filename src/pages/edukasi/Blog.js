
// import React, { useEffect, useState } from 'react'
// import Back from '../../components/back/back';
// import { fs } from '../../Config/Config';
// import { Link } from "react-router-dom";
// import { AiFillCaretRight } from 'react-icons/ai';
// import { excerpt } from '../../components/utility';
// import { collection, onSnapshot } from 'firebase/firestore';

// const Blog = () => {
//     //state of edukasi
//     const [edukasi, setEdukasi] = useState([]);

//     //getting edukasi function
//     // const getEdukasi = async () => {
//     //     const edukasi = await fs.collection('Blogs').get();
//     //     const edukasiArray = [];
//     //     for (var snap of edukasi.docs) {
//     //         var data = snap.data();
//     //         data.ID = snap.id;
//     //         edukasiArray.push({
//     //             ...data
//     //         })
//     //         if (edukasiArray.length === edukasi.docs.length) {
//     //             setEdukasi(edukasiArray);
//     //         }
//     //     }
//     // }

//     // useEffect(() => {
//     //     getEdukasi();
//     // }, [])

//     useEffect(() => {
//         const unsub = onSnapshot(
//             collection(fs, "Blogs"),
//             (snapshot) => {
//                 let list = [];
//                 snapshot.docs.forEach((doc) => {
//                     list.push({id: doc.id, ...doc.data()})
//                 });
//                 setEdukasi(list);
//             }, (error) => {
//                 console.log(error)
//             }
//         );

//         return () => {
//             unsub();
//         }
//     })

//     console.log(edukasi);

//     return (
// <>
//     {edukasi.length > 0 && (
//         <div className='container-fluid'>

//             <div className='edukasi--box'>
//                 <div className="edukasi">

//                     <div className="container-edukasi">

//                         {edukasi?.map((edukasi) => {
//                             return (
//                                 <>
//                                     <div className="box-edukasi" key={edukasi.id} >
//                                         <div className="news">
//                                             <div className="image-edukasi">
//                                                 <img width={300} src={edukasi.imgUrl} />
//                                             </div>
//                                             <div className="content-edukasi">
//                                                 <h2>{edukasi.title}</h2>
//                                                 <p>{excerpt (edukasi.description, 120)}</p>
//                                             </div>
//                                         </div>
//                                         <div className='edukasidetail'>
//                                             <Link to={`/detail/${edukasi.id}`}>Lihat Detail <AiFillCaretRight /> </Link>
//                                         </div>
//                                     </div>
//                                 </>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//     }
//     {
//         edukasi.length < 1 && (
//             <div className='my-products please-wait'>Please wait...</div>
//         )
//     }
// </>
//     )
// }

// export default Blog

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import { AiFillCaretRight, AiOutlineArrowRight } from 'react-icons/ai';
import { excerpt } from '../../components/utility';
import Whatsapp from '../../components/Whatsapp';

const Blog = () => {
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
            {edukasis.length > 0 && (
                <div className='container-fluid'>

                    <div className='edukasi--box'>
                        <div className="edukasi">

                            <div className="container-edukasi">

                                {edukasis.slice(0, 3).map((edukasi) => {
                                    return (
                                        <>
                                            <div className="box-edukasi"  >
                                                <div className="news">
                                                    <div className="image-edukasi">
                                                        <img width={300} src={edukasi.url} />
                                                    </div>
                                                    <div className="content-edukasi">

                                                        <h2>{edukasi.title}</h2>
                                                        <span style={{ color: "gray" }}>{edukasi.createdAt}</span>
                                                        <div dangerouslySetInnerHTML={{ __html: excerpt(edukasi.description, 2000) }} />

                                                    </div>
                                                </div>
                                                <div className='edukasidetail'>
                                                    <Link to={`/detail/${edukasi.id}`}>Lihat Detail <AiFillCaretRight /> </Link>
                                                </div>

                                            </div>
                                           

                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {
                edukasis.length < 1 && (
                    <div className='my-products please-wait'>Please wait...</div>
                )
            }
            <Whatsapp/>
        </>
    )
}

export default Blog