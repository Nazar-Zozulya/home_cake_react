import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IProduct } from "../shared/types/types";
import { useCookies } from "react-cookie";
import { useProducts } from "../hooks/useProducts";


interface IProductInCart{
    id: number;
    count: number;
}

interface ICartContext{
    cartCookies: IProductInCart[];
    // products: IProduct[];
    addToCart: (id: number) => void;
    deleteFromCart: (id: number) => void;
    isInCart: (id:number) => boolean;
    getProductById: (id:number) => IProduct | undefined;
}


const initialValue: ICartContext = {
    cartCookies: [],
    isInCart: (id: number) => false,
    addToCart: (id: number) => {},
    deleteFromCart: (id: number) => {},
    getProductById: (id: number) => undefined,
};


const CartContext = createContext<ICartContext>(initialValue)

export function useCartContext(){
    return useContext(CartContext)
}

interface ICartContextPriverProps {
    children: ReactNode;  
}

// сделать обьект где ключ ето id а значение количество
// [
    // {
    //     id: 1,
    //     count: 1,
    // }
// ]
// функция add to cart принимает id и добавляет в массив состояния новый обьект с свойствами id, count = 1
// функция incerease product count принимает id ищет из массива состояния нужный обьект и меняет ему айди на +1
// {
//     1: 10
// }

export function CartContextProvider(props: ICartContextPriverProps){

    const [cartCookies, setCartCookies] = useState<IProductInCart[]>([])

    const {products, isLoading, error} = useProducts()

    // const [products, setProducts] = useState<IProduct[]>([])

    function getProductById(id: number){
        if( !products ) return 

        const result = products.find( (product) => product.id === id )

        return result
    }

    function addToCart(id: number){
        let array = [...cartCookies, {id: id, count: 1}];
        setCartCookies(array)
    }

    function deleteFromCart(id: number){
        const filterProducts = cartCookies.filter((product)=>{
            return product.id !== id
        })
        setCartCookies(filterProducts)
    }

    function isInCart(id: number){
        const result = cartCookies.some((product)=>{
            return product.id === id 
        });
        return result
    }

    useEffect(()=>{
        const cartInLocal = localStorage.getItem('cart')

        if(!cartInLocal) return

        const parsedData = JSON.parse(cartInLocal)

        setCartCookies(parsedData)
    }, [])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartCookies))
        console.log(cartCookies)
    }, [cartCookies])

    return(
        <CartContext.Provider
        value={{
            cartCookies: cartCookies,
            isInCart: isInCart,
            deleteFromCart: deleteFromCart,
            addToCart: addToCart,
            getProductById: getProductById,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}