import { useModalStore } from "../..";
import { Modal } from "../Modal/Modal";
import "./SuccessModal.style.css"


export function SuccessModal(){
    const { activeModal, closeModal, switchModal } = useModalStore();

    // Проверка, если активен модал "cart"
    if (activeModal !== 'verify') return null;


    return(
        <Modal isOpen={true} onClose={()=>closeModal()}>
            <div className="VerifyEmailModal">
                <div className="verifyEmailModalHeader">
                    <p>Підтвердіть пошту</p>
                    <button className="closeModalButton" onClick={()=>{closeModal()}}>X</button>
                </div>

                <div className="verifyEmailModalTextDiv">
                    <p className="verifyEmailModalTextMain">Ваше замовлення у обробці. Підтвердіть свою пошту за посиланням.</p>
                    <p className="verifyEmailModalTextSecond">Це потрібно для уникнення ботів</p>
                </div>

                <button className="buyFromCartButton verifyEmailButton" type="submit">Підтвердити пошту</button>                        
            </div>
        </Modal>
    )
}