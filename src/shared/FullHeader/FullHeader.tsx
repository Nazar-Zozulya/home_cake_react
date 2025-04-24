import { useRef, useState } from "react"
import { CartModal } from "../CartModal/CartModal"
import "./FullHeader.css"
import { Link, Element } from "react-scroll";
import { SelfOrderModal } from "../SelfOrderModal/SelfOrderModal";
import { LinksDiv } from "../LinksDiv/LinksDiv";
import { OrderModal } from "../OrderModal/OrderModal";
import { useNavigate } from "react-router-dom";
import { SuccessModal } from "../SuccessModal";



export function FullHeader(){
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [isSelfOrderModalOpen, setIsSelfOrderModalOpen] = useState(false)
    const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false)
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

    return(
            <div className="FullHeader" >
                <div className="navigationDiv">
                    <div className="navigationButtons firstNavigationButton">
                        <Link  to="Header" smooth={true}>
                            <button onClick={()=>{
                                const headerBlock = document.querySelector('.FullHeader')
                                headerBlock?.scrollIntoView({behavior: "smooth", block: "center"})
                            }}><p>Головна</p></button>
                        </Link>
                        <Link to="NewProducts" smooth={true}>
                            <button onClick={()=>{
                                const newProductsBlock = document.querySelector('.NewProducts')
                                newProductsBlock?.scrollIntoView({behavior: "smooth", block: "center"})
                            }}><p>Новинки</p></button>
                        </Link>
                        <Link to="AboutUs" smooth={true}>
                            <button onClick={()=>{
                                const aboutBlock = document.querySelector('.AboutUs')
                                aboutBlock?.scrollIntoView({behavior: "smooth", block: "center"})
                            }}><p>Про нас</p></button>
                        </Link>
                        <Link to="Assortment" smooth={true}>
                            <button onClick={()=>{
                                const assortmentBlock = document.querySelector('.Assortment')
                                assortmentBlock?.scrollIntoView({behavior: "smooth", block: "center"})
                            }}><p>Ассортимент</p></button>
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
                switchModal={()=>{setIsCartModalOpen(false); setIsOrderModalOpen(true)}}
                />


                <SelfOrderModal 
                onClose={()=>{setIsSelfOrderModalOpen(false)}}
                isModalOpen={isSelfOrderModalOpen}
                switchSuccessModal={()=>{setIsSelfOrderModalOpen(false); setIsVerifyEmailModalOpen(true)}}
                switchErrorModal={()=>{setIsSelfOrderModalOpen(false); console.log('error')}}
                />

                <SuccessModal
                onClose={()=>setIsVerifyEmailModalOpen(false)}
                isModalOpen={isVerifyEmailModalOpen}
                />

                <OrderModal
                onClose={()=>setIsOrderModalOpen(false)}
                isModalOpen={isOrderModalOpen}
                switchSuccessModal={()=>{setIsOrderModalOpen(false); setIsVerifyEmailModalOpen(true)}}
                switchErrorModal={()=>{setIsOrderModalOpen(false); console.log('error')}}
                />
            </div>
    )
}