import React from 'react'
import { Link } from "react-router-dom";
import Back from '../../components/back/backTeam';
import { ProfileDokter } from './dataDokter';
import "./profildokter.css"

const Dokter = () => {
    return (
        <div>
            <Back title="Dokter" />
            <div className='contain'>
                {ProfileDokter.map((item) => {
                    return (
                        <div className='box1'>
                            <div className='pict'>
                                <img className='image' src={item.pict} />
                                <div class="middle">
                                    <Link className='button' to={item.path}>
                                        <h2>Lihat profil</h2>
                                    </Link>
                                </div>
                            </div>

                            <div className='box'>
                                <div className='box-name'>
                                    <h2>{item.name}</h2>
                                </div>


                                <hr color="#fff"></hr>
                                <p>{item.profesi}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Dokter