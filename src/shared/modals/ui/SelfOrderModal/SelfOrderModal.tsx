import { Modal } from "../Modal/Modal";
import { useForm } from "react-hook-form"
import "./SelfOrderModal.style.css"
import { useEffect, useState } from "react";
import { Response } from "../../../types/types"
import { useModalStore } from "../../modalsManager";
import { LinksDiv } from "../../../LinksDiv/LinksDiv";


interface ISelfOrderModalForm{
    name: string;
    surname: string;
    phone: number;
    email: string;
    describeOrder: string;
}

export function SelfOrderModal(){
    const {register, handleSubmit, formState} = useForm<ISelfOrderModalForm>({
        mode: 'onSubmit'
    })

    const { activeModal, closeModal, switchModal } = useModalStore();

    async function onSubmit(data: ISelfOrderModalForm) {
        try {
            const response = await fetch("https://shmyk.pythonanywhere.com/send/self-order/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Включаем куки (если нужно)
                body: JSON.stringify(data),
            });

            const result: Response<null> = await response.json()

            if (result.status === 'succes'){
                switchModal('verify')
            } else{
                switchModal('error')
            }




            // props.switchSuccessModal();
        } catch (error) {
            console.log(error);
        }
    }

    if (activeModal !== 'selfOrder') return null;
      
      


    return(

        <Modal isOpen={true} onClose={()=>closeModal()}>
            <div className="SelfOrderModal">
                <div className="selfOrderModalHeader">
                    <p>Подати заявку?</p>
                    <button className="closeModalButton" onClick={()=>{closeModal()}}>X</button>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="selfOrderFormDiv">
                    <div className="selfOrderFormHelpDiv">
                        <label className="selfOrderModalLabel">
                            <input type="text" placeholder="Ім'я" className="selfOrderInput" {...register('name', {
                                required: {value: true, message: 'Це поле обов\'язкове'},
                                maxLength: {value: 100, message: 'Ваше ім\'я занадто велике'},
                                minLength: {value: 3, message: 'Ваше ім\'я занадто маленьке'},
                            })}/>
                            <p>{formState.errors.name?.message}</p>
                        </label>
                        
                        <label className="selfOrderModalLabel">
                            <input type="text" placeholder="Прізвище" className="selfOrderInput" {...register('surname', {
                                required: {value: true, message: 'Це поле обов\'язкове'},
                                maxLength: {value: 100, message: 'Ваше Прізвище занадто велике'},
                                minLength: {value: 3, message: 'Ваше Прізвище занадто маленьке'},
                            })}/>
                            <p>{formState.errors.surname?.message}</p>
                        </label>
                    </div>
                    
                    <div className="selfOrderFormHelpDiv">
                        <label className="selfOrderModalLabel">
                            <input type="text" placeholder="Телефон" className="selfOrderInput" {...register('phone', {
                                required: {value: true, message: 'Це поле обов\'язкове'},
                                maxLength: {value: 22, message: 'Ваш номер телефону занадто великий'},
                                minLength: {value: 3, message: 'Ваш номер телефону занадто маленький'},
                            })}/>
                            <p>{formState.errors.name?.message}</p>
                        </label>
                        
                        <label className="selfOrderModalLabel">
                            <input type="email" placeholder="Пошта" className="selfOrderInput" {...register('email', {
                                required: {value: true, message: 'Це поле обов\'язкове'},
                                maxLength: {value: 50, message: 'Ваша пошта занадто велика'},
                                minLength: {value: 3, message: 'Ваше пошта занадто маленька'},
                            })}/>
                            <p>{formState.errors.surname?.message}</p>
                        </label>
                    </div>
                    <label className="selfOrderModalLabel">
                        <input type="textarea" placeholder="Опишіть ваше побажання" className="selfOrderInput fullInput" {...register('describeOrder', {
                            required: {value: true, message: 'Це поле обов\'язкове'},
                            maxLength: {value: 1000, message: 'Ваш опис заказу занадто великий'},
                            minLength: {value: 3, message: 'Ваш опис заказу занадто маленький'},
                        })}/>
                        <p>{formState.errors.surname?.message}</p>
                    </label>

                    <button className="buyFromCartButton" type="submit">Замовити</button>                        
                </form>
                <div className="selfOrderModalHeader">
                    <p className="selfOrderModalHeaderLinksTitle">Або напишіть нам у соц мережах:</p>
                </div>
                <div className="selfOrderModalLinksDiv">
                    <LinksDiv></LinksDiv>
                </div>
            </div>
        </Modal>

    )
}