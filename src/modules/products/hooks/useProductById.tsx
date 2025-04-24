import { useEffect, useState } from "react";
import { IProduct } from "../types";

export function useProductById(id: number) {
    const [product, setProduct] = useState<IProduct | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Вынесли функцию
    async function getProductById() {
        if (!id) return;
        try {
            setIsLoading(true);
            const response = await fetch(`https://shmyk.pythonanywhere.com/api/product/${id}`);
            if (!response.ok) throw new Error("Failed to fetch product");
            
            const result = await response.json();

            if (result.status === 'success') {
                setProduct(result)
            } else{
                setError(result.message)
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProductById(); // Вызываем внутри useEffect
    }, [id]);

    return { product, isLoading, error, refetch: getProductById }; // Можно вернуть refetch для ручного обновления
}
