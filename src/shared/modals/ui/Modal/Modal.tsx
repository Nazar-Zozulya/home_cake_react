import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.style.css";

interface IModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export function Modal(props: IModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    function handleCoverClick(event: MouseEvent) {
        if (modalRef.current === event.target) {
            props.onClose();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleCoverClick);

        if (props.isOpen) {
            document.body.style.overflow = "hidden"; // Отключаем скролл
        } else {
            document.body.style.overflow = "auto"; // Включаем скролл при закрытии
        }
        return () => {
            document.body.style.overflow = "auto"; // Очистка эффекта
            document.removeEventListener("click", handleCoverClick);
        };
    }, [props.isOpen]);

    if (!props.isOpen) return null;

    return createPortal(
        <div className="modalOverlay" ref={modalRef}>
            {props.children}
        </div>,
        document.body
    );
}
