import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../widgets/site/Layout/Layout";
import { MainPage } from "../pages/mainPageModule/pages/MainPage/MainPage";
import { CatalogPage, ProductPage } from "../modules/products/pages";



export function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout bigHeader={true}></Layout>}>
                    <Route path="/" element={<MainPage></MainPage>} />
                </Route>

                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/catalog" element={<CatalogPage></CatalogPage>} />
                    <Route path="/product/:id" element={<ProductPage></ProductPage>} />
                    <Route path="*" element={<div>not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}