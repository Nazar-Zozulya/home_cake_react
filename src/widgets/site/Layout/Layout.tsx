import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Outlet } from "react-router-dom"
import "./Layout.style.css"


interface ILayoutProps{
    bigHeader?: boolean;
}

export function Layout(props: ILayoutProps){

    return(
        <div className="Layout">      
            {
            props.bigHeader ?
            <Header.FullHeader></Header.FullHeader> :
            <Header></Header>
            }
            <Main>
                <Outlet/>
            </Main>
            <Footer></Footer>
        </div>
    )
}