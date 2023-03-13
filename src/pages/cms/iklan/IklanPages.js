import React, { useEffect, useState } from 'react';
import axios from "axios";
import HeaderCms from '../HeaderCms'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { excerpt } from '../../../components/utility';
import "../index.css"
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/AuthSlice';

const IklanPages = () => {

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

    const [iklans, setIklan] = useState([]);

    useEffect(() => {
        getEdukasis();
    }, []);

    const getEdukasis = async () => {
        const response = await axios.get("http://localhost:5000/iklans");
        setIklan(response.data)
    }

    const { user } = useSelector((state) => state.auth);

    const deleteIklan = async (iklanId) => {
        try {
            await axios.delete(`http://localhost:5000/iklans/${iklanId}`);
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
                    <Link to='/add-iklan'>
                        <button className='btn-edukasi btn-view-create'>Create +</button>
                    </Link>
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            {/* <th style={{ textAlign: "center", width: "110px" }}>Nama Dokter</th>
                            <th style={{ textAlign: "center", width: "110px" }}>Profesi</th>
                            <th style={{ textAlign: "center" }}>Jadwal Dokter</th> */}
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
                            {/* <th style={{ textAlign: "center" }}>Date</th>
                            <th style={{ textAlign: "center" }}>Created By</th>
                            <th style={{ textAlign: "center" }}>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {iklans.map((data) => {
                            // console.log("ID",ID)
                            return (
                                <>
                                    {iklans.length > 0 && (
                                        <tr key={data.id}>
                                            <th scope='row'>{data.id}</th>
                                            <td>{excerpt(data.description, 100)}</td>
                                            <td><img width={100} src={data.url} /></td>
                                            <td>{data.createdAt}</td>
                                            {/* <td>{user.name}</td> */}
                                            <td>
                                                <Link to={`/update-iklan/${data.id}`}>
                                                    <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
                                                </Link>

                                                <button onClick={() => deleteIklan(data.id)} className='btn-edukasi btn-delete-edukasi' >Delete</button>

                                                {/* <Link to={`/view-edukasi/${data.id}`}>
                                                    <button className='btn-edukasi btn-view-edukasi'>View</button>
                                                </Link> */}

                                            </td>
                                        </tr>
                                    )
                                    }
                                    {
                                        iklans.length < 1 && (
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

export default IklanPages