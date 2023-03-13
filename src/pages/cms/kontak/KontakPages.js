import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'

const KontakPages = () => {

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
    const [file, setFile] = useState("");
    const [telepon, setTelepon] = useState("");
    const [email, setEmail] = useState("");
    const [instagram, setInstagram] = useState("");
    const [jambuka, setJambuka] = useState("");
    const [tutup, setTutup] = useState("");
    const [alamat, setAlamat] = useState("");
    const [maps, setMaps] = useState("");
    const [preview, setPreview] = useState("");
    // const [previewstr, setPreviewStr] = useState("");
    // const [previewvisi, setPreviewVisi] = useState("");

    const { id } = useParams();
    // const history = useHistory()

    useEffect(() => {
        getKontakById();
    }, [])

    const getKontakById = async () => {
        const response = await axios.get(`http://localhost:5000/kontak/1`);
        setTitle(response.data.title);
        setMaps(response.data.maps);
        setAlamat(response.data.alamat);
        setTutup(response.data.tutup);
        setJambuka(response.data.jambuka);
        setEmail(response.data.email);
        setInstagram(response.data.instagram);
        setTelepon(response.data.telepon);
        setFile(response.data.image);
        setPreview(response.data.url);
        // setPreviewStr(response.data.urlstr);
        // setPreviewVisi(response.data.urlvisimisi);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };


    const updateKontak = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("telepon", telepon);
        // formData.append("visimisi", visimisi);
        formData.append("title", title);
        formData.append("email", email);
        formData.append("instagram", instagram);
        formData.append("jambuka", jambuka);
        try {
            await axios.patch(`http://localhost:5000/kontak/1`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Kontak updated successfully");
            history.push('/kontak-pages')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1>  Kontak </h1>
                <form autoComplete='off' className='form-group' onSubmit={updateKontak}>
                    <label> Title</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br></br>
                    <label>Telepon</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setTelepon(e.target.value)}
                        value={telepon}
                    />
                    <br></br>
                    <label> Email</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <br></br>

                    <label> Instagram</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setInstagram(e.target.value)}
                        value={instagram}
                    />
                    <br></br>

                    <label> Jam Buka</label>
                    <input
                        type="text"
                        placeholder='jambuka'
                        className='form-control'
                        required
                        onChange={(e) => setJambuka(e.target.value)}
                        value={jambuka}
                    />
                    <br></br>

                    <input
                        type="text"
                        placeholder='tutup'
                        className='form-control'
                        required
                        onChange={(e) => setTutup(e.target.value)}
                        value={tutup}
                    />
                    <br></br>

                    <label> Alamat</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setAlamat(e.target.value)}
                        value={alamat}
                    />
                    <br></br>

                    <label> Map Link</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setMaps(e.target.value)}
                        value={maps}
                    />
                    <br></br>

                    {preview ? (
                        <figure className="image-preview">
                            <iframe width="1000" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=poliklinik%20united%20tractors&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </figure>
                    ) : (
                        ""
                    )}

                    <label> Sqan QR</label>
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

export default KontakPages