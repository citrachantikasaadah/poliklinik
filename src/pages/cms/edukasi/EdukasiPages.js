// import { deleteUser } from 'firebase/auth';
// import { collection, getDocs, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify';
// import { excerpt } from '../../../components/utility';
// import { fs } from '../../../Config/Config';
// import HeaderCms from '../HeaderCms'
// import "../index.css"

// const EdukasiPages = () => {
//     const [edukasi, setEdukasi] = useState([]);

//     useEffect(() => {
//         const unsub = onSnapshot(
//             collection(fs, "Blogs"),
//             (snapshot) => {
//                 let list = [];
//                 snapshot.docs.forEach((doc) => {
//                     list.push({ id: doc.id, ...doc.data() })
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

//     const handleDelete = async (id) =>{
//         if(window.confirm("Yakin ingin menghapus konten?")) {
//             try{
//                 await deleteDoc(doc(fs, "Blogs", id));
//                 toast.success("Edukasi deleted successfully");
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//     }

//     console.log(edukasi);

//     return (
// <>
//     <HeaderCms />
//     <div style={{ margin: "50px" }}>
//         <div className='btn-edukasis'>
//             <Link to='/add-edukasi'>
//                 <button className='btn-edukasi btn-view-create'>Create +</button>
//             </Link>
//         </div>
//         <table className='styled-table'>
//             <thead>
//                 <tr>
//                     {/* <th style={{ textAlign: "center" }}>No.</th> */}
//                     <th style={{ textAlign: "center" }}>Title</th>
//                     <th style={{ textAlign: "center" }}>Description</th>
//                     <th style={{ textAlign: "center" }}>Time</th>
//                     <th style={{ textAlign: "center" }}>Image</th>
//                     <th style={{ textAlign: "center" }}>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {edukasi.map((data) => {
//                     // console.log("ID",ID)
//                     return (
//                         <>
//                             {edukasi.length > 0 && (
//                                 <tr>
//                                     {/* <th scope='row'>{index + 1}</th> */}
//                                     <td>{data.title}</td>
//                                     <td>{excerpt(data.description, 100)}</td>
//                                     <td>{data.timestamp.toDate().toDateString()}</td>
//                                     <td><img width={100} src={data.imgUrl} /></td>
//                                     <td>
//                                         <Link to={`/update-edukasi/${data.id}`}>
//                                             <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
//                                         </Link>

//                                         <button onClick={() => handleDelete(data.id)} className='btn-edukasi btn-delete-edukasi' >Delete</button>

//                                         <Link to={`/view-edukasi/${data.id}`}>
//                                             <button className='btn-edukasi btn-view-edukasi'>View</button>
//                                         </Link>

//                                     </td>
//                                 </tr>
//                             )
//                             }
//                             {
//                                 edukasi.length < 1 && (
//                                     <div className='my-edukasis please-wait'>Please wait...</div>
//                                 )
//                             }
//                         </>
//                     )
//                 })}
//             </tbody>
//         </table>
//     </div>
// </>
//     )
// }

// export default EdukasiPages

import React, { useEffect, useState } from 'react';
import axios from "axios";
import HeaderCms from '../HeaderCms'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import { excerpt } from '../../../components/utility';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'


const EdukasiPages = () => {
    //protect
    const dispatch = useDispatch();
    const history = useHistory();
    const { isError } = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            history.push('/auth')
        }
    }, [isError, history]);

    // 
    const [edukasis, setEdukasis] = useState([]);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        getEdukasis();
    }, []);

    const getEdukasis = async () => {
        const response = await axios.get("http://localhost:5000/edukasis");
        setEdukasis(response.data)
    }

    const deleteEdukasi = async (edukasiId) => {
        try {
            await axios.delete(`http://localhost:5000/edukasis/${edukasiId}`);
            getEdukasis()
            toast.success("Delete Successfully");
        } catch (error) {
            console.log(error)
        }
    }

    const body = edukasis.description

    return (
        <>
            <HeaderCms />
            <div style={{ margin: "50px" }}>
                <div className='btn-edukasis'>
                    <Link to='/add-edukasi'>
                        <button className='btn-edukasi btn-view-create'>Create +</button>
                    </Link>
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Title</th>
                            <th style={{ textAlign: "center" }}>Description</th>
                            <th style={{ textAlign: "center" }}>Image</th>
                            <th style={{ textAlign: "center" }}>Date</th>
                            <th style={{ textAlign: "center" }}>Created By</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edukasis.map((data, index) => {
                            // console.log("ID",ID)
                            return (
                                <>
                                    {edukasis.length > 0 && (
                                        <tr key={data.uuid}>
                                            <td>{index + 1}</td>
                                            <td>{data.title}</td>
                                            {/* <td>{excerpt(data.description, 100)}</td> */}
                                            <td><div dangerouslySetInnerHTML={{__html: excerpt(data.description, 2000)}}/></td>
                                            <td><img width={100} src={data.url} /></td>
                                            <td>{data.createdAt}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <Link to={`/update-edukasi/${data.id}`}>
                                                    <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
                                                </Link>

                                                <button onClick={() => deleteEdukasi(data.id)} className='btn-edukasi btn-delete-edukasi' >Delete</button>

                                                {/* <Link to={`/view-edukasi/${data.id}`}>
                                                    <button className='btn-edukasi btn-view-edukasi'>View</button>
                                                </Link> */}

                                            </td>
                                        </tr>
                                    )
                                    }
                                    {
                                        edukasis.length < 1 && (
                                            <div className='my-edukasi please-wait'>Please wait...</div>
                                        )
                                    }
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EdukasiPages