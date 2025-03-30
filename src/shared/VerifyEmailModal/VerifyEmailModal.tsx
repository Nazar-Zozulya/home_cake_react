import { Modal } from "../Modal/Modal";
import "./VerifyEmailModal.css"


interface iVerifyEmailModalProps{
    onClose: ()=> void;
    isModalOpen: boolean;
}


export function VerifyEmailModal(props: iVerifyEmailModalProps){


    return(
        <>
        { props.isModalOpen === false ?
        undefined 
        :
        <Modal isOpen={props.isModalOpen} onClose={()=>props.onClose}>
            <div className="VerifyEmailModal">
                <div className="verifyEmailModalHeader">
                    <p>Підтвердіть пошту</p>
                    <button className="closeModalButton" onClick={()=>{props.onClose()}}>X</button>
                </div>

                <div className="verifyEmailModalTextDiv">
                    <p className="verifyEmailModalTextMain">Ваше замовлення у обробці. Підтвердіть свою пошту за посиланням.</p>
                    <p className="verifyEmailModalTextSecond">Це потрібно для уникнення ботів</p>
                </div>

                <button className="buyFromCartButton" type="submit">Підтвердити пошту</button>                        
            </div>
        </Modal>
        }
        </>
    )
}