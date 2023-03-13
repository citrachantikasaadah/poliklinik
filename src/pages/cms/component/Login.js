import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logo_poli } from '../../../assets';
import { LoginUser, reset } from "../features/AuthSlice"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            history.push('/dashboard-poli')
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, history]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };

    return (
        <>
            <div className='login'>

                <form onSubmit={Auth} className='form-group'>
                    <div style={{marginBottom: "30px"}}>
                        <img width={250} src={logo_poli} />
                    </div>

                    <h1 style={{ fontSize: "20px" }}>Login</h1>
                    {isError && <p>{message}</p>}
                    <input
                        className="form-control-login"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                    <br></br>
                    <input
                        className="form-control-login"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                    <br></br>
                    <button>{isLoading ? 'Loading...' : 'Login'}</button>
                </form>
                <div>
                    <img width={500} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1678438460~exp=1678439060~hmac=e1284fcfd3850273084d7bcb95a01875d95665e241b1c48141a35d846a340792' />
                </div>
            </div>

        </>
    )
}

export default Login