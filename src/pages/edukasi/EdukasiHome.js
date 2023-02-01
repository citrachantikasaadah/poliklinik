
import React, { useEffect, useState } from 'react'
import Back from '../../components/back/back';
import { fs } from '../../Config/Config';
import Edukasi from './Edukasi';

const EdukasiHome = () => {
    //state of edukasi
    const [edukasi, setEdukasi] = useState([]);

    //getting edukasi function
    const getEdukasi = async () => {
        const edukasi = await fs.collection('Edukasi').get();
        const edukasiArray = [];
        for (var snap of edukasi.docs) {
            var data = snap.data();
            data.ID = snap.id;
            edukasiArray.push({
                ...data
            })
            if (edukasiArray.length === edukasi.docs.length) {
                setEdukasi(edukasiArray);
            }
        }
    }

    useEffect(() => {
        getEdukasi();
    }, [])

    return (
        <>
            {edukasi.length > 0 && (
                <div className='container-fluid'>
                    <Back title="Edukasi" />
                    <div className='edukasi--box'>
                        <Edukasi edukasi={edukasi} />
                    </div>
                </div>
            )}
            {edukasi.length < 1 && (
                <div className='my-products please-wait'>Please wait...</div>
            )}
        </>
    )
}

export default EdukasiHome