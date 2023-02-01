import React from 'react'
import { poliumum } from '../../assets'
import Back from '../../components/back/backLayanan'
import "./poliumum.css"

const PoliUmum = () => {
  return (
    <div>
        <Back title="Poli Umum"/>
        <div className='content-poliumum'>
          <img width={400} src={poliumum}/>
          <img width={400} src={poliumum}/>
          <img width={400} src={poliumum}/>
        </div>
    </div>
  )
}

export default PoliUmum