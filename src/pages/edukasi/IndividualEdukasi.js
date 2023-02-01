import React from 'react'
import "./edukasi.css"
import { Link } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai';

const IndividualEdukasi = ({ individualEdukasi }) => {
    console.log(individualEdukasi);
    return (
        <>
            <div className="edukasi">
            
                <div className="container-edukasi">
                    <div className="box-edukasi">
                        <div className="news">
                            <div className="image-edukasi">
                                <img width={300} src={individualEdukasi.url} />
                            </div>
                            <div className="content-edukasi">
                                <h2>{individualEdukasi.title}</h2>
                                <p>{individualEdukasi.description}</p>
                            </div>
                        </div>
                        <div className='edukasidetail'>
                            <Link to={individualEdukasi.link}>Lihat Detail <AiFillCaretRight /> </Link>
                        </div>

                    </div>
                </div>



            </div>
            {/* <div className='container-edukasi1'>
                <div className='image-edukasi1'>
                    <img width={300} src={individualEdukasi.url} />
                </div>

                <div className="content-edukasi1">
                    <h2>{individualEdukasi.title}</h2>
                    <p>{individualEdukasi.description}</p>
                </div>

                <div className='edukasidetail1'>
                    <Link to={individualEdukasi.link}>Lihat Detail <AiFillCaretRight /> </Link>
                </div>

            </div> */}
        </>
    )
}

export default IndividualEdukasi