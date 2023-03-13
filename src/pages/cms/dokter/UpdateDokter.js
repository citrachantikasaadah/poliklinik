import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateDokter = () => {
    const [name, setName] = useState("");
    const [profesi, setProfesi] = useState("");
    const [senin, setSenin] = useState("");
    const [selasa, setSelasa] = useState("");
    const [rabu, setRabu] = useState("");
    const [kamis, setKamis] = useState("");
    const [jumat, setJumat] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        getDokterById();
    }, [])

    const getDokterById = async () => {
        const response = await axios.get(`http://localhost:5000/dokters/${id}`);
        setName(response.data.name);
        setProfesi(response.data.profesi);
        setSenin(response.data.senin);
        setSelasa(response.data.selasa);
        setRabu(response.data.rabu);
        setKamis(response.data.kamis);
        setJumat(response.data.jumat);
        setDescription(response.data.description);
        setFile(response.data.image);
        setPreview(response.data.url);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateDokter = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("profesi", profesi);
        formData.append("senin", senin);
        formData.append("selasa", selasa);
        formData.append("rabu", rabu);
        formData.append("kamis", kamis);
        formData.append("jumat", jumat);
        formData.append("description", description);
        try {
            await axios.patch(`http://localhost:5000/dokters/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Dokter updated successfully");
            history.push('/pages-dokter')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1> Update Dokter </h1>
                <form autoComplete='off' className='form-group' onSubmit={updateDokter}>
                    <label>Dokter Title</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <br></br>

                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setProfesi(e.target.value)}
                        value={profesi}
                    />
                    <br></br>

                    <label>Jadwal Dokter</label>
                    <br></br>
                    <label>Senin</label>
                    {/* <div className='jadwal-dokter'> */}
                    <input
                        type="text"
                        className='form-control'
                        required
                        placeholder='Senin'
                        onChange={(e) => setSenin(e.target.value)}
                        value={senin}
                    />
                    <br></br>

                    <label>Selasa</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        placeholder='Selasa'
                        onChange={(e) => setSelasa(e.target.value)}
                        value={selasa}
                    />
                    <br></br>

                    <label>Rabu</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        placeholder='Rabu'
                        onChange={(e) => setRabu(e.target.value)}
                        value={rabu}
                    />
                    <br></br>

                    <label>Kamis</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        placeholder='Kamis'
                        onChange={(e) => setKamis(e.target.value)}
                        value={kamis}
                    />
                    <br></br>

                    <label>Jum'at</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        placeholder='Jumat'
                        onChange={(e) => setJumat(e.target.value)}
                        value={jumat}
                    />
                    <br></br>

                    <label>Dokter Description</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <br></br>

                    <label>Upload Dokter Image</label>
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
                        <button type='submit'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateDokter