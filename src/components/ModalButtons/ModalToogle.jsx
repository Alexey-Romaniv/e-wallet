import {ToogleLabel, ToogleWrapper, ModalToogleBtn} from "./ModalToogleBtn.styles";

export const ModalToogle = ({type, setType}) => {
    return (<ToogleWrapper type={type.toString()}>
        <ToogleLabel htmlFor="modalType">Income</ToogleLabel>
        <ModalToogleBtn id="modalType" type="checkbox" checked={type} onChange={() => setType(!type)}/>
        <ToogleLabel htmlFor="modalType">Expense</ToogleLabel>
    </ToogleWrapper>)
}
