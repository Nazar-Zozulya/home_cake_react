import { useProducts } from "../../../../hooks/useProducts";
import { ProductCard } from "../../../../shared/ProductCard/ProductCard";

import "./NewProducts.css"
import { ProductsSlider } from "../../../../shared/ProductsSlider/ProductsSlider";
// import { Vortex } from 'react-loader-spinner';


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
                        {products?.map((product)=>{
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