import { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css"

interface IModalProps{
    children: ReactNode,
}

export function Modal(props: IModalProps){


    return (
        createPortal(
            <div className="cover">{props.children}</div>,
            document.body
        )
    )
}