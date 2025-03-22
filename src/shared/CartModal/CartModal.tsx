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
                        {cartCookies.map((pr)=>{
                            return (
                                <CartProductCard id={pr.id} count={pr.count}></CartProductCard>
                            )
                        })}
                    </div>
                    <div className="cartModalFooter">
                        <button className="continueShopping">Продовжити покупки</button>

                        <div className="buyProductsDiv">
                            {/* <p className="sumPrice">{totalSum}</p> */}
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