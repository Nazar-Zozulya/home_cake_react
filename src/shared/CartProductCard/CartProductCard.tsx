import { IProduct } from "../types/types";
import "./CartProductCard.css"

interface ICartProductCardProps{
    product: IProduct;
    count: number;
}



export function CartProductCard(props: ICartProductCardProps){
    return (
        <div className="CartProductCard">
            <img src={`http://localhost:8000${props.product.image}`} alt="" className="cartProductImg" />
            <div className="cartProductOthers">
                <div className="cartProductInfo">
                    <p className="cartProductName">{props.product.name}</p>
                    <p className="cartProductComposition">{props.product.composition}</p>
                </div>
                <div className="cartProductLogic">
                    <div className="cartProductCountDiv">
                        <button>-</button>
                        <div className="productCount">
                            <p>{props.count}</p>
                        </div>
                        <button>+</button>
                    </div>
                    <p className="cartProductPrice">{props.product.price}</p>
                </div>
            </div>
        </div>
    )
}