import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { useForm } from "react-hook-form";
import "./OrderModal.css"
import { useCartContext } from "../../context/CartContext";
import { Response } from "../types/types"

interface IOrderModalProps{
    onClose:()=> void;
    isModalOpen: boolean;
    switchSuccessModal: ()=> void;
    switchErrorModal: ()=> void
}

interface ISelfOrderModalForm{
    name: string;
    surname: string;
    phone: number;
    email: string;
    deliveryMethod: string;
    adress?: string;
    data?: number;
    time?: number;
}

export function OrderModal(props: IOrderModalProps){

    const {register, handleSubmit, formState} = useForm<ISelfOrderModalForm>({
            mode: 'onSubmit'
    })

    const { totalSum, cartCookies } = useCartContext()

    async function onSubmit(data: ISelfOrderModalForm) {
        try {
            data.deliveryMethod = `${deliveryMethod}`;
    
            const response = await fetch("https://shmyk.pythonanywhere.com/send/order/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Включаем куки (если нужно)
                body: JSON.stringify({
                    userData: data,
                    totalSum: totalSum,
                    productsInCart: cartCookies,
                }),
            });
    
            const result: Response<null> = await response.json()
            
            if (result.status === 'succes'){
                props.switchSuccessModal()
            } else{
                props.switchErrorModal()
            }
            
        } catch (error) {
            console.log("Ошибка при отправке данных:", error);
        }
    }
    

    const [deliveryMethod, setDeliveryMethod] = useState<string>('Самовивіз')


    return(
        <>
        { props.isModalOpen === false ?
        undefined
        :
        <Modal isOpen={props.isModalOpen} onClose={()=>props.onClose()}>
            <div className="OrderModal">
                <div className="orderModalHeader">
                    <p>Заповніть данні для замовлення</p>
                    <button className="closeModalButton" onClick={()=>{props.onClose()}}>X</button>    
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
                    
                    <div className="orderModalDelivaryDiv">
                        <div className='radioHelpDiv' onClick={() => setDeliveryMethod('Самовивіз')}>
                            <input
                                type="radio"
                                id="pickup"
                                value="Самовивіз"
                                {...register('deliveryMethod')}
                                checked={deliveryMethod === 'Самовивіз'}
                                className="hiddenRadio"
                            />
                            <span className={deliveryMethod === 'Самовивіз' ? 'activeRadioButton' : 'radioButton'}></span>
                            <label htmlFor="pickup" className={deliveryMethod === 'Самовивіз' ? 'activeRadioButtonLabel' : 'radioButtonLabel'}>
                                Самовивіз
                            </label>
                        </div>

                        <div className='radioHelpDiv' onClick={() => setDeliveryMethod('Доставка')}>
                            <input
                                type="radio"
                                id="delivery"
                                value="Доставка"
                                {...register('deliveryMethod')}
                                checked={deliveryMethod === 'Доставка'}
                                className="hiddenRadio"
                            />
                            <span className={deliveryMethod === 'Доставка' ? 'activeRadioButton' : 'radioButton'}></span>
                            <label htmlFor="delivery" className={deliveryMethod === 'Доставка' ? 'activeRadioButtonLabel' : 'radioButtonLabel'}>
                                Доставка
                            </label>
                        </div>



                        { deliveryMethod === 'Доставка'?
                        <>
                            <label className="selfOrderModalLabel">
                                <input type="text" placeholder="Адреса" className="selfOrderInput fullInput" {...register('adress', {
                                    required: {value: true, message: 'Це поле обов\'язкове'},
                                    maxLength: {value: 1000, message: 'Ваш адрес занадто великий'},
                                    minLength: {value: 3, message: 'Ваш адрес занадто маленький'},
                                })}/>
                                <p>{formState.errors.adress?.message}</p>    
                            </label>
                            
                            <div className="selfOrderModalDataAndTimeInputsDiv">
                                <div className="selfOrderModalRadio">
                                    <label>Дата</label>
                                    <input type="date" placeholder="Дата" className="selfOrderAnotherInput" {...register('data', {
                                        required: {value: true, message: 'Це поле обов\'язкове'},
                                    })}/>
                                    <p>{formState.errors.data?.message}</p>    
                                </div>

                                <div className="selfOrderModalRadio">
                                    <label>Час</label>
                                    <input type="time" placeholder="Опишіть ваше побажання" className="selfOrderAnotherInput" {...register('time', {
                                        required: {value: true, message: 'Це поле обов\'язкове'},
                                    })}/>
                                    <p>{formState.errors.time?.message}</p>    
                                </div>
                            </div>
                        </>
                        :
                        undefined
                        }
                    </div>
                    



                    <button className="buyFromCartButton" type="submit">Замовити</button>                        
                </form>
            </div>
        </Modal>
        }
        </>
    )
}