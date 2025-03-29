import { useEffect, useState } from "react"
import { IProduct } from "../shared/types/types"





export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(()=>{
        async function getProducts() {
            try {
                setIsLoading(true)
                const response = await fetch('https://shmyk.pythonanywhere.com/api/product/all',{
                    method: 'GET',
                    credentials: 'include', // Важная часть!
                  })
                const result = await response.json()
                setProducts(result)
            }
            catch (error) {
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getProducts()
    }, [])

    return {products: products, isLoading: isLoading, error: error}
}