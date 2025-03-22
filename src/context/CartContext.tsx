import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IProduct } from "../shared/types/types";
import { useCookies } from "react-cookie";
import { useProducts } from "../hooks/useProducts";
import { useProductById } from "../hooks/useProductById";


export interface IProductInCart{
    id: number;
    count: number;
}

interface ICartContext{
    cartCookies: IProductInCart[];
    // products: IProduct[];
    addToCart: (id: number) => void;
    deleteFromCart: (id: number) => void;
    isInCart: (id:number) => boolean;
    // getProductById: (id:number) => IProduct | undefined;
    incrementCount: (id: number) => void;
    disincrementCount: (id: number) => void;
    clearCart: () => void,
    totalSum: number
}


const initialValue: ICartContext = {
    cartCookies: [],
    isInCart: (id: number) => false,
    addToCart: (id: number) => {},
    deleteFromCart: (id: number) => {},
    // getProductById: (id: number) => undefined,
    incrementCount: (id: number) => {},
    disincrementCount: (id: number) => {},
    clearCart: () => {},
    totalSum: 0,
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

    const [cartProducts, setCartProducts] = useState<IProduct[]>([])

    const [totalSum, setTotalSum] = useState<number>(0)

    
    // const [products, setProducts] = useState<IProduct[]>([])
    
    // function getProductById(id: number){
    //     const product = 1

    //     return product
    // }

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

    function incrementCount(id: number){
        setCartCookies((prevCookies) =>
            prevCookies.map((product) =>
              product.id === id
                ? { ...product, count: product.count + 1 }
                : product
            )
          )
    }

    function disincrementCount(id: number){
        setCartCookies((prevCookies) =>
            prevCookies
            .map((product) =>
                product.id === id
                  ? { ...product, count: product.count - 1 }
                  : product
              )
            .filter((product) => product.count > 0)
        )
    }

    // function totalPriceFunc() {
    //     // const allPrices = cartCookies.map((prod)=>{
    //     //     const product = getProductById(prod.id)
    //     //     if(!product) return
    //     //     return product.price
    //     // })


    //     // const sumPrice = allPrices.reduce(
    //         // (accumulator, currentValue) => accumulator + currentValue,
    //         // totalSum,
    //     // );
    //     return 1
    // }

    function clearCart(){
        setCartCookies([])
    }

    useEffect(()=>{
        const cartInLocal = localStorage.getItem('cart')

        if(!cartInLocal) return

        const parsedData = JSON.parse(cartInLocal)

        setCartCookies(parsedData)

        // console.log(caCookies)
        
    }, [])
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartCookies))

        // totalPriceFunc()
    }, [cartCookies])

    return(
        <CartContext.Provider
        value={{
            cartCookies: cartCookies,
            isInCart: isInCart,
            deleteFromCart: deleteFromCart,
            addToCart: addToCart,
            // getProductById: getProductById,
            incrementCount: incrementCount,
            disincrementCount: disincrementCount,
            clearCart: clearCart,
            totalSum: totalSum,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}