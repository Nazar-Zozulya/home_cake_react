import "./Footer.css"



export function Footer(){


    return(
        <div className="Footer">
            <div className="footerLogo">
                <img src="/img/logo.png" alt="" />
                <p>Home Cake</p>
            </div>

            <div className="navFootersList">
                <div className="navFooter">
                    <div className="navFooterCircle"></div>
                    <button className="navFooterText">Головна</button>
                </div>
                <div className="navFooter">
                    <div className="navFooterCircle"></div>
                    <button className="navFooterText">Новинки</button>
                </div>
                <div className="navFooter">
                    <div className="navFooterCircle"></div>
                    <button className="navFooterText">Про нас</button>
                </div>
                <div className="navFooter">
                    <div className="navFooterCircle"></div>
                    <button className="navFooterText">Асортимент</button>
                </div>
            </div>

            <div className="socialMediaFooterDiv">
                <p className="socialMediaFooterTitle">Наші соцмережі</p>
                <div className="linksDiv">
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=wpHU1njD1IE&ab_channel=%D0%9F%D0%BE%D0%B7%D0%B7%D0%B8"></a>
                    </div>
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=wpHU1njD1IE&ab_channel=%D0%9F%D0%BE%D0%B7%D0%B7%D0%B8"></a>
                    </div>
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=wpHU1njD1IE&ab_channel=%D0%9F%D0%BE%D0%B7%D0%B7%D0%B8"></a>
                    </div>
                </div>
            </div>

            <div className="contactsFooter">
                <p className="contactsFooterTitle">Наші контакти</p>
                <div className="contactFooterDiv">
                    <img src="" alt="" />
                    <p>+380 999999999</p>
                </div>
                <div className="contactFooterDiv">
                    <img src="" alt="" />
                    <p>home_cake@gmail.con</p>
                </div>
            </div>
        </div>
    )
}