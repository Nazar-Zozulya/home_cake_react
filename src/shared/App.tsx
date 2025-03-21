import { CartContextProvider } from "../context/CartContext";
import { Layout } from "./Layout/Layout";
import "./fonts/fonts.css"
import { CookiesProvider } from "react-cookie";

export function App(){

    return(
        <CookiesProvider>
            <CartContextProvider>

                <div>
                    <Layout></Layout>
                </div>
            </CartContextProvider>
        </CookiesProvider>
    )
}