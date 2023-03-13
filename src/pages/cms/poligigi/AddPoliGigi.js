import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'
import { Editor } from '@tinymce/tinymce-react';

const AddPoliGigi = () => {

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

    // const history = useHistory()

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

    const savePoliGigi = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("icon", icon);
        formData.append("title", title);
        formData.append("description", description);
        try {
            await axios.post("http://localhost:5000/poligigis", formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Layanan Poli Gigi created successfully");
            history.push('/poli-gigi-pages')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1> Create Layanan </h1>
                <form autoComplete='off' className='form-group' onSubmit={savePoliGigi}>
                    <label>Poli Gigi Title</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br></br>

                    <label>Poli Gigi Description</label>
                    {/* <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    /> */}
                    <Editor
                        apiKey='eacn14s2p2yw2mjpleuooy6g3kno7j3vxaedppe7ev002ook'
                        textareaName='form-control'
                        onEditorChange={(newText) => setDescription(newText)}
                        value={description}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <br></br>

                    <label>Upload Icon</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImageIcon}
                    />
                    <br></br>

                    {previewicon ? (
                        <figure className="image-preview-icon">
                            <img src={previewicon} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}
                    <label>Upload Poli Gigi Image</label>
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
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddPoliGigi