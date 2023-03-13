// import { useState } from "react";
// import { RxDotFilled } from 'react-icons/rx';
// import { right_arrow, left_arrow } from '../../assets';

// const slideStyles = {
//     width: '100%',
//     height: '100%',
//     borderRadius: '10px',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     // backgroundImage: `url(${edukasis[currentIndex].url})`
// };

// const leftArrowStyles = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translate(0, -50%)',
//     left: '-100px',
//     FontSize: '45px',
//     color: '#46d4e7',
//     // backgroundColor: '#46d4e7',
//     cursor: 'pointer',
//     fontSize: "20px",
// };

// const rightArrowStyles = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translate(0, -50%)',
//     right: '-100px',
//     FontSize: '45px',
//     color: '#46d4e7',
//     // backgroundColor: '#46d4e7',
//     borderRadius: '50%',
//     // width: '5%',
//     cursor: 'pointer',
// };

// const dotsContainerStyles = {
//     display: 'flex',
//     justifyContent: 'center',
// };

// const dotStyles = {
//     margin: '8px 5px',
//     cursor: 'pointer',
//     fontSize: '20px',
//     color: '#46d4e7',
// }

// const sliderStyles = {
//     height: '100%',
//     position: "relative",
// };


// const ImageSlider = ({ edukasis }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToPrevious = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? edukasis.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };

//     const goToNext = () => {
//         const isLastSlide = currentIndex === edukasis.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     };

//     const goToSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex);
//     }

//     const slideStylesWidthBackground = {
//         ...slideStyles,
//         backgroundImage: `url(${edukasis[currentIndex].url})`,
//     };

//     return (
//         <div style={sliderStyles}>
//             <div style={leftArrowStyles} onClick={goToPrevious}>
//                 <img src={left_arrow} />
//             </div>
//             <div style={rightArrowStyles} onClick={goToNext}>
//                 <img src={right_arrow} />
//             </div>
//             <div style={slideStylesWidthBackground}></div>
//             <div style={dotsContainerStyles}>
//                 {edukasis.map((edukasis, slideIndex) => (
//                     <div
//                         key={slideIndex}
//                         style={dotStyles}
//                         onClick={() => goToSlide(slideIndex)}
//                     >
//                         <RxDotFilled />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// };

// export default ImageSlider;

// import { useEffect, useState } from "react";

// const slideStyles = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
// };

// const rightArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
// };

// const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
// };

// const sliderStyles = {
//     position: "relative",
//     height: "100%",
// };

// const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
// };

// const dotStyle = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "20px",
//     color: "#2CB9CC",
// };

// const ImageSlider = ({ slides, autoSlide = false,
//     autoSlideInterval = 3000 }) => {


//     useEffect(() => {
//         if (!autoSlide) return
//         const slideInterval = setInterval(goToNext, autoSlideInterval)
//         return () => clearInterval(slideInterval)
//     }, [])

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const goToPrevious = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };
//     const goToNext = () => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     };
//     const goToSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex);
//     };
//     const slideStylesWidthBackground = {
//         ...slideStyles,
//         backgroundImage: `url(${slides[currentIndex].url})`,
//     };

//     return (
//         <div style={sliderStyles}>
//             <div>
//                 <div onClick={goToPrevious} style={leftArrowStyles}>
//                     ❰
//                 </div>
//                 <div onClick={goToNext} style={rightArrowStyles}>
//                     ❱
//                 </div>
//             </div>
//             <div style={slideStylesWidthBackground}></div>
//             <div style={dotsContainerStyles}>
//                 {slides.map((slide, slideIndex) => (
//                     <div
//                         style={dotStyle}
//                         key={slideIndex}
//                         onClick={() => goToSlide(slideIndex)}
//                     >
//                         ●
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageSlider;

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="container-slide">
      <div
        className="container-slides"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="arrow">
        <button
          onClick={prev}
          className="button-arrow"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="button-arrow"
        >
        <ChevronRight size={40} />
        </button>
      </div>

      <div className="slides">
        <div className="slides-img">
          {slides.map((_, i) => (
            <div
              className={`
              img
              ${curr === i ?  "slidess" : "slidesss"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// import React, { useEffect, useState } from 'react'
// import HeroSlider, { Slide } from "hero-slider"


// const ImageSlider = () => {

//   const [slides, setEdukasis] = useState([]);

//   useEffect(() => {
//     getEdukasis();
//   }, []);

//   const getEdukasis = async () => {
//     const response = await axios.get("http://localhost:5000/iklans");
//     setEdukasis(response.data)
//   }
//   console.log("slides", slides)

//   return (
//     <HeroSlider
//       slidingAnimation="left_to_right"
//       orientation="horizontal"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide)}
//       onChange={nextSlide => console.log("onChange", nextSlide)}
//       onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
//       style={{
//         backgroundColor: "black"
//       }}
//       settings={{
//         slidingDuration: 250,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: true,
//         autoplayDuration: 1000,
//         height: "100vh"
//       }}
//     >
//       <Slide>
//         {slides.map((s) => {
//           return (
//             <img style={{ width: "100%", height: "100%", backgroundAttachment: "fixed" }} src={s.url} />

//           )

//         })}
//       </Slide>
//     </HeroSlider>
//   )
// }

// export default ImageSlider

// import { useEffect, useState } from "react";

// const slideStyles = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
// };

// const rightArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
// };

// const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
// };

// const sliderStyles = {
//     position: "relative",
//     height: "100%",
// };

// const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
// };

// const dotStyle = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "20px",
//     color: "#2CB9CC",
// };

// const ImageSlider = ({ slides }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const goToPrevious = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };
//     const goToNext = () => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     };
//     const goToSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex);
//     };
//     const slideStylesWidthBackground = {
//         ...slideStyles,
//         backgroundImage: `url(${slides[currentIndex].url})`,
//     };

//     useEffect(() => {
//         console.log("slides")
//     }, [slides])

//     return (
//         <div style={sliderStyles}>
//             <div>
//                 <div onClick={goToPrevious} style={leftArrowStyles}>
//                     ❰
//                 </div>
//                 <div onClick={goToNext} style={rightArrowStyles}>
//                     ❱
//                 </div>
//             </div>
//             <div style={slideStylesWidthBackground}></div>
//             <div style={dotsContainerStyles}>
//                 {slides.map((slide, slideIndex) => (
//                     <div
//                         style={dotStyle}
//                         key={slideIndex}
//                         onClick={() => goToSlide(slideIndex)}
//                     >
//                         ●
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageSlider;