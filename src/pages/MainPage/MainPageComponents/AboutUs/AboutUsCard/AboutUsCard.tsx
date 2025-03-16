import { IAboutUsCard } from "../../../../../shared/types/types";
import "./AboutUsCard.css"




export function AboutUsCard(props: IAboutUsCard){


    return(
        <div className="AboutUsCard">
            <div className="aboutUsCardInfo">
                <p className="aboutUsCardTitle">{props.title}</p>
                <p className="aboutUsCardDescription">{props.description}</p>
            </div>
            <img src={props.image} alt="" className="aboutUsCardImg" />
        </div>
    )
}