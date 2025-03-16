import { NewProducts } from "./MainPageComponents/NewProducts/NewProducts";
import "./MainPage.css"
import { AboutUs } from "./MainPageComponents/AboutUs/AboutUs";
import { Assortment } from "./MainPageComponents/Assortment/Assortment";


export function MainPage(){

    return (
        <div className="MainPage">
            <NewProducts></NewProducts>
            <AboutUs></AboutUs>
            <Assortment></Assortment>
        </div>
    )
}