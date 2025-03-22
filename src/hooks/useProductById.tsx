import { useEffect, useState } from "react"
import { IProduct } from "../shared/types/types"




export function useProductById(id: number) {
    const [product, setProduct] = useState<IProduct>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getProduct() {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/product/${id}`)
                const result = await response.json()
                if (result.status === 'success') {
                    setProduct(result.data)
                } else {
                    setError(result.message)
                }
            }
            catch (error) {
                // instanceof
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getProduct()
    }, [id])

    return {product: product, isLoading: isLoading, error: error}
}