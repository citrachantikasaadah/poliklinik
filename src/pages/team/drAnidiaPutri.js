import React from 'react'
import Back from '../../components/back/backDokter'
import "./dokter.css"
import { ProfileDokter } from './dataDokter'

const drAnidiaPutri = () => {
    return (
        <div>
            <Back title="dr. Anidia Putri " />

            <div className='contain'>
                <div className='dr'>
                    <img src={ProfileDokter[0].pict} />
                    <div className='description'>
                        <h2>{ProfileDokter[0].name}</h2>
                        <p>{ProfileDokter[0].profesi}</p>
                        <hr className='hr1' color="#263159" width="30%" ></hr>
                        <br />
                        <p>{ProfileDokter[0].desc}</p>
                        <hr color="#263159"  ></hr>
                        <br />
                        <div className='jadwal'>
                            <div className='jadwalP'>
                                <p>{ProfileDokter[0].jadwal}</p>
                            </div>
                            <div className='day'>
                                <div className='dayy'>
                                    {ProfileDokter[0].day.map((i) => {
                                        return (
                                            <p className='des'>{i.hari}</p>
                                        )
                                    })}
                                    
                                </div>

                                {/* <div className='des'>
                                    <p>{ProfileDokter[0].day}</p>
                                    <span>{ProfileDokter[0].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[0].day}</p>
                                    <span>{ProfileDokter[0].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[0].day}</p>
                                    <span>{ProfileDokter[0].time}</span>
                                </div>
                                <div className='des'>
                                    <p>{ProfileDokter[0].day}</p>
                                    <span>{ProfileDokter[0].time}</span>
                                </div> */}
                            </div> 
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default drAnidiaPutri