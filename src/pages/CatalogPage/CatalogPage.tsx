import { useProducts } from "../../hooks/useProducts"
import { ProductCard } from "../../shared/ProductCard/ProductCard"
import "./CatalogPage.css"






export function CatalogPage(){
    const { products, isLoading, error } = useProducts()

    return (
        <div className="CatalogPage">
            <p className="catalogTitle">Наш асортимент</p>
            <div className="allProductsListWrapper">
                <div className="allProductsList">
                    {products?.map((product)=>{
                        return <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} composition={product.composition} weight={product.weight} kilocalories={product.kilocalories} ></ProductCard>
                    })}
                </div>
            </div>
        </div>
    )
}