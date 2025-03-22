import { IProductInCart, useCartContext } from "../../context/CartContext";
import { useProductById } from "../../hooks/useProductById";
import { IProduct } from "../types/types";
import "./CartProductCard.css"



export function CartProductCard(props: IProductInCart){
    const { incrementCount, disincrementCount } = useCartContext()

    const { product, isLoading, error } = useProductById(props.id)

    if(!product) return 

    return (
        <div className="CartProductCard">
            <img src={`http://localhost:8000${product.image}`} alt="" className="cartProductImg" />
            <div className="cartProductOthers">
                <div className="cartProductInfo">
                    <p className="cartProductName">{product.name}</p>
                    <p className="cartProductComposition">{product.composition}</p>
                </div>
                <div className="cartProductLogic">
                    <div className="cartProductCountDiv">
                        <button onClick={()=>disincrementCount(product.id)}>-</button>
                        <div className="productCount">
                            <p>{props.count}</p>
                        </div>
                        <button onClick={()=> incrementCount(product.id)}>+</button>
                    </div>
                    <p className="cartProductPrice">{product.price}</p>
                </div>
            </div>
        </div>
    )
}