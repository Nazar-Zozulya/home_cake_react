import { useModalStore } from "../..";
import { useCartContext } from "../../../../context";
import { CartProductCard } from "../../../CartProductCard/CartProductCard";
import { Modal } from "../Modal";
import "./CartModal.style.css"





export function CartModal(){
    const { activeModal, closeModal, switchModal } = useModalStore();
    const { cartCookies, totalSum } = useCartContext();

    if (activeModal !== 'cart') return null;


    return (
        <Modal isOpen={true} onClose={()=>closeModal()}>
            <div className="CartModal">
                <div className="cartModal">
                    <div className="cartModalHeader">
                        <p>Кошик</p>
                        <button className="closeModalButton" onClick={()=>{closeModal()}}>X</button>
                    </div>
                    <div className="cartModalList">
                        {cartCookies.map((product)=>{
                            return (
                                <CartProductCard key={product.id} id={product.id} count={product.count}></CartProductCard>
                            )
                        })}
                    </div>
                    <div className="cartModalFooter">
                        <button className="continueShopping" onClick={()=>{closeModal()}}>Продовжити покупки</button>

                        <div className="buyProductsDiv">
                            <p className="sumPrice">{totalSum}</p>
                            <button className="buyFromCartButton" onClick={()=>switchModal('order')}>Замовити</button>                        
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}