import { AboutUs } from "../../ui/AboutUs";
import { Assortment } from "../../ui/Assortment";
import { NewProducts } from "../../ui/NewProducts";
import "./MainPage.style.css"



export function MainPage(){

    return (
        <div className="MainPage">
            <section className="listElement">
                <NewProducts></NewProducts>
            </section>
            <section className="listElement">
                <AboutUs></AboutUs>
            </section>
            <section className="listElement assortmentElement">
                <Assortment></Assortment>
            </section>
        </div>
    )
}