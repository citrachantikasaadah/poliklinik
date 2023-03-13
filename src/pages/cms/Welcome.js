import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {

  const {user} = useSelector((state) => state.auth);

  return (
    <div className='welcome'>
        <h1>
            Selamat Datang di Dashboard Poliklinik United Tractors 
        </h1>
    </div>
  )
}

export default Welcome