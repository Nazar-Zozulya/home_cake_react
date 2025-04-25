import { ReactNode } from "react"
import "./Main.style.css"

interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className="Main">
            {props.children}
        </div>
    )
}