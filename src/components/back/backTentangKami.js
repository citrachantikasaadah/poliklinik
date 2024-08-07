import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./back.css";
import { back } from "../../assets"
import Beranda from "../../pages/beranda/Beranda"

function Back({ title }) {
    // const Back = ({ title }) => {
    const location = useLocation()

    return (
        <>
            <div className="hero-back">
                <section className="hero">
                    {/* <img src={back} alt="" /> */}
                    <h1>{title}</h1>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                    </div>
                    {/* <p>Home / Tentang Kami / {location.pathname.split("/")[1]}</p> */}

                </section>
            </div>
        </>
    )
}

export default Back