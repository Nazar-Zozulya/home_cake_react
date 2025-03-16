import { AboutUsCard } from "./AboutUsCard/AboutUsCard";
import "./AboutUs.css"





export function AboutUs(){

    return(
        <div className="AboutUs">
            <div className="aboutUsContainer">
                <p className="aboutUsTitle">Власна Кондитерська</p>
                <div className="aboutUsList">
                    <AboutUsCard title="1" description="123123123123" image="../../../../../public/img/add-to-cart.jpg"></AboutUsCard>
                    <AboutUsCard title="1" description="123123123123" image="../../../../../public/img/add-to-cart.jpg"></AboutUsCard>
                    <AboutUsCard title="1" description="123123123123" image="../../../../../public/img/add-to-cart.jpg"></AboutUsCard>
                    <AboutUsCard title="1" description="123123123123" image="../../../../../public/img/add-to-cart.jpg"></AboutUsCard>
                </div>
            </div>
        </div>
    )
}