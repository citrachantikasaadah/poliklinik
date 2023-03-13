import axios from 'axios';
import React, { useState } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddDokter = () => {
    const [name, setName] = useState("");
    const [profesi, setProfesi] = useState("");
    const [senin, setSenin] = useState("00.00 - 00.00 WIB");
    const [selasa, setSelasa] = useState("00.00 - 00.00 WIB");
    const [rabu, setRabu] = useState("00.00 - 00.00 WIB");
    const [kamis, setKamis] = useState("00.00 - 00.00 WIB");
    const [jumat, setJumat] = useState("00.00 - 00.00 WIB");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const history = useHistory()

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveDokter = async (e) => {
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
            await axios.post("http://localhost:5000/dokters", formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            toast.success("Dokter created successfully");
            history.push('/pages-dokter')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1> Create Dokter </h1>
                <form autoComplete='off' className='form-group' onSubmit={saveDokter}>
                    <label>Nama Dokter</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <br></br>

                    <label>Profesi Dokter</label>
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
                    {/* </div> */}

                    {/* <div className='post-css'>
                        <div className='post-name'>
                            <label>Post ?</label>
                        </div>
                        <div className='radio-css'>
                            <input type="radio" name="radioOption" checked={post === "yes"} className='form-check-input' required
                                onChange={handlePost} value="yes"></input>
                            <label htmlFor='radioOption'>
                                Yes&nbsp;
                            </label>
                            <input type="radio" name="radioOption" checked={post === "no"} className='form-check-input' required
                                onChange={handlePost} value="no"></input>
                            <label htmlFor='radioOption'>
                                No
                            </label>
                        </div>
                    </div>
                    <br></br> */}

                    {/* <label> Profesi</label>
                    <select className='form-control' value={profesi} onChange={onProfesiChange}>
                        <option>Please select category</option>
                        {profesiOption.map((option, index) => (
                            <option value={option || ""} key={index}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <br></br> */}

                    <label>Dokter Description</label>
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
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddDokter