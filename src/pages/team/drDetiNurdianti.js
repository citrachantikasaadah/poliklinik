import React from 'react'
import Back from '../../components/back/backDokter'
import "./dokter.css"
import { ProfileDokter } from './dataDokter'

const drDetiNurdianti = () => {
    return (
        <div>
            <Back title="dr. Deti Nurdiati " />

            <div className='contain'>
                <div className='dr'>
                    <img src={ProfileDokter[1].pict} />
                    <div className='description'>
                        <h2>{ProfileDokter[1].name}</h2>
                        <p>{ProfileDokter[1].profesi}</p>
                        <hr className='hr1' color="#263159" width="30%" ></hr>
                        <br />
                        <p>{ProfileDokter[1].desc}</p>
                        <hr color="#263159"  ></hr>
                        <br />
                        <div className='jadwal'>
                            <div className='jadwalP'>
                                <p>{ProfileDokter[1].jadwal}</p>
                            </div>
                            <div className='day'>
                                <div className='des'>
                                    <p>{ProfileDokter[1].day}</p>
                                    <span>{ProfileDokter[1].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[1].day}</p>
                                    <span>{ProfileDokter[1].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[1].day}</p>
                                    <span>{ProfileDokter[1].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[1].day}</p>
                                    <span>{ProfileDokter[1].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[1].day}</p>
                                    <span>{ProfileDokter[1].time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default drDetiNurdianti