import { useState } from "react"
import { CartModal } from "../CartModal/CartModal"
import "./Header.css"




export function Header(){
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)

    return(
        <div className="Header">
            <div className="navigationDiv">
                <div className="navigationButtons">
                    <button><p>Головна</p></button>
                    <button><p>Новинки</p></button>
                    <button><p>Про нас</p></button>
                    <button><p>Ассортимент</p></button>
                </div>
                <div className="navigationButtons">
                    <button><p>Замовити своє</p></button>
                    <button onClick={()=>setIsCartModalOpen(true)}><p>Кошик</p></button>
                </div>
            </div>

            <div className="logoDiv">
                <div className="mainLogo">
                    <img src="/img/logo.png" alt="" />
                    <p>Home Cake</p>
                </div>
                <div className="linksDiv">
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=wpHU1njD1IE&ab_channel=%D0%9F%D0%BE%D0%B7%D0%B7%D0%B8"></a>
                    </div>
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=wpHU1njD1IE&ab_channel=%D0%9F%D0%BE%D0%B7%D0%B7%D0%B8"></a>
                    </div>
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=wpHU1njD1IE&ab_channel=%D0%9F%D0%BE%D0%B7%D0%B7%D0%B8"></a>
                    </div>
                </div>
                <div className="infoDiv">
                    <p>HOME.CAKE.DP</p>
                    <p>IRA KUSH</p>
                    <p>+380 (63) 460 40 97</p>
                </div>
            </div>

            <CartModal
            onClose={()=>setIsCartModalOpen(false)}
            isModalOpen={isCartModalOpen}
            ></CartModal>
        </div>
    )
}