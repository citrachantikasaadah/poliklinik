import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'
import { Editor } from '@tinymce/tinymce-react';

const TentangKamiPages = () => {

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
    const [wbawi, setWbawi] = useState("");
    const [visi, setVisi] = useState("");
    const [misi, setMisi] = useState("");
    const [file, setFile] = useState("");
    const [filestruktur, setFilestruktur] = useState("");
    const [preview, setPreview] = useState("");
    const [previewstr, setPreviewStr] = useState("");

    const { id } = useParams();
    // const history = useHistory()


    useEffect(() => {
        getPoliGigiById();
    }, [])

    const getPoliGigiById = async () => {
        const response = await axios.get(`http://localhost:5000/sejarah/1`);
        setSejarah(response.data.sejarah);
        setWbawi(response.data.wbawi);
        setVisi(response.data.visi);
        setMisi(response.data.misi);
        setFilestruktur(response.data.struktur);
        setFile(response.data.image);
        setPreview(response.data.url);
        setPreviewStr(response.data.urlstruktur);
    };



    const updatePoliGigi = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("filestruktur", filestruktur);
        formData.append("sejarah", sejarah);
        formData.append("wbawi", wbawi);
        formData.append("visi", visi);
        formData.append("misi", misi);
        try {
            await axios.patch(`http://localhost:5000/sejarah/1`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Tentang Kami updated successfully");
            history.push('/tentang-kami-pages')
        } catch (error) {
            console.log(error);
        }
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const loadImageStruktur = (e) => {
        const struktur = e.target.files[0];
        setFilestruktur(struktur);
        setPreviewStr(URL.createObjectURL(struktur));
    };


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1>  Tentang Kami </h1>
                <form autoComplete='off' className='form-group' onSubmit={updatePoliGigi}>
                    <label> Sejarah</label>
                    {/* <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setSejarah(e.target.value)}
                        value={sejarah}
                    /> */}
                    <Editor
                        apiKey='eacn14s2p2yw2mjpleuooy6g3kno7j3vxaedppe7ev002ook'
                        textareaName='form-control'
                        onEditorChange={(newText) => setSejarah(newText)}
                        value={sejarah}
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

                    <label>Wbawi</label>
                    <Editor
                        apiKey='eacn14s2p2yw2mjpleuooy6g3kno7j3vxaedppe7ev002ook'
                        textareaName='form-control'
                        onEditorChange={(newText) => setWbawi(newText)}
                        value={wbawi}
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

                    <label>Visi</label>
                    <Editor
                        apiKey='eacn14s2p2yw2mjpleuooy6g3kno7j3vxaedppe7ev002ook'
                        textareaName='form-control'
                        onEditorChange={(newText) => setVisi(newText)}
                        value={visi}
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

                    <label>Misi</label>
                    <Editor
                        apiKey='eacn14s2p2yw2mjpleuooy6g3kno7j3vxaedppe7ev002ook'
                        textareaName='form-control'
                        onEditorChange={(newText) => setMisi(newText)}
                        value={misi}
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

                    <label>Upload Image Sejarah</label>
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

                    <label>Struktur</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        onChange={loadImageStruktur}
                    />
                    <br></br>

                    {previewstr ? (
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

export default TentangKamiPages