import { Link } from "react-router-dom";
import { useProducts } from "../../../../modules/products/hooks/useProducts";
import { ProductsSlider } from "../../../../shared/ProductsSlider/ProductsSlider";
import "./Assortment.css"
import { ProductCard } from "../../../../modules/products/ui";



export function Assortment(){
    const {products, isLoading, error} = useProducts()

    return (
        <div className="Assortment">
            <p className="assortmentTitle">Наш асортимент</p>
            <div className="assortmentList">
                {
                isLoading === true ?
                (
                    <div>
                        loading
                    </div>
                ) :
                !error ?
                (   <>
                        <ProductsSlider>
                            {products?.map((product)=>{
                                return <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} composition={product.composition} weight={product.weight} kilocalories={product.kilocalories} ></ProductCard>
                            })}
                        </ProductsSlider>
                        <div className="seeAllCatalogWrapper">
                            {/* <button className="seeAllCatalogButton"> */}
                            <Link to={'catalog/'} className="seeAllCatalogButton">
                                Показати всі
                            </Link>
                            {/* </button> */}
                        </div>
                    </>
                ) :
                (<div>{error}</div>)
                }
            </div>
        </div>
    )
}