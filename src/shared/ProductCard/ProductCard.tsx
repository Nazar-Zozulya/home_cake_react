import { useCartContext } from "../../context/CartContext";
import { IProduct } from "../types/types";
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg'; 
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";


export function ProductCard(props: IProduct){

    return(
        <div className="ProductCart">
            <Link to={`/product/${props.id}`} className="productImgLink">
                <img src={props.image} alt="" className="productImg" />
            </Link>
            <div className="productMainInfo">
                <p className="productName">{props.name}</p>
                <p className="productPrice">{props.price}</p>
            </div>
            <div className="productSecondInfo">
                <p className="productComposition">{props.composition}</p>
                <AddToCartButton id={props.id}/>
            </div>
            <div className="productThirdInfo">
                <p>{props.weight}</p>
                <p>/</p>
                <p>{props.kilocalories}</p>
            </div>
        </div>
    )
}