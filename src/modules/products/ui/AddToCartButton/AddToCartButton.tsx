import { useCartContext } from "../../../../context/CartContext"
import { ReactComponent as CartIcon } from '../../../../assets/cart-icon.svg'; 
import "./AddToCartButton.css"



export function AddToCartButton(props: {id:number}){

    const { addToCart, isInCart, deleteFromCart } = useCartContext()
    
    const isInCartResult = isInCart(props.id)


    return (
        <>
            <button className={ isInCartResult ? 'selectedAddToCartButton' : 'addToCartButton' } onClick={()=> isInCartResult ? deleteFromCart(props.id) : addToCart(props.id) }>
                <CartIcon />
            </button>
        </>
    )
}