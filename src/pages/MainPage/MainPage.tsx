import { NewProducts } from "./MainPageComponents/NewProducts/NewProducts";
import "./MainPage.css"
import { AboutUs } from "./MainPageComponents/AboutUs/AboutUs";
import { Assortment } from "./MainPageComponents/Assortment/Assortment";
import { Element } from "react-scroll";


export function MainPage(){

    return (
        <div className="MainPage">
            <Element className="listElement" name='NewProducts'>
                <NewProducts></NewProducts>
            </Element>
            <Element className="listElement" name="AboutUs">
                <AboutUs></AboutUs>
            </Element>
            <Element className="listElement assortmentElement" name="Assortment">
                <Assortment></Assortment>
            </Element>
        </div>
    )
}