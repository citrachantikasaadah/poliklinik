import React, { useState } from 'react'
import "./index.css"
import {storage, fs} from '../../Config/Config'

const AddEdukasi = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const [imageError, setImageError] = useState('');

    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');

    const types=['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];
    const handleEdukasiImg = (e) => {
        let selectedFile = e.target.files[0]
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }
            else{
                setImage(null);
                setImageError('please select a valid file type(png or jpg)')
            }
        }
        else{
            console.log('please select your file');
        }
    }

    const handleAddEdukasi=(e)=>{
        e.preventDefault();
        // console.log(image);
        // console.log(title, description, link)
        const uploadTask=storage.ref(`edukasi-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref('edukasi-images').child(image.name).getDownloadURL().then(url=>{
                fs.collection('Edukasi').add({
                    // image,
                    title,
                    description,
                    link,
                    url
                }).then(()=>{
                    setSuccessMsg('Add new Edukasi successfully');
                    // setImage('');
                    setTitle('');
                    setDescription('');
                    setLink('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('')
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        })
    }

    return (
        <div>
            <br></br>
            <br></br>
            <h1>EDUKASI</h1>
            <hr></hr>

            {successMsg&&<>
                <div className='succes-msg'>{successMsg}</div>
                <br></br>
            </>}

            <form autoComplete='off' className='form-group' onSubmit={handleAddEdukasi}>
                <label>Upload Edukasi Image</label>
                <input type="file" id="file" className="form-control" required
                    onChange={handleEdukasiImg}></input>
                <br></br>
                {imageError && <>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                </>}
                <label>Edukasi Title</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Edukasi Description</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Edukasi Link</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setLink(e.target.value)} value={link}></input>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type='submit'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError && <>
                <br></br>
                <div className='error-msg'>{uploadError}</div>
            </>}

        </div>
    )
}

export default AddEdukasi