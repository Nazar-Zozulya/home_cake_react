import { MainPage } from "../../pages/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { FullHeader } from "../FullHeader/FullHeader";
import { Main } from "../Main/Main";
import { Outlet } from "react-router-dom"
import "./Layout.css"
import { SmallHeader } from "../../pages/SmallHeader/SmallHeader";


interface ILayoutProps{
    header: string;
}

export function Layout(props: ILayoutProps){

    return(
        <div className="Layout">
            {
            props.header === 'full' 
            ?
            <FullHeader></FullHeader>
            :
            undefined
            }

            {
            props.header === 'small' 
            ?
            <SmallHeader></SmallHeader>
            :
            undefined
            }

            <Main>
                <Outlet/>
            </Main>
            <Footer></Footer>
        </div>
    )
}