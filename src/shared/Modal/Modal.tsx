import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css"

interface IModalProps{
    children: ReactNode,
    isOpen: boolean,
}

export function Modal(props: IModalProps){

    useEffect(() => {
        if (props.isOpen) {
          document.body.style.overflow = "hidden"; // Отключаем скролл
        } else {
          document.body.style.overflow = "auto"; // Включаем скролл при закрытии
        }
        return () => {
          document.body.style.overflow = "auto"; // Очистка эффекта
        };
    }, [props.isOpen]);


    return (
        createPortal(
            <div className="cover">{props.children}</div>,
            document.body
        )
    )
}