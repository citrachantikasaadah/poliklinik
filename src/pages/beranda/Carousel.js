
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({children : slides}){
    return(
        <div>
            <div>{slides}</div>
        </div>
    )
}