import { useState } from "react"
import { CartModal } from "../../shared/CartModal/CartModal"
import { OrderModal } from "../../shared/OrderModal/OrderModal"
import { SelfOrderModal } from "../../shared/SelfOrderModal/SelfOrderModal"
import { VerifyEmailModal } from "../../shared/VerifyEmailModal/VerifyEmailModal"
import { Link } from "react-router-dom";
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
                    switchModal={()=>{setIsSelfOrderModalOpen(false); setIsVerifyEmailModalOpen(true)}}
                    />
    
                    <VerifyEmailModal
                    onClose={()=>setIsVerifyEmailModalOpen(false)}
                    isModalOpen={isVerifyEmailModalOpen}
                    />
    
                    <OrderModal
                    onClose={()=>setIsOrderModalOpen(false)}
                    isModalOpen={isOrderModalOpen}
                    switchModal={()=>{setIsOrderModalOpen(false); setIsVerifyEmailModalOpen(true)}}
                    />
                </div>
        )
}