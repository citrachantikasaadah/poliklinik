import React from "react"
import { useLocation } from "react-router-dom"
import "./back.css";
import { back } from "../../assets"


function Back({ title }) {
    const location = useLocation()
    return (
        <>
            <div  className="hero-back">
                <div className="hero">
                    {/* <img src={back} alt="" /> */}
                    <h1>{title}</h1>
                    <p>Home /  {location.pathname.split("/")[1]}</p>

                </div>
            </div>
        </>
    )
}

export default Back