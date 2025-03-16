import { IProduct } from "../types/types";
import "./ProductCard.css"

export function ProductCard(props: IProduct){

    return(
        <div className="ProductCart">
            <img src={props.image} alt="" className="productImg" />
            <div className="productMainInfo">
                <p className="productName">{props.name}</p>
                <p className="productPrice">{props.price}</p>
            </div>
            <div className="productSecondInfo">
                <p className="productComposition">{props.composition}</p>
                <button className="productAddToCart"></button>       
            </div>
            <div className="productThirdInfo">
                <p>{props.weight}</p>
                <p>/</p>
                <p>{props.kilocalories}</p>
            </div>
        </div>
    )
}