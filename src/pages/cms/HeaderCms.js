import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { logo_poli } from '../../assets'
import "./headercms.css"
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from './features/AuthSlice';

const HeaderCms = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        history.push('/auth')
    }

    useEffect(() => {
        if (location.pathname === "/dashboard") {
            setActiveTab("Dashboard")
        } else if (location.pathname === "/tentang-kami-pages") {
            setActiveTab("TentangKami")
        } else if (location.pathname === "/poli-gigi-pages") {
            setActiveTab("PoliGigi")
        } else if (location.pathname === "/poli-umum-pages") {
            setActiveTab("PoliUmum")
        } else if (location.pathname === "/pages-edukasi") {
            setActiveTab("Edukasi")
        } else if (location.pathname === "/pages-dokter") {
            setActiveTab("Dokter")
        } else if (location.pathname === "/pages-iklan") {
            setActiveTab("Iklan")
        } else if (location.pathname === "/galeri-pages") {
            setActiveTab("Galeri")
        } else if (location.pathname === "/kontak-pages") {
            setActiveTab("Kontak")
        }
    }, [location]);

    return (
        <div className='header-cms'>


            <div className='header-left'>
                <img width={200} src={logo_poli} />
                <Link to="/dashboard-poli">
                    <p
                        className={`${activeTab === "Dashboard" ? "active" : ""}`}
                        onClick={() => setActiveTab("Dashboard")}
                    >
                        Dashboard
                    </p>
                </Link>

                <Link to="/tentang-kami-pages">
                    <p
                        className={`${activeTab === "TentangKami" ? "active" : ""}`}
                        onClick={() => setActiveTab("TentangKami")}
                    >
                        Tentang Kami
                    </p>
                </Link>

                <Link to="/poli-gigi-pages">
                    <p
                        className={`${activeTab === "PoliGigi" ? "active" : ""}`}
                        onClick={() => setActiveTab("PoliGigi")}
                    >
                        Poli Gigi
                    </p>
                </Link>

                <Link to="/poli-umum-pages">
                    <p
                        className={`${activeTab === "PoliUmum" ? "active" : ""}`}
                        onClick={() => setActiveTab("PoliUmum")}
                    >
                        Poli Umum
                    </p>
                </Link>

                <Link to="/pages-edukasi">
                    <p
                        className={`${activeTab === "Edukasi" ? "active" : ""}`}
                        onClick={() => setActiveTab("Edukasi")}
                    >
                        Edukasi
                    </p>
                </Link>
                <Link to="/pages-dokter">
                    <p
                        className={`${activeTab === "Dokter" ? "active" : ""}`}
                        onClick={() => setActiveTab("Dokter")}
                    >
                        Dokter
                    </p>
                </Link>


                <Link to="/pages-iklan">
                    <p
                        className={`${activeTab === "Iklan" ? "active" : ""}`}
                        onClick={() => setActiveTab("Iklan")}
                    >
                        Iklan
                    </p>
                </Link>

                <Link to="/galeri-pages">
                    <p
                        className={`${activeTab === "Galeri" ? "active" : ""}`}
                        onClick={() => setActiveTab("Galeri")}
                    >
                        Galeri
                    </p>
                </Link>

                <Link to="/kontak-pages">
                    <p
                        className={`${activeTab === "Kontak" ? "active" : ""}`}
                        onClick={() => setActiveTab("Kontak")}
                    >
                        Kontak
                    </p>
                </Link>


            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                {/* <span>{user.name}</span> */}
                <button style={{ background: "#CD0404" }}
                    onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default HeaderCms

