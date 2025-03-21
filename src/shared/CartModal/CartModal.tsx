import { useCartContext } from "../../context/CartContext";
import { CartProductCard } from "../CartProductCard/CartProductCard";
import { Modal } from "../Modal/Modal";
import "./CartModal.css"

interface ICartModalProps{
    onClose: ()=> void;
    isModalOpen: boolean;
}



export function CartModal(props: ICartModalProps){
    const { cartCookies, getProductById } = useCartContext()


    return (
        <>
        { props.isModalOpen === false ? 
        undefined
        :
        <Modal>
            <div className="CartModal">
                <div className="cartModal">
                    <div className="cartModalHeader">
                        <p>Кошик</p>
                        <button className="closeModalButton" onClick={()=>{props.onClose()}}>X</button>
                    </div>
                    <div className="cartModalList">
                        {cartCookies.map((pr)=>{
                            const product = getProductById(pr.id)
                            
                            if(!product) return
                            return (
                            <CartProductCard product={product} count={pr.count}></CartProductCard>
                            )
                        })}
                    </div>
                    <div className="cartModalFooter">
                        <button className="continueShopping">Продовжити покупки</button>

                        <div className="buyProductsDiv">
                            <p className="sumPrice">1111</p>
                            <button className="buyFromCartButton">Замовити</button>                        
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        }
        </>
    )
}