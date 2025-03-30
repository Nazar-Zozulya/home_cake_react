import { useState } from "react"
import { CartModal } from "../CartModal/CartModal"
import "./Header.css"
import { Link, Element } from "react-scroll";
import { SelfOrderModal } from "../SelfOrderModal/SelfOrderModal";
import { LinksDiv } from "../LinksDiv/LinksDiv";
import { VerifyEmailModal } from "../VerifyEmailModal/VerifyEmailModal";



export function Header(){
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [isSelfOrderModalOpen, setIsSelfOrderModalOpen] = useState(false)
    const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false)

    return(
            <Element className="Header" name="Header">
                <div className="navigationDiv">
                    <div className="navigationButtons">
                        <Link to="Header" smooth={true}>
                            <button><p>Головна</p></button>
                        </Link>
                        <Link to="NewProducts" smooth={true}>
                            <button><p>Новинки</p></button>
                        </Link>
                        <Link to="AboutUs" smooth={true}>
                            <button><p>Про нас</p></button>
                        </Link>
                        <Link to="Assortment" smooth={true}>
                            <button><p>Ассортимент</p></button>
                        </Link>
                    </div>
                    <div className="navigationButtons">
                        <button onClick={()=>setIsSelfOrderModalOpen(true)}><p>Замовити своє</p></button>
                        <button onClick={()=>setIsCartModalOpen(true)}><p>Кошик</p></button>
                    </div>
                </div>

                <div className="logoDiv">
                    <div className="mainLogo">
                        <img src="/img/logo.png" alt="" />
                        <p>Home Cake</p>
                    </div>
                    <LinksDiv></LinksDiv>
                    <div className="infoDiv">
                        <p>HOME.CAKE.DP</p>
                        <p>IRA KUSH</p>
                        <p>+380 (63) 460 40 97</p>
                    </div>
                </div>

                <CartModal
                onClose={()=>setIsCartModalOpen(false)}
                isModalOpen={isCartModalOpen}
                />


                <SelfOrderModal 
                onClose={()=>{setIsSelfOrderModalOpen(false)}}
                isModalOpen={isSelfOrderModalOpen}
                switchModal={()=>{setIsSelfOrderModalOpen(false); setIsVerifyEmailModalOpen(true)}}
                />

                <VerifyEmailModal
                onClose={()=>setIsVerifyEmailModalOpen(false)}
                isModalOpen={isVerifyEmailModalOpen}
                />
            </Element>
    )
}