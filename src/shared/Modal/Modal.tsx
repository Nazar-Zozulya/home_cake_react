import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css"

interface IModalProps{
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
}

export function Modal(props: IModalProps){
  
    const modalRef = useRef<HTMLDivElement | null>(null)

    function handleCoverClick(event: MouseEvent){
        console.log(modalRef)

        if(modalRef.current === event.target){
            props.onClose()
        }
    }

    useEffect(() => {


        document.addEventListener("click", handleCoverClick)

        if (props.isOpen) {
            document.body.style.overflow = "hidden"; // Отключаем скролл
        } else {
            document.body.style.overflow = "auto"; // Включаем скролл при закрытии
        }
        return () => {
            document.body.style.overflow = "auto"; // Очистка эффекта
            document.removeEventListener("click", handleCoverClick)
        };

    }, [props.isOpen]);


    return (
    createPortal(
        <div className="cover" ref={modalRef}>{props.children}</div>,
        document.body
    )
    )
}