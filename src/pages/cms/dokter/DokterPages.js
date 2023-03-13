import React, { useEffect, useState } from 'react';
import axios from "axios";
import HeaderCms from '../HeaderCms'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { excerpt } from '../../../components/utility';
import "../index.css"
import { useSelector } from 'react-redux';

const DokterPages = () => {

    const { user } = useSelector((state) => state.auth);

    const [dokters, setDokter] = useState([]);

    useEffect(() => {
        getEdukasis();
    }, []);

    const getEdukasis = async () => {
        const response = await axios.get("http://localhost:5000/dokters");
        setDokter(response.data)
    }

    const deleteDokter = async (edukasiId) => {
        try {
            await axios.delete(`http://localhost:5000/dokters/${edukasiId}`);
            getEdukasis()
            toast.success("Delete Successfully");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <HeaderCms />
            <div style={{ margin: "50px" }}>
                <div className='btn-edukasis'>
                    <Link to='/add-dokter'>
                        <button className='btn-edukasi btn-view-create'>Create +</button>
                    </Link>
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center", width: "110px" }}>Nama Dokter</th>
                            <th style={{ textAlign: "center", width: "110px" }}>Profesi</th>
                            <th style={{ textAlign: "center" }}>Jadwal Dokter</th>
                            {/* <th style={{ textAlign: "center" }}>Senin</th>
                            <th style={{ textAlign: "center" }}>Selasa</th>
                            <th style={{ textAlign: "center" }}>Rabu</th>
                            <th style={{ textAlign: "center" }}>Kamis</th>
                            <th style={{ textAlign: "center" }}>Jum'at</th> */}
                            <th style={{ textAlign: "center" }}>Description</th>
                            <th style={{ textAlign: "center" }}>Image</th>
                            <th style={{ textAlign: "center" }}>Date</th>
                            {/* <th style={{ textAlign: "center" }}>Created By</th> */}
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dokters.map((data) => {
                            // console.log("ID",ID)
                            return (
                                <>
                                    {dokters.length > 0 && (
                                        <tr key={data.id}>
                                            <th scope='row'>{data.id}</th>
                                            <td>{data.name}</td>
                                            <td>{data.profesi}</td>
                                            {/* <td className='jadwal-dokter-pages'> Senin {data.senin} <br></br> Senin {data.selasa} Senin {data.rabu} Senin {data.kamis} Senin {data.jumat}</td> */}
                                            <td style={{ display: "grid", width: "120px", overflowY: "scroll", height: "100px" }}>

                                                <td><p style={{ color: "#263159", fontWeight: "bold" }}>Senin</p>{data.senin}</td>
                                                <td><p style={{ color: "#263159", fontWeight: "bold" }}>Selasa</p>{data.selasa}</td>
                                                <td><p style={{ color: "#263159", fontWeight: "bold" }}>Rabu</p>{data.rabu}</td>
                                                <td><p style={{ color: "#263159", fontWeight: "bold" }}>Kamis</p>{data.kamis}</td>
                                                <td><p style={{ color: "#263159", fontWeight: "bold" }}>Jumat</p>{data.jumat}</td>
                                            </td>
                                            {/* <td></td>
                                            <td></td>
                                            <td>{data.kamis}</td>
                                            <td>{data.jumat}</td> */}
                                            <td>{excerpt(data.description, 100)}</td>
                                            <td><img width={100} src={data.url} /></td>
                                            <td>{data.createdAt}</td>
                                            {/* <td>{user.name}</td> */}
                                            <td>
                                                <Link to={`/update-dokter/${data.id}`}>
                                                    <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
                                                </Link>

                                                <button onClick={() => deleteDokter(data.id)} className='btn-edukasi btn-delete-edukasi' >Delete</button>

                                                {/* <Link to={`/view-edukasi/${data.id}`}>
                                                    <button className='btn-edukasi btn-view-edukasi'>View</button>
                                                </Link> */}

                                            </td>
                                        </tr>
                                    )
                                    }
                                    {
                                        dokters.length < 1 && (
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

export default DokterPages