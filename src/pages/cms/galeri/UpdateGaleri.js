import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'

const UpdateGaleri = () => {

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
    //protect

    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
  
    const { id } = useParams();
  
    useEffect(() => {
      getEdukasiById();
    }, [])
  
    const getEdukasiById = async () => {
      const response = await axios.get(`http://localhost:5000/galeri/${id}`);
      setTitle(response.data.title);
      setFile(response.data.image);
      setPreview(response.data.url);
    };
  
    const loadImage = (e) => {
      const image = e.target.files[0];
      setFile(image);
      setPreview(URL.createObjectURL(image));
    };
  
    const updateGaleri = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      try {
        await axios.patch(`http://localhost:5000/galeri/${id}`, formData, {
          headers: {
            "Content-type": "multipart/form-data"
          }
        });
        toast.success("Edukasi updated successfully");
        history.push('/galeri-pages')
      } catch (error) {
        console.log(error);
      }
    }
  


    return (
        <>
            <HeaderCms />
            <div className='add'>
                <h1> Create Galeri</h1>
                <form autoComplete='off' className='form-group' onSubmit={updateGaleri}>
                    <label>Galeri Title</label>
                    <input
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br></br>

                    <label>Upload Galeri Image</label>
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

export default UpdateGaleri