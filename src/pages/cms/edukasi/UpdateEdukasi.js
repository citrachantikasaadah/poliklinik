import axios from 'axios';
import React, { useState, useEffect } from 'react'
import HeaderCms from '../HeaderCms';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/AuthSlice';

const UpdateEdukasi = () => {

     //protect
     const dispatch = useDispatch();
     const { isError } = useSelector((state => state.auth));
 
     useEffect(() => {
         dispatch(getMe());
     }, [dispatch]);
 
     useEffect(() => {
         if (isError) {
             history.push('/auth')
         }
     }, [isError, history]);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    getEdukasiById();
  }, [])

  const getEdukasiById = async () => {
    const response = await axios.get(`http://localhost:5000/edukasis/${id}`);
    setTitle(response.data.title);
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
    formData.append("title", title);
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
        <h1> Update Edukasi </h1>
        <form autoComplete='off' className='form-group' onSubmit={updateEdukasi}>
          <label>Title Edukasi</label>
          <input
            type="text"
            className='form-control'
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br></br>

          {/* <label>Description Edukasi</label>
                    <textarea
                        type="text"
                        className='form-control'
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    /> */}
          <label>Description Edukasi</label>
          <Editor
            apiKey='eacn14s2p2yw2mjpleuooy6g3kno7j3vxaedppe7ev002ook'
            textareaName='form-control'
            value={description}
            onEditorChange={(updateText) => setDescription(updateText)}
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

          <label>Upload Image Edukasi</label>
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

export default UpdateEdukasi