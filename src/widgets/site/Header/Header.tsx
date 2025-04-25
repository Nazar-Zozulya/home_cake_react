import { Link } from "react-router-dom";
import { LinksDiv } from "../../../shared/LinksDiv/LinksDiv";
import "./FullHeader.style.css";
import "./Header.style.css";
import { useModalStore } from "../../../shared/modals";
import { CartModal } from "../../../shared/modals/ui/CartModal";
import { SelfOrderModal } from "../../../shared/modals/ui/SelfOrderModal";
import { OrderModal } from "../../../shared/modals/ui/OrderModal";
import { SuccessModal } from "../../../shared/modals/ui/SuccessModal";
import { ErrorModal } from "../../../shared/modals/ui/ErrorModal";


export function Header() {
    const { openModal, activeModal } = useModalStore();

    return (
        <div className="SmallHeader">
            <div className="navigationDiv">
                <div className="navigationButtons">
                    <Link to={'/'}>
                        <button><p>Головна</p></button>
                    </Link>
                </div>
                <div className="navigationButtons">
                <button onClick={() => openModal('selfOrder')}><p>Замовити своє</p></button>
                <button onClick={() => openModal('cart')}><p>Кошик</p></button>
                </div>
            </div>

            {/* Рендеринг модалей в зависимости от activeModal */}
            {activeModal === 'cart' && <CartModal />}
            {activeModal === 'selfOrder' && <SelfOrderModal />}
            {activeModal === 'order' && <OrderModal />}
            {activeModal === 'verify' && <SuccessModal />}
            {activeModal === 'error' && <ErrorModal />}
        </div>
    );
}

export function FullHeader() {
    const { openModal, activeModal } = useModalStore();

    return (
        <div className="FullHeader">
            <div className="navigationDiv">
                <div className="navigationButtons firstNavigationButton">
                    <button onClick={() => {
                        const headerBlock = document.querySelector('.FullHeader');
                        headerBlock?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}><p>Головна</p></button>

                    <button onClick={() => {
                        const newProductsBlock = document.querySelector('.NewProducts');
                        newProductsBlock?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}><p>Новинки</p></button>

                    <button onClick={() => {
                        const aboutBlock = document.querySelector('.AboutUs');
                        aboutBlock?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}><p>Про нас</p></button>

                    <button onClick={() => {
                        const assortmentBlock = document.querySelector('.Assortment');
                        assortmentBlock?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}><p>Ассортимент</p></button>
                </div>
                <div className="navigationButtons">
                    <button onClick={() => openModal('selfOrder')}><p>Замовити своє</p></button>
                    <button onClick={() => openModal('cart')}><p>Кошик</p></button>
                </div>
            </div>

            <div className="logoDiv">
                <div className="mainLogo">
                    <img src="/img/logo.png" alt="" />
                    <p>Home Cake</p>
                </div>
                <LinksDiv />
                <div className="infoDiv">
                    <p>HOME.CAKE.DP</p>
                    <p>IRA KUSH</p>
                    <p>+380 (63) 460 40 97</p>
                </div>
            </div>

            {/* Рендеринг модалей */}
            {activeModal === 'cart' && <CartModal />}
            {activeModal === 'selfOrder' && <SelfOrderModal />}
            {activeModal === 'order' && <OrderModal />}
            {activeModal === 'verify' && <SuccessModal />}
            {activeModal === 'error' && <ErrorModal />}
        </div>
    );
}

Header.FullHeader = FullHeader;