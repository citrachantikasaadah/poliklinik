import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fs } from '../../../Config/Config';
import HeaderCms from '../HeaderCms'

const ViewEdukasi = () => {
  const { id } = useParams();
  const [edukasi, setEdukasi] = useState([]);

  useEffect(() => {
    id && getEdukasiView();
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getEdukasiView = async () => {
    const docRef = doc(fs, "Blogs", id);
    const edukasiView = await getDoc(docRef);
    setEdukasi(edukasiView.data());
    console.log("edukasiview", edukasiView.data())
  }

  console.log("edukasi", edukasi)

  return (
    <>
      <HeaderCms />
      <div className='add'>
        <h1>View Edukasi</h1>
        <div className='card'>
          <div className='card-header'>
          </div>
          <div>
            <div className='container-view'>
              <strong>Image Edukasi</strong>
              <span>
                <img width={250} src={edukasi.imgUrl} />
              </span>
              <br />
              <strong>Title</strong>
              <span>{edukasi.title}</span>
              <br />
              {/* <strong>Time Upload</strong>
              <span>{edukasi.timestamp.toDate().toDateString()}</span>
              <br /> */}
              <strong>Description</strong>
              <div className='ex1'>
                <span>{edukasi.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewEdukasi