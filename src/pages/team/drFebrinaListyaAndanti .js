import React from 'react'
import Back from '../../components/back/backDokter'
import "./dokter.css"
import { ProfileDokter } from './dataDokter'

const drFebrianaListyaAndanti = () => {
    return (
        <div>
            <Back title="dr. Deti Nurdiati " />

            <div className='contain'>
                <div className='dr'>
                    <img src={ProfileDokter[2].pict} />
                    <div className='description'>
                        <h2>{ProfileDokter[2].name}</h2>
                        <p>{ProfileDokter[2].profesi}</p>
                        <hr className='hr1' color="#263159" width="30%" ></hr>
                        <br />
                        <p>{ProfileDokter[2].desc}</p>
                        <hr color="#263159"  ></hr>
                        <br />
                        <div className='jadwal'>
                            <div className='jadwalP'>
                                <p>{ProfileDokter[2].jadwal}</p>
                            </div>
                            <div className='day'>
                                <div className='des'>
                                    <p>{ProfileDokter[2].day}</p>
                                    <span>{ProfileDokter[2].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[2].day}</p>
                                    <span>{ProfileDokter[2].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[2].day}</p>
                                    <span>{ProfileDokter[2].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[2].day}</p>
                                    <span>{ProfileDokter[2].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[2].day}</p>
                                    <span>{ProfileDokter[2].time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default drFebrianaListyaAndanti