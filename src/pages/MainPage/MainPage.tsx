import { NewProducts } from "./MainPageComponents/NewProducts/NewProducts";
import "./MainPage.css"
import { AboutUs } from "./MainPageComponents/AboutUs/AboutUs";
import { Assortment } from "./MainPageComponents/Assortment/Assortment";
import { Element } from "react-scroll";


export function MainPage(){

    return (
        <div className="MainPage">
            <Element name='NewProducts'>
                <NewProducts></NewProducts>
            </Element>
            <Element name="AboutUs">
                <AboutUs></AboutUs>
            </Element>
            <Element name="Assortment">
                <Assortment></Assortment>
            </Element>
        </div>
    )
}