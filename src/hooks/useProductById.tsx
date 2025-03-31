import { useEffect, useState } from "react";
import { IProduct } from "../shared/types/types";

export function useProductById(id: number) {
    const [product, setProduct] = useState<IProduct | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Вынесли функцию
    async function fetchProduct() {
        if (!id) return;
        try {
            setIsLoading(true);
            const response = await fetch(`https://shmyk.pythonanywhere.com/api/product/${id}`);
            if (!response.ok) throw new Error("Failed to fetch product");
            
            const data = await response.json();
            setProduct(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct(); // Вызываем внутри useEffect
    }, [id]);

    return { product, isLoading, error, refetch: fetchProduct }; // Можно вернуть refetch для ручного обновления
}
