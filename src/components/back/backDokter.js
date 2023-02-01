import React from "react"
import { useLocation } from "react-router-dom"
import "./back.css";
import { back } from "../../assets"

function Back({ title }) {
    const location = useLocation()
    return (
        <>
            <div className="hero-back">
                <section className="hero">
                    {/* <img src={back} alt="" /> */}
                    <h1>{title}</h1>
                    <p>Home / Team / Dokter / {location.pathname.split("/")[1]}</p>

                </section>
            </div>
        </>
    )
}

export default Back