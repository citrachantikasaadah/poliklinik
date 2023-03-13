import React, { useEffect, useState } from 'react';
import axios from "axios";
import HeaderCms from '../HeaderCms'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import { excerpt } from '../../../components/utility';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'

const PoliGigiPages = () => {
    
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
    const [poliumum, setPoliGigi] = useState([]);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        getEdukasis();
    }, []);

    const getEdukasis = async () => {
        const response = await axios.get("http://localhost:5000/poliumum");
        setPoliGigi(response.data)
    }

    const deletePoliGigi = async (poligigiId) => {
        try {
            await axios.delete(`http://localhost:5000/poliumum/${poligigiId}`);
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
                <div className='btn-poliumum'>
                    <Link to='/add-poli-umum'>
                        <button className='btn-edukasi btn-view-create'>Create +</button>
                    </Link>
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Title</th>
                            {/* <th style={{ textAlign: "center" }}>Icon</th> */}
                            <th style={{ textAlign: "center" }}>Description</th>
                            <th style={{ textAlign: "center" }}>Image</th>
                            <th style={{ textAlign: "center" }}>Date</th>
                            <th style={{ textAlign: "center" }}>Created By</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poliumum.map((data, index) => {
                            // console.log("ID",ID)
                            return (
                                <>
                                    {poliumum.length > 0 && (
                                        <tr key={data.uuid}>
                                            <td>{index + 1}</td>
                                            <td>{data.title}</td>
                                            {/* <td><img width={100} src={data.urlicon} /></td> */}
                                            <td><td><div dangerouslySetInnerHTML={{__html: excerpt(data.description, 1000)}}/></td></td>
                                            <td><img width={100} src={data.url} /></td>
                                            <td>{data.createdAt}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <Link to={`/update-poli-umum/${data.uuid}`}>
                                                    <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
                                                </Link>

                                                <button onClick={() => deletePoliGigi(data.uuid)} className='btn-edukasi btn-delete-edukasi' >Delete</button>

                                                {/* <Link to={`/view-edukasi/${data.uuid}`}>
                                                    <button className='btn-edukasi btn-view-edukasi'>View</button>
                                                </Link> */}

                                            </td>
                                        </tr>
                                    )
                                    }
                                    {
                                        poliumum.length < 1 && (
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

export default PoliGigiPages