// import React, { useEffect, useState } from 'react'
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../../Config/Config"
// import { useHistory } from "react-router-dom";
// import { toast } from 'react-toastify';


// const Admin = () => {
//     const [error, setError] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const history = useHistory()

//     const handleLogin = (e) => {
//         e.preventDefault();

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 //Signed in
//                 const user = userCredential.user;
//                 toast.success("Login successfully");
//                 history.push('/dashboard-poli')
//             })
//             .catch((error) => {
//                 setError(true);
//             });
//     };
//     return (
//         <>

//             <div className='login'>

//                 <form onSubmit={handleLogin} className='form-group'>
//                     <h1>Login</h1>
//                     <input className="form-control-login" type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
//                     <br></br>
//                     <input className="form-control-login" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
//                     <br></br>
//                     <button type="submit" >Login</button>
//                     {error && <span>Wrong email or password</span>}
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Admin

import React from 'react'

const Admin = () => {
  return (
    <div>
        <button>abab</button>
    </div>
  )
}

export default Admin