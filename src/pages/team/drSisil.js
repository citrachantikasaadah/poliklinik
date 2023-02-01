import React from 'react'
import Back from '../../components/back/backDokter'
import "./dokter.css"
import { ProfileDokter } from './dataDokter'

const drSisil = () => {
    return (
        <div>
            <Back title="dr. Sisilia Gani Desanto " />

            <div className='contain'>
                <div className='dr'>
                    <img src={ProfileDokter[3].pict} />
                    <div className='description'>
                        <h2>{ProfileDokter[3].name}</h2>
                        <p>{ProfileDokter[3].profesi}</p>
                        <hr className='hr1' color="#263159" width="30%" ></hr>
                        <br />
                        <p>{ProfileDokter[3].desc}</p>
                        <hr color="#263159"  ></hr>
                        <br />
                        <div className='jadwal'>
                            <div className='jadwalP'>
                                <p>{ProfileDokter[3].jadwal}</p>
                            </div>
                            <div className='day'>
                                <div className='des'>
                                    <p>{ProfileDokter[3].day}</p>
                                    <span>{ProfileDokter[3].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[3].day}</p>
                                    <span>{ProfileDokter[3].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[3].day}</p>
                                    <span>{ProfileDokter[3].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[3].day}</p>
                                    <span>{ProfileDokter[3].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[3].day}</p>
                                    <span>{ProfileDokter[3].time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default drSisil