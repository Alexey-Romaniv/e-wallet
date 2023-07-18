import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addTransaction} from "../../redux/transactions/transactionsOperations";
import {ModalComment, ModalDate, ModalForm, ModalInput, SelectInput} from "./ModalFoms.styles";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {FormError, InputWrapper} from "../CommonComponents/authForm.styles";
import Select from "react-select";

import {TextField} from "@mui/material";

const incomeSchema = Yup.object().shape({
    sum: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().notRequired(),
});

const expenseSchema = Yup.object().shape({
    sum: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().notRequired(),
    category: Yup.string().required('Required'),
});

export const IncomeForm = ({toogleModal}) => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{sum: '', date: new Date(), comment: '', type: "+"}}
            validationSchema={incomeSchema}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values.comment);
                console.log(values)
                dispatch(addTransaction(values))
                toogleModal();
            }}
        >
            {({isSubmitting, values, setFieldValue}) => (
                <ModalForm>
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
                        <FormError name="date" component="div" />
                    </InputWrapper>
                    <InputWrapper>
                        <ModalComment>
                            <ModalInput as="textarea" type="text" name="comment" placeholder="Comment"/>
                        </ModalComment>
                        <FormError name="comment" component="div"/>
                    </InputWrapper>
                    <div>
                        <MainBtn type="submit">
                            Add
                        </MainBtn>
                        <SecondBtn type="button" onClick={() => toogleModal()}>Cancel</SecondBtn>
                    </div>
                </ModalForm>
            )}
        </Formik>
    );
};

export const ExpenseForm = ({toogleModal}) => {

    const options = [
        {value: "main", label:"Main"},
        {value: "food", label:"Food"},
        {value: "auto", label:"Auto"},
        {value: "development", label:"Development"},
        {value: "children", label:"Children"},
        {value: "house", label:"House"},
        {value: "education", label:"Education"},
        {value: "reset", label:"Reset"},
    ]

    const dispatch = useDispatch();
    // const [selectedValue, setSelectedValue] = useState("");
    return (
        <Formik
            initialValues={{category: ' ', sum: '', date: new Date(), comment: '', type: "-"}}
            validationSchema={expenseSchema}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                dispatch(addTransaction(values));
                toogleModal();
            }}
        >
            {({isSubmitting, values, setFieldValue}) => (
                <ModalForm>
                    <InputWrapper>
                        <SelectInput
                            classNamePrefix="Select"
                            name="category"
                            as={Select}
                            options={options}
                            placeholder="Select a category"
                            onChange={(selectedOption) =>{
                                setFieldValue("category", selectedOption.value);
                            }
                            }
                        />
                        <FormError name="category" component="div"/>
                    </InputWrapper>
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
                        <FormError name="date" component="div" />
                    </InputWrapper>
                    <InputWrapper>
                        <ModalComment>
                            <ModalInput as="textarea" type="text" name="comment" placeholder="Comment"/>
                        </ModalComment>
                        <FormError name="comment" component="div"/>
                    </InputWrapper>
                    <div>
                        <MainBtn type="submit">
                            Add
                        </MainBtn>
                        <SecondBtn type="button" onClick={() => toogleModal()}>Cancel</SecondBtn>
                    </div>
                </ModalForm>
            )}
        </Formik>
    );
};
