import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductsSlider.style.css"

interface IProductsSliderProps{
    children: ReactNode
}

export function ProductsSlider(props: IProductsSliderProps){
    
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        easing: "ease",
        rtl: false,
        centerMode: false, // Включаем центрирование
        centerPadding: "0px", // Убираем отступы, чтобы карточки были в центре
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    // centerMode: true,
                },
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    // centerMode: true,
                },
            },
        ],
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>{props.children}</Slider>
        </div>
    );
}