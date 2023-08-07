import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addTransaction} from "../../redux/transactions/transactionsOperations";
import {ModalComment, ModalDate, ModalForm, ModalInput, SelectInput} from "./ModalFoms.styles";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {FormError, InputWrapper} from "../CommonComponents/authForm.styles";
import Select from "react-select";

import TextField from "@mui/material/TextField";
import {DesktopModalFlex, ModalButtonsWrapper} from "../Modal/Modal.styles";

const incomeSchema = Yup.object().shape({
    sum: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().max(25).notRequired(),
});

const expenseSchema = Yup.object().shape({
    sum: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().required(),
    category: Yup.string().max(25).notRequired('Required'),
});

export const IncomeForm = ({toogleModal}) => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{sum: '', date: new Date(), comment: '', type: "+"}}
            validationSchema={incomeSchema}
            onSubmit={(values) => {
                console.log(values.comment);
                console.log(values)
                dispatch(addTransaction(values))
                toogleModal();
            }}
        >
            {({handleChange, values, setFieldValue}) => (
                <ModalForm>
                    <DesktopModalFlex>
                        <InputWrapper>
                            <ModalInput type="number" name="sum" placeholder="0.00"/>
                            <FormError name="sum" component="div"/>
                        </InputWrapper>
                        <InputWrapper>
                            <ModalDate
                                name="date"
                                value={values.date}
                                onChange={(date) => setFieldValue("date", date)}
                                textField={(params) => <TextField {...params} />}
                            />
                            <FormError name="date" component="div"/>
                        </InputWrapper>
                    </DesktopModalFlex>
                    <InputWrapper>
                        <ModalComment>
                            <ModalInput as="textarea" type="text" name="comment" onChange={handleChange}
                                        placeholder="Comment"/>
                        </ModalComment>
                        <FormError name="comment" component="div"/>
                    </InputWrapper>
                    <ModalButtonsWrapper>
                        <MainBtn type="submit">
                            Add
                        </MainBtn>
                        <SecondBtn type="button" onClick={() => toogleModal()}>Cancel</SecondBtn>
                    </ModalButtonsWrapper>
                </ModalForm>
            )}
        </Formik>
    );
};

export const ExpenseForm = ({toggleModal}) => {

    const options = [
        {value: "main", label: "Main"},
        {value: "food", label: "Food"},
        {value: "auto", label: "Auto"},
        {value: "development", label: "Development"},
        {value: "children", label: "Children"},
        {value: "house", label: "House"},
        {value: "education", label: "Education"},
        {value: "reset", label: "Reset"},
    ]

    const dispatch = useDispatch();
    // const [selectedValue, setSelectedValue] = useState("");
    return (
        <Formik
            initialValues={{category: ' ', sum: '', date: new Date(), comment: '', type: "-"}}
            validationSchema={expenseSchema}
            onSubmit={(values) => {
                console.log(values)
                dispatch(addTransaction(values));
                toggleModal();
            }}
        >
            {({handleChange, values, setFieldValue}) => (
                <ModalForm>
                    <InputWrapper>
                        <SelectInput
                            classNamePrefix="Select"
                            name="category"
                            as={Select}
                            options={options}
                            placeholder="Select a category"
                            onChange={(selectedOption) => {
                                setFieldValue("category", selectedOption.value);
                            }
                            }
                        />
                        <FormError name="category" component="div"/>
                    </InputWrapper>
                    <DesktopModalFlex>
                        <InputWrapper>
                            <ModalInput type="number" name="sum" placeholder="0.00"/>
                            <FormError name="sum" component="div"/>
                        </InputWrapper>
                        <InputWrapper>
                            <ModalDate
                                name="date"
                                value={values.date}
                                onChange={(date) => setFieldValue("date", date)}
                                textField={(params) => <TextField {...params} />}
                            />
                            <FormError name="date" component="div"/>
                        </InputWrapper>
                    </DesktopModalFlex>
                    <InputWrapper>
                        <ModalComment>
                            <ModalInput as="textarea" type="text" name="comment" onChange={handleChange}
                                        placeholder="Comment"/>
                        </ModalComment>
                        <FormError name="comment" component="div"/>
                    </InputWrapper>
                    <ModalButtonsWrapper>
                        <MainBtn type="submit">
                            Add
                        </MainBtn>
                        <SecondBtn type="button" onClick={() => toggleModal()}>Cancel</SecondBtn>
                    </ModalButtonsWrapper>
                </ModalForm>
            )}
        </Formik>
    );
};
