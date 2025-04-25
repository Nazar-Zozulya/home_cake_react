import { AboutUsCard } from "../AboutUsCard/AboutUsCard";
import "./AboutUs.style.css"





export function AboutUs(){

    return(
        <div className="AboutUs">
            <div className="aboutUsContainer">
                <p className="aboutUsTitle">Власна Кондитерська</p>
                <div className="aboutUsList">
                    <div className="aboutUsListHelpDiv">
                        <AboutUsCard title="Натуральні інгредієнти" description="Використовуємо лише натуральні інгредієнти , без додавання хімічних добавок та покращувачів смаку" image="https://malenka-pekarnia.com/img/love/2.png"></AboutUsCard>
                        <AboutUsCard title="Натуральні інгредієнти" description="Використовуємо лише натуральні інгредієнти , без додавання хімічних добавок та покращувачів смаку" image="https://malenka-pekarnia.com/img/love/2.png"></AboutUsCard>
                    </div>
                    <div className="aboutUsListHelpDiv">
                        <AboutUsCard title="Натуральні інгредієнти" description="Використовуємо лише натуральні інгредієнти , без додавання хімічних добавок та покращувачів смаку" image="https://malenka-pekarnia.com/img/love/2.png"></AboutUsCard>
                        <AboutUsCard title="Натуральні інгредієнти" description="Використовуємо лише натуральні інгредієнти , без додавання хімічних добавок та покращувачів смаку" image="https://malenka-pekarnia.com/img/love/2.png"></AboutUsCard>
                    </div>
                </div>
            </div>
        </div>
    )
}