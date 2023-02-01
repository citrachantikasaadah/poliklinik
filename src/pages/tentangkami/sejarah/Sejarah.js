import React from 'react'
import Back from '../../../components/back/backTentangKami'
import { gedung_poli } from '../../../assets'
import './sejarah.css'

const Sejarah = () => {
  return (
    <>
      <Back title="Sejarah" />
      <div className='container-sejarah'>

        <img width={800} src={gedung_poli} />
        <div className='content-sejarah'>
          <h2>TENTANG POLIKLINIK</h2>
          <hr color="#263159" width={150} ></hr>
          <p>
            United Tractors melalui Yayasan Karya Bakti UT mendirikan Poliklinik UT, sebagai bentuk karya bakti untuk negeri di bidang Kesehatan. Dengan semangat, untuk meningkatkan derajat kesehatan
            karyawan, keluarga dan masyarakat sekitar.

            Dalam perjalanannya, Poliklinik akan memperluas layanannya dengan membuka poliklinik baru di berbagai kota di Indonesia.

            Poliklinik UT hadir dengan berbagai layanan kesehatan yang komperehensif meliputi pelayanan promotif, preventif, kuratif dan rehabilitatif.
          </p>
        </div>
      </div>
      </>
  )
}

export default Sejarah