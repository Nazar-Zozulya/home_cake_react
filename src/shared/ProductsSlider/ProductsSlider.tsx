import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductsSlider.css"

interface IProductsSliderProps{
    children: ReactNode
}

export function ProductsSlider(props: IProductsSliderProps){
    
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true, // Включаем центрирование
        centerPadding: "0px", // Убираем отступы, чтобы карточки были в центре
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
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