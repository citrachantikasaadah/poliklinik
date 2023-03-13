import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/AuthSlice'

const UpdateIklan = () => {

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

  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getEdukasiById();
  }, [])

  const getEdukasiById = async () => {
    const response = await axios.get(`http://localhost:5000/iklans/${id}`);
    setDescription(response.data.description);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateEdukasi = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    try {
      await axios.patch(`http://localhost:5000/edukasis/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
      toast.success("Edukasi updated successfully");
      history.push('/pages-edukasi')
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <HeaderCms />
      <div className='add'>
        <h1> Update Iklan </h1>
        <form autoComplete='off' className='form-group'>
          <label>Title Iklan</label>
          <input
            type="text"
            className='form-control'
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {/* <textarea name='description' className='form-control' required
                        onChange={handleChange} value={description}></textarea> */}
          <br></br>

          <label>Upload Iklan Image</label>
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
            <button>
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateIklan