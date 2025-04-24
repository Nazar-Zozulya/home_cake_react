import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useProducts } from "../modules/products/hooks/useProducts";


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
    const { products, isLoading, error, refetch } = useProducts()

    // if (!products) return 

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

    async function calculateTotal() {
        let sum = 0;
        
        // console.log(products)

        try{

            if(!products) return

            sum = cartCookies.reduce((acc, item) => {
                const product = products.find((p) => p.id === item.id);
                return product ? acc + product.price * item.count : acc;
            }, 0);

            // console.log(sum)
        
            setTotalSum(sum);
        } catch{
            console.log('total sum error')
        }


        // if (!products) return      

        // // console.log(cartCookies)

        // sum =  cartCookies.reduce((acc, item) => {
        //     const product = products.find((p) => p.id === item.id);
        //     return product ? acc + product.price * item.count : acc;
        // }, 0);

        // // console.log(sum)
    
        // setTotalSum(sum);
    }

    useEffect(()=>{

        const cartInLocal = localStorage.getItem('cart')

        if(!cartInLocal) return
        
        const parsedData = JSON.parse(cartInLocal)
        
        setCartCookies(parsedData)

    }, [])

    
    useEffect(() => {
        
        localStorage.setItem('cart', JSON.stringify(cartCookies))

    }, [cartCookies]);

    useEffect(() => {

        if (products) {
            calculateTotal();
        }
        
    }, [cartCookies, products]);
    

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