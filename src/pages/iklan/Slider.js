// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react'
// // import './slider.css'
// // // import BtnSlider from './BtnSlider'


// // export default function slider() {
// // const [slides, setEdukasis] = useState([]);

// // useEffect(() => {
// //     getEdukasis();
// //     window.scrollTo(0, 0)
// // }, []);

// // const getEdukasis = async () => {
// //     const response = await axios.get("http://localhost:5000/iklans");
// //     setEdukasis(response.data)
// // }
// // console.log("slides", slides)
// //     return (
// // <div className='container-slider'>
// //     {slides.map((slide) => {
// //         return(
// //             <div>
// //                 <img src={slide.url}/>
// //             </div>
// //         )
// //     }) }

// // </div>
// //     )
// // }
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Slider = () => {
//     const [slides, setEdukasis] = useState([]);

//     useEffect(() => {
//         getEdukasis();
//         window.scrollTo(0, 0)
//     }, []);

//     const getEdukasis = async () => {
//         const response = await axios.get("http://localhost:5000/iklans");
//         setEdukasis(response.data)
//     }
//     console.log("slides", slides)
//     return (
//         <div className='container-slider'>
//             {slides.map((slide,) => {
//                 return (
//                     <div className='slide'>
//                         <img src={slide.url} />
//                     </div>
//                 )
//             })}

//         </div>
//     )
// }

// export default Slider