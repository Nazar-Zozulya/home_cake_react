import { useEffect, useState } from "react";
import { IProduct } from "../shared/types/types";

export function useProductById(id: number) {
    const [product, setProduct] = useState<IProduct | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        async function getProduct() {
            if (!id) return; // Проверяем, что id существует
            try {
                setIsLoading(true);
                const response = await fetch(`https://shmyk.pythonanywhere.com/api/product/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                
                const result = await response.json();
                console.log("Fetched product:", result);
                
                // Если API возвращает объект с продуктом, подстройся под это
                setProduct(result); // Или result.data, если продукт внутри data
            } catch (error) {
                const err = error instanceof Error ? error.message : "Unknown error";
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }
        getProduct();
    }, [id]);

    return { product, isLoading, error };
}