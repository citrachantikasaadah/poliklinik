import "./beranda.css"
import { Link } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai';
import ImageSlider from "./ImageSlider"
import { fasilitas, news, slides } from '../../components/dummydata';
import { hero } from '../../assets';

import React from 'react'

const Beranda = () => {

    // const h2 = {
    // fontSize: "40px",
    // width: "100%",
    // margin: "0px auto",
    // marginBottom: "30px",
    // color: #263159,
    // }

    // const containerStyles = {
    //     width: "700px",
    //     height: "400px",
    //     margin: "0px auto",
    //     marginBottom: "32px"
    // }
    return (
        
        <div className='beranda-container'>
            {/* BANNER */}
            <div className='hero-beranda'>
                <div className="container-beranda">
                    {/* <img src={hero} alt="" /> */}
                    <h1>POLIKLINIK</h1>
                    <h1>UNITED TRACTORS</h1>
                    <div className='more-beranda'>
                        <a href="">Daftar disini <AiFillCaretRight /></a>
                        {/* <Link to="/sejarah"> </Link> */}
                    </div>
                </div>
            </div>

            {/* SLIDER */}
            <div className="containerStyles" >
                <h2>Kesehatan anda adalah prioritas kami</h2>
                <ImageSlider slides={slides} />
            </div>

            {/* KEUNGGULAN LAYANAN */}
            <div className='fasilitas'>
                <div className='title-fasilitas'>
                    <h2>Keunggulan Layanan</h2>
                    <h5>Melayani dengan sepenuh hati</h5>
                </div>
                <div className="container-fasilitas" style={{ display: 'flex', flexDirection: 'row' }}>
                    {fasilitas.map((item) => {
                        return (
                            <div className='box-fasilitas'>
                                <div className='keunggulan'>
                                    <img src={item.icon} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* EDUKASI */}
            <div className="edukasi">
                <div className="title-edukasi">
                    <h2>Edukasi</h2>
                </div>

                <div className="container-edukasi">
                    {news.map((item) => {
                        return (
                            <div className="box-edukasi">
                                <div className="news">
                                    <div className="image-edukasi">
                                        <img width={300} src={item.pict} />
                                    </div>
                                    <div className="content-edukasi">
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                                <div className='edukasidetail'>
                                    <Link to="/edukasidetail">Lihat Detail <AiFillCaretRight /> </Link>
                                </div>

                            </div>
                        )
                    })}
                </div>



            </div>
            {/* <div className='edukasi'>
                <div className='title-edukasi'>
                    <h2>Edukasi</h2>
                </div>
                <div className='container-edukasi' style={{ display: 'flex', flexDirection: 'row' }}>
                    {news.map((item) => {
                        return (
                            <div className='news1'>
                                <img src={item.pict} />
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <div className='edukasidetail'>
                                    <Link to="/edukasidetail">Lihat Detail <AiFillCaretRight /> </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}
        </div>
    )
}
export default Beranda