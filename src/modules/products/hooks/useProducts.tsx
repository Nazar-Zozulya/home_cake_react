import { useEffect, useState } from "react"
import { IProduct } from "../types"





export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    async function getProducts() {
        try {
            setIsLoading(true)
            const response = await fetch('https://shmyk.pythonanywhere.com/api/product/all',{
                method: 'GET',
                credentials: 'include', // Важная часть!
              })
            const result = await response.json()
            
            if (result.status === 'success') {
                setProducts(result.data)
            } else{
                setError(result.message)
            }


        }
        catch (error) {
            const err = error instanceof Error ? error.message : undefined
            setError(`${err}`)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    }, [])

    return {products, isLoading, error, refetch: getProducts}
}