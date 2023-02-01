import React from 'react'
import Back from '../../components/back/backDokter'
import "./dokter.css"
import { ProfileDokter } from './dataDokter'

const drRadite = () => {
    return (
        <div>
            <Back title="dr. Radite Nusasenjaya, M.KK, Sp.Ok " />

            <div className='contain'>
                <div className='dr'>
                    <img src={ProfileDokter[4].pict} />
                    <div className='description'>
                        <h2>{ProfileDokter[4].name}</h2>
                        <p>{ProfileDokter[4].profesi}</p>
                        <hr className='hr1' color="#263159" width="30%" ></hr>
                        <br />
                        <p>{ProfileDokter[4].desc}</p>
                        <hr color="#263159"  ></hr>
                        <br />
                        <div className='jadwal'>
                            <div className='jadwalP'>
                                <p>{ProfileDokter[4].jadwal}</p>
                            </div>
                            <div className='day'>
                                <div className='des'>
                                    <p>{ProfileDokter[4].day}</p>
                                    <span>{ProfileDokter[4].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[4].day}</p>
                                    <span>{ProfileDokter[4].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[4].day}</p>
                                    <span>{ProfileDokter[4].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[4].day}</p>
                                    <span>{ProfileDokter[4].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[4].day}</p>
                                    <span>{ProfileDokter[4].time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default drRadite