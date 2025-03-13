import { MainPage } from "../../pages/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import "./Layout.css"




export function Layout(){

    return(
        <div className="Layout">
            <Header></Header>
            <Main>
                <MainPage></MainPage>
            </Main>
            <Footer></Footer>
        </div>
    )
}