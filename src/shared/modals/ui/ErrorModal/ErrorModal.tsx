import { useModalStore } from "../..";
import { Modal } from "../Modal";
import './ErrorModal.style.css'




export function ErrorModal(){
    const { activeModal, closeModal } = useModalStore();

    if (activeModal !== 'error') return null;


    return(
        <Modal isOpen={true} onClose={()=>closeModal}>
            <div className="ErrorModal">
                <div className="errorModalHeader">
                    <p>Ошибка</p>
                    <button className="closeModalButton" onClick={()=>{closeModal()}}>X</button>
                </div>
                <div className="errorModalContent">
                    <p className="errorModalText">Ошибка</p>
                </div>
            </div>
        </Modal>
    )
}