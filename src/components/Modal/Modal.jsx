import {CloseButton, ModalContent, ModalTitle, ModalWrapper} from './Modal.styles.jsx'
import {useState} from "react";
import {ModalToogle} from "../ModalButtons/ModalToogle";
import {ExpenseForm, IncomeForm} from "../ModalForms/ModalForms";

export const Modal = ({toggleModal}) => {
    const [type, setType] = useState(true); // тип операции


    return (
        <>
            <ModalWrapper>
                <ModalContent>
                    <CloseButton onClick={toggleModal}>&times;</CloseButton>
                    <ModalTitle>Add transaction</ModalTitle>
                    <ModalToogle type={type} setType={setType}/>
                    {type ? <IncomeForm toogleModal={toggleModal}/> : <ExpenseForm toogleModal={toggleModal}/>}
                </ModalContent>
            </ModalWrapper>
        </>
    );
}