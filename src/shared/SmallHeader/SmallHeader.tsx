import { useState } from "react"
import { CartModal } from "../CartModal/CartModal"
import { OrderModal } from "../OrderModal/OrderModal"
import { SelfOrderModal } from "../SelfOrderModal/SelfOrderModal"
import { Link } from "react-router-dom";
import { SuccessModal } from "../SuccessModal";
import "./SmallHeader.css"




export function SmallHeader(){
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
        const [isSelfOrderModalOpen, setIsSelfOrderModalOpen] = useState(false)
        const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false)
        const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
    
        return(
                <div className="SmallHeader">
                    <div className="navigationDiv">
                        <div className="navigationButtons">
                            <Link to={'/'}>
                                <button><p>Головна</p></button>
                            </Link>
                        </div>
                        <div className="navigationButtons">
                            <button onClick={()=>setIsSelfOrderModalOpen(true)}><p>Замовити своє</p></button>
                            <button onClick={()=>setIsCartModalOpen(true)}><p>Кошик</p></button>
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