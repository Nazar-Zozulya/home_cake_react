import { useCartContext } from "../../context/CartContext";
import { IProduct } from "../types/types";
import "./ProductCard.css"

export function ProductCard(props: IProduct){

    const { addToCart, isInCart, deleteFromCart } = useCartContext()

    const isInCartResult = isInCart(props.id)

    return(
        <div className="ProductCart">
            <img src={props.image} alt="" className="productImg" />
            <div className="productMainInfo">
                <p className="productName">{props.name}</p>
                <p className="productPrice">{props.price}</p>
            </div>
            <div className="productSecondInfo">
                <p className="productComposition">{props.composition}</p>
                <button className={ isInCartResult ? 'selectedProductInCart' : 'productAddToCart' } onClick={()=> isInCartResult ? deleteFromCart(props.id) : addToCart(props.id) }></button>       
            </div>
            <div className="productThirdInfo">
                <p>{props.weight}</p>
                <p>/</p>
                <p>{props.kilocalories}</p>
            </div>
        </div>
    )
}