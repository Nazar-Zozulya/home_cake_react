import { LinksDiv } from "../LinksDiv/LinksDiv";
import "./Footer.css"
import { Link } from "react-scroll";


export function Footer(){


    return(
        <div className="Footer">

            <div className="footerHelpDiv">
                <div className="footerLogo">
                    <img src="/img/logo.png" alt="" />
                    <p>Home Cake</p>
                </div>

                <div className="navFootersList">
                    <div className="navFooter">
                        <div className="navFooterCircle"></div>
                        <Link to="Header" smooth={true}>
                            <button className="navFooterText">Головна</button>
                        </Link>
                    </div>
                    <div className="navFooter">
                        <div className="navFooterCircle"></div>
                        <Link to="NewProducts" smooth={true}>
                            <button className="navFooterText">Новинки</button>
                        </Link>
                    </div>
                    <div className="navFooter">
                        <div className="navFooterCircle"></div>
                        <Link to="AboutUs" smooth={true}>
                            <button className="navFooterText">Про нас</button>
                        </Link>
                    </div>
                    <div className="navFooter">
                        <div className="navFooterCircle"></div>
                        <Link to="Assortment" smooth={true}>
                            <button className="navFooterText">Асортимент</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footerHelpDiv">
                <div className="socialMediaFooterDiv">
                    <p className="socialMediaFooterTitle">Наші соцмережі</p>
                    <LinksDiv></LinksDiv>
                </div>

                <div className="contactsFooter">
                    <p className="contactsFooterTitle">Наші контакти</p>
                    <div className="contactFooterDiv">
                        <img src="./img/telephone.png" alt="" />
                        <p>+380 999999999</p>
                    </div>
                    <div className="contactFooterDiv">
                        <img src="./img/mail.png" alt="" />
                        <p>home_cake@gmail.con</p>
                    </div>
                </div>
            </div>
        </div>
    )
}