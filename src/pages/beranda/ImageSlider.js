import { useState } from "react";
import { RxDotFilled } from 'react-icons/rx';
import { right_arrow, left_arrow } from '../../assets';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: '100%',
        position: "relative",
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '-100px',
        FontSize: '45px',
        color: '#46d4e7',
        // backgroundColor: '#46d4e7',
        cursor: 'pointer',
        fontSize: "20px",
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '-100px',
        FontSize: '45px',
        color: '#46d4e7',
        // backgroundColor: '#46d4e7',
        borderRadius: '50%',
        // width: '5%',
        cursor: 'pointer',
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const dotStyles = {
        margin: '8px 5px',
        cursor: 'pointer',
        fontSize: '20px',
        color: '#46d4e7',
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>
                <img src={left_arrow} />
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
                <img src={right_arrow} />
            </div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        style={dotStyles} 
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ImageSlider;