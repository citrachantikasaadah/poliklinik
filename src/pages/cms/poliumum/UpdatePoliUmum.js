import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'

const UpdatePoliUmum = () => {

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

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [icon, setIcon] = useState("");
    const [preview, setPreview] = useState("");
    const [previewicon, setPreviewIcon] = useState("");

    const { uuid } = useParams();
    // const history = useHistory()

    useEffect(() => {
        getPoliUmumById();
    }, [])

    const getPoliUmumById = async () => {
        const response = await axios.get(`http://localhost:5000/poliumum/${uuid}`);
        setTitle(response.data.title);
        setIcon(response.data.icon);
        setDescription(response.data.description);
        setFile(response.data.image);
        setPreview(response.data.url);
        setPreviewIcon(response.data.urlicon);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };
    const loadImageIcon = (e) => {
        const imageicon = e.target.files[0];
        setIcon(imageicon);
        setPreviewIcon(URL.createObjectURL(imageicon));
    };

    const updatePoliUmum = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("icon", icon);
        formData.append("title", title);
        formData.append("description", description);
        try {
            await axios.patch(`http://localhost:5000/poliumum/${uuid}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Layanan updated successfully");
            history.push('/poli-umum-pages')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1> Update Layanan </h1>
                <form autoComplete='off' className='form-group' onSubmit={updatePoliUmum}>
                    <label>Title Poli Umum</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br></br>

                    <label>Description Poli Umum</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    {/* <textarea name='description' className='form-control' required
                        onChange={handleChange} value={description}></textarea> */}
                    <br></br>

                    <label>Upload Icon Poli Umum</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImageIcon}
                    />
                    <br></br>

                    {previewicon ? (
                        <figure className="image-preview">
                            <img src={previewicon} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}
                    <label>Upload Image Poli Umum</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImage}
                    />
                    <br></br>

                    {preview ? (
                        <figure className="image-preview">
                            <img src={preview} alt="Preview Image" />
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

export default UpdatePoliUmum