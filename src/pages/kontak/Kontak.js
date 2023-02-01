import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Back from '../../components/back/back'
import "./kontak.css"

const Kontak = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jbrt6ql', 'template_zketa8q', form.current, 'Rp-jZyX9eeZVNPnZh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div>
      <Back title="Kontak" />
      <div className='content-kontak'>
        <div className='content-maps'>
          <iframe width="1000" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=poliklinik%20united%20tractors&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <div className='content_'>
        <div className='container-contact'>
          <form ref={form} onSubmit={sendEmail}
            className='form'>
            <h2>Layanan</h2>
            <input className='input-field' type="text" placeholder='Nama' name='user_name' required />
            <input className='input-field' type="email" placeholder='Email' name='user_email' required />
            <input className='input-field' type="text" placeholder='Subjek' name='user_subjek' required />
            <textarea className='textarea-field' name='message' cols="30" rows="10" placeholder='Ketik Pesan..'></textarea>
            <button className='btn'>Kirim</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Kontak