import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IProduct } from "../shared/types/types";
import { useProductById } from "../hooks/useProductById";

export interface IProductInCart {
    id: number;
    count: number;
}

interface ICartContext {
    cartCookies: IProductInCart[];
    addToCart: (id: number) => void;
    deleteFromCart: (id: number) => void;
    isInCart: (id: number) => boolean;
    incrementCount: (id: number) => void;
    disincrementCount: (id: number) => void;
    clearCart: () => void;
    totalSum: number;
}

const initialValue: ICartContext = {
    cartCookies: [],
    isInCart: () => false,
    addToCart: () => {},
    deleteFromCart: () => {},
    incrementCount: () => {},
    disincrementCount: () => {},
    clearCart: () => {},
    totalSum: 0,
};

const CartContext = createContext<ICartContext>(initialValue);

export function useCartContext(): ICartContext {
    return useContext(CartContext);
}

interface ICartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
    const [cartCookies, setCartCookies] = useState<IProductInCart[]>([]);
    const [totalSum, setTotalSum] = useState<number>(0);

    function addToCart(id: number): void {
        let array = [...cartCookies, {id: id, count: 1}];
        setCartCookies(array)
    }

    function deleteFromCart(id: number): void {
        const filterProducts = cartCookies.filter((product)=>{
            return product.id !== id
        })
        setCartCookies(filterProducts)
    }

    function isInCart(id: number): boolean {
        const result = cartCookies.some((product)=>{
            return product.id === id 
        });
        return result
    }

    function incrementCount(id: number): void {
        setCartCookies((prevCookies) =>
            prevCookies.map((product) =>
                product.id === id
                ? { ...product, count: product.count + 1 }
                : product
            )
        )
    }

    function disincrementCount(id: number): void {
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

    function clearCart(): void {
        setCartCookies([]);
    }

    useEffect(()=>{
        const cartInLocal = localStorage.getItem('cart')

        if(!cartInLocal) return

        const parsedData = JSON.parse(cartInLocal)

        setCartCookies(parsedData)
    }, [])

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartCookies))
        console.log(cartCookies)
        async function calculateTotal() {
            let sum = 0;
            const productPromises = cartCookies.map((item) =>
                fetch(`https://shmyk.pythonanywhere.com/api/product/${item.id}`).then((res) => res.json())
            );
      
            try {
                const products = await Promise.all(productPromises);
          
                sum = cartCookies.reduce((acc, item) => {
                    const product = products.find((p) => p.id === item.id);
                    return product ? acc + product.price * item.count : acc;
                }, 0);
          
                setTotalSum(sum);
            } catch (error) {
                console.error("Ошибка загрузки продуктов:", error);
            }
        }
    
        if (cartCookies.length > 0) {
            calculateTotal();
        } else {
            setTotalSum(0);
        }

    }, [cartCookies]);
    
    return (
        <CartContext.Provider
        value={{
            cartCookies,
            isInCart,
            deleteFromCart,
            addToCart,
            incrementCount,
            disincrementCount,
            clearCart,
            totalSum,
        }}
        >
        {children}
        </CartContext.Provider>
    );
}