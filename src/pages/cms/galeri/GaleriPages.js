

import React, { useEffect, useState } from 'react';
import axios from "axios";
import HeaderCms from '../HeaderCms'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import { excerpt } from '../../../components/utility';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'
import "./galericms.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/src/modal"
import Modal from '../../galeri/GaleriModal';

const GaleriPages = () => {

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
    const [galeri, setGaleri] = useState([]);
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const { user } = useSelector((state) => state.auth);
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
    }, []);

    const getGaleri = async () => {
        const response = await axios.get("http://localhost:5000/galeri");
        setGaleri(response.data)
        setFile(response.data.image);
        setPreview(response.data.url);
    }

    const deleteGaleri = async (galeriId) => {
        try {
            await axios.delete(`http://localhost:5000/galeri/${galeriId}`);
            getGaleri()
            toast.success("Delete Successfully");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <HeaderCms />
            <div style={{ margin: "50px" }}>
                <div className='btn-galeri'>
                    <Link to='/add-galeri'>
                        <button className='btn-edukasi btn-view-create'>Create +</button>
                    </Link>
                </div>

                <div className='pages-galeri'>

                    {galeri.map((galeri) => {
                        return (
                            <>
                                <div className='img-box'>
                                    <img className='img-galeri-pages' src={galeri.url} onClick={() => getData(galeri.url, galeri.title)} />
                                    <span>{galeri.title}</span>
                                    <div>
                                        <Link to={`/update-galeri/${galeri.id}`}>
                                            <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
                                        </Link>
                                        <button onClick={() => deleteGaleri(galeri.id)} className='btn-edukasi btn-delete-edukasi' >Delete</button>
                                    </div>
                                </div>


                            </>

                        )


                    })}

                    {
                        modal === true ? <Modal url={tempdata[1]} title={tempdata[2]} hide={() => setModal(false)} /> : ''
                    }

                </div>
                {/* <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Title</th>
                            <th style={{ textAlign: "center" }}>Image</th>
                            <th style={{ textAlign: "center" }}>Date</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galeri.map((data, index) => {
                            return (
                                <>
                                    {galeri.length > 0 && (
                                        <tr key={data.uuid}>
                                            <td>{index + 1}</td>
                                            <td>{data.title}</td>
                                            <td>{excerpt(data.description, 100)}</td>
                                            <td><img width={100} src={data.url} /></td>
                                            <td>{data.createdAt}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <Link to={`/update-edukasi/${data.id}`}>
                                                    <button className='btn-edukasi btn-edit-edukasi'>Edit</button>
                                                </Link>

                                                <button onClick={() => deleteGaleri(data.id)} className='btn-edukasi btn-delete-edukasi' >Delete</button>

                                            </td>
                                        </tr>
                                    )
                                    }
                                    {
                                        galeri.length < 1 && (
                                            <div className='my-edukasi please-wait'>Please wait...</div>
                                        )
                                    }
                                </>
                            )
                        })}
                    </tbody>
                </table> */}
            </div>
        </>
    )
}

export default GaleriPages