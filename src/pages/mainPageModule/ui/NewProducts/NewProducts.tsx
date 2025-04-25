import { useProducts } from "../../../../modules/products/hooks/useProducts";
import { ProductsSlider } from "../../../../shared/ProductsSlider/ProductsSlider";
import { ProductCard } from "../../../../modules/products/ui";
import "./NewProducts.style.css"


export function NewProducts(){
    const {products, isLoading, error} = useProducts()

    return(
        <div className="NewProducts">
            <p className="newTitle">Наші новинки</p>
            <div className="productsList">
                {
                isLoading === true ?
                (
                    <div>
                        loading
                    </div>
                ) :
                !error ?
                (      
                    <ProductsSlider>
                        {products?.slice(-3).map((product)=>{
                            return <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} composition={product.composition} weight={product.weight} kilocalories={product.kilocalories} ></ProductCard>
                        })}
                    </ProductsSlider>
                ) :
                (<div>{error}</div>)
                }
            </div>
        </div>
    )
}