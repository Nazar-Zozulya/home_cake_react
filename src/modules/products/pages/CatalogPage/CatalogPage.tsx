import { useEffect } from "react";
import { useProducts } from "../../hooks";
import { ProductCard } from "../../ui";
import './CatalogPage.style.css'

export function CatalogPage() {
    const { products, isLoading, error } = useProducts();

    if (isLoading) {
        return <div>Загрузка...</div>;  // Пока идет загрузка
    }

    if (error) {
        return <div>Ошибка загрузки: {error}</div>;  // Если произошла ошибка
    }

    if (!products || products.length === 0) {
        return <div>Продукты не найдены.</div>;  // Если нет продуктов
    }

    return (
        <div className="CatalogPage">
            <p className="catalogTitle">Наш ассортимент</p>
            <div className="allProductsListWrapper">
                <div className="allProductsList">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            id={product.id} 
                            image={product.image} 
                            name={product.name} 
                            price={product.price} 
                            composition={product.composition} 
                            weight={product.weight} 
                            kilocalories={product.kilocalories} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
