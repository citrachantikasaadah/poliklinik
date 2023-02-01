import React from 'react'
import './visimisi.css'
import Back from '../../../components/back/backTentangKami'
import { prima } from '../../../assets'

const VisiMisi = () => {
  return (
    <div className='visi'>
      <Back title="Visi Misi" />
      <div className='container-visimisi'>
        <img width={400} src={prima} />
        <div className='content-visimisi'>

          <h2>
            WBAWI
          </h2>
          <p>
            Menyelenggarakan pelayanan Kesehatan yang bermutu, dengan mengutamakan keselamatan pasien.
            Menyediakan pelayanan kesehatan yang ramah, cepat dan profesional.
            Menyelenggarakan pelayanan kesehatan sesuai terstandart dan perkembangan teknoligi.
            Mengembangkan sumber daya Klinik.
          </p>
          <h2>
            VISI
          </h2>
          <p>
            Menjadi Klinik Kesehatan pilihan utama dengan pelayanan yang
            prima dan menjadi Strategic Partner EHS/HC Deot dan Manajemen dalam pengolahan Kesehatan.
          </p>
          <h2>
            MISI
          </h2>
          <p>
            - Menyelenggarakan pelayanan Kesehatan yang bermutu, dengan mengutamakan keselamatan pasien.
            - Menyediakan pelayanan kesehatan yang ramah, cepat dan profesional.
            - Menyelenggarakan pelayanan kesehatan sesuai terstandart dan perkembangan teknologi.
            -Mengembangkan suberdaya Klinik
          </p>
        </div>


      </div>
    </div>
  )
}

export default VisiMisi