import { useParams } from "react-router-dom"
import { useProductById } from "../../hooks/useProductById"
import { useCartContext } from "../../../../context/CartContext"
import "./ProductPage.css"
import { AddToCartButton } from "../../ui/AddToCartButton/AddToCartButton"




export function ProductPage(){
    const params = useParams()


    const { addToCart, isInCart, deleteFromCart } = useCartContext()
    
    const isInCartResult = isInCart(Number(params.id))


    const { product, isLoading, error } = useProductById(Number(params.id))

    if (isLoading) {
        return <div>Loading...</div>; // Можно вернуть индикатор загрузки
    }

    if (error) {
        return <div>Error loading product</div>; // Обработка ошибки
    }

    if (!product) {
        return null; // Возвращаем null, если нет данных
    }

    return (
        <div className="ProductPage">
            <div className="productPageDiv">
                <p className="productPageName">{product.name}</p>
                <div className="productPageInfo">
                    {/* <div className="productPageAllImages"> */}
                    <img src={product.image} alt="" className="productPageImg" />
                        {/* <div className="productPageOtherImages">
                            <img src={product.image} alt="" className="productPageSmallImage" />
                            <img src={product.image} alt="" className="productPageSmallImage" />
                            <img src={product.image} alt="" className="productPageSmallImage" />
                            <img src={product.image} alt="" className="productPageSmallImage" />
                        </div> */}
                    {/* </div> */}
                    <div className="productPageAllTextInfo">
                        <div className="productPageFirstTextInfo">
                            <div className="productPageFirstTextInfoTitle">
                                <p className="productPageTitleInfo">ціна</p>
                                <p className="productPageTitleInfo">вага</p>
                                <p className="productPageTitleInfo">кілокалорії</p>
                            </div>

                            <div className="productPageFirstTextInfoValues">
                                <p className="productPageValueInfo">{product.price}</p>
                                <p className="productPageValueInfo">{product.weight}</p>
                                <p className="productPageValueInfo">{product.kilocalories}</p>
                            </div>
                        </div>


                        <div className="productPageSecondTextInfo">
                            <div className="productPageSecondTextInfoHelp">
                                <p className="productPageCompositionTitle">Склад</p>
                                <p className="productPageCompostion">{product.composition}</p>

                            </div>
                            <AddToCartButton id={product.id} />     
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}