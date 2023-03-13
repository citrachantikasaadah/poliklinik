import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'

const UpdateTentangKami = () => {

    //protect
    const dispatch = useDispatch();
    const history = useHistory();
    const { isError, user } = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            history.push('/auth')
        }
        if (user && user.role !== "admin") {
            history.push('/dashboard-poli')
        }
    }, [isError, history, user]);

    const [sejarah, setSejarah] = useState("");
    const [file, setFile] = useState("");
    const [struktur, setStruktur] = useState("");
    const [visi, setVisi] = useState("");
    const [misi, setMisi] = useState("");
    const [wbawi, setWbawi] = useState("");
    const [preview, setPreview] = useState("");
    const [previewstr, setPreviewStr] = useState("");
    const [previewvisi, setPreviewVisi] = useState("");

    const { id } = useParams();
    // const history = useHistory()

    useEffect(() => {
        getPoliGigiById();
    }, [])

    const getPoliGigiById = async () => {
        const response = await axios.get(`http://localhost:5000/tentangkami/2`);
        setSejarah(response.data.sejarah);
        setWbawi(response.data.wbawi);
        setVisi(response.data.visi);
        setMisi(response.data.misi);
        setStruktur(response.data.struktur);
        setFile(response.data.image);
        setPreview(response.data.url);
        setPreviewStr(response.data.urlstr);
        setPreviewVisi(response.data.urlvisimisi);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };
    const loadImageStr = (e) => {
        const imagestr = e.target.files[0];
        setStruktur(imagestr);
        setPreviewStr(URL.createObjectURL(imagestr));
    };
    const loadImageVisi = (e) => {
        const imagevisi = e.target.files[0];
        setStruktur(imagevisi);
        setPreviewStr(URL.createObjectURL(imagevisi));
    };

    const updatePoliGigi = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("struktur", struktur);
        // formData.append("visimisi", visimisi);
        formData.append("sejarah", sejarah);
        formData.append("visi", visi);
        formData.append("misi", misi);
        formData.append("wbawi", wbawi);
        try {
            await axios.patch(`http://localhost:5000/tentangkami/2`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Tentang Kami updated successfully");
            history.push('/update-tentang-kami')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1>  Tentang Kami </h1>
                <form autoComplete='off' className='form-group' onSubmit={updatePoliGigi}>
                    <label> Sejarah</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setSejarah(e.target.value)}
                        value={sejarah}
                    />
                    <br></br>
                    <label> WBAWI</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setWbawi(e.target.value)}
                        value={wbawi}
                    />
                    <br></br>
                    <label> Visi</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setVisi(e.target.value)}
                        value={visi}
                    />
                    <br></br>
                    <label> Misi</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setMisi(e.target.value)}
                        value={misi}
                    />
                    <br></br>

                    <label> Image Sejarah</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImage}
                    />
                    <br></br>

                    {previewstr ? (
                        <figure className="image-preview">
                            <img src={preview} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}

                    <label> Image Visi Misi</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImageVisi}
                    />
                    <br></br>

                    {previewstr ? (
                        <figure className="image-preview">
                            <img src={previewvisi} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}
                    <label> Struktur</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImageStr}
                    />
                    <br></br>

                    {preview ? (
                        <figure className="image-preview">
                            <img src={previewstr} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateTentangKami