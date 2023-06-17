import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addTransaction} from "../../redux/transactions/transactionsOperations";
import {ModalComment, ModalDate, ModalForm, ModalInput, SelectInput, SelectOption} from "./ModalFoms.styles";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {FormError, InputWrapper} from "../CommonComponents/authForm.styles";

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
            initialValues={{sum: '', date: '', comment: '', type: "+"}}
            validationSchema={incomeSchema}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values.comment);
                console.log(values)
                dispatch(addTransaction(values))
                toogleModal();
            }}
        >
            {({isSubmitting}) => (
                <ModalForm>
                    <InputWrapper>
                        <ModalInput type="number" name="sum" placeholder="0.00"/>
                        <FormError name="sum" component="div"/>
                    </InputWrapper>
                    <InputWrapper>
                        <ModalInput type="date" name="date"/>
                        <FormError name="date" component="div"/>
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
    const [selectedValue, setSelectedValue] = useState("");


    const dispatch = useDispatch();
    // const [selectedValue, setSelectedValue] = useState("");
    return (
        <Formik
            initialValues={{category: '', sum: '', date: '', comment: '', type: "-"}}
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
                        <SelectInput name="category" value={selectedValue} onChange={(e) => {
                            setFieldValue("category", e.target.value);
                            setSelectedValue(e.target.value);
                        }}>
                            <SelectOption value="" label="Select a category" disabled hidden/>
                            <SelectOption value="main" label="Main"/>
                            <SelectOption value="food" label="Food"/>
                            <SelectOption value="auto" label="Auto"/>
                            <SelectOption value="development" label="Development"/>
                            <SelectOption value="children" label="Children"/>
                            <SelectOption value="house" label="House"/>
                            <SelectOption value="education" label="Education"/>
                            <SelectOption value="reset" label="Reset"/>
                        </SelectInput>
                        <FormError name="category" component="div"/>
                    </InputWrapper>
                    <InputWrapper>
                        <ModalInput type="number" name="sum" placeholder="0.00"/>
                        <FormError name="sum" component="div"/>
                    </InputWrapper>
                    <InputWrapper>
                        <ModalDate type="date" name="date"/>
                        <FormError name="date" component="div"/>
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
