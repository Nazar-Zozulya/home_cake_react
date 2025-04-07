import { CartContextProvider } from "../context/CartContext";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { Layout } from "./Layout/Layout";
import "./fonts/fonts.css"
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCard } from "./ProductCard/ProductCard";
import { ProductPage } from "../pages/ProductPage/ProductPage";

export function App(){

    return(
        <CookiesProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout header="full"></Layout>}>
                            <Route path="/" element={<MainPage></MainPage>} />
                        </Route>

                        <Route path="/" element={<Layout header="small"></Layout>}>
                            <Route path="/catalog" element={<CatalogPage></CatalogPage>} />
                            <Route path="/product/:id" element={<ProductPage></ProductPage>} />
                            <Route path="*" element={<div>not found</div>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </CookiesProvider>
    )
}