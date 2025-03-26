import { useCartContext } from "../../context/CartContext";
import { CartProductCard } from "../CartProductCard/CartProductCard";
import { Modal } from "../Modal/Modal";
import "./CartModal.css"

interface ICartModalProps{
    onClose: ()=> void;
    isModalOpen: boolean;
}



export function CartModal(props: ICartModalProps){
    const { cartCookies } = useCartContext()


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
                        {cartCookies.map((product)=>{
                            return (
                                <CartProductCard key={product.id} id={product.id} count={product.count}></CartProductCard>
                            )
                        })}
                    </div>
                    <div className="cartModalFooter">
                        <button className="continueShopping" onClick={()=>{props.onClose()}}>Продовжити покупки</button>

                        <div className="buyProductsDiv">
                            <p className="sumPrice">110000</p>
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