import { CookiesProvider } from "react-cookie";
import { CartContextProvider } from "../context/CartContext";
import { ReactNode } from "react";




export function Providers({children}: {children: ReactNode}){

    return(
        <CookiesProvider>
            <CartContextProvider>
                {children}
            </CartContextProvider>
        </CookiesProvider>
    )
}