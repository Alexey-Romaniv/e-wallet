import {TransactionText} from "./Transaction.styles";

export const Transaction = ({info: {date,type, category, sum, wallet,comment }}) => {
    // console.log(info)

   const [formattedDate, ] = date.split("T")
    return <>
        <TransactionText type={type}>Date: {formattedDate}</TransactionText>
        <TransactionText type={type}>Type: {type}</TransactionText>
        <TransactionText type={type}>Category : {category ? category : 'Regular income'}</TransactionText>
        <TransactionText type={type}>Comment: {comment? comment: ''}</TransactionText>
        <TransactionText type={type}>Sum: {sum}</TransactionText>
        <TransactionText type={type}>Balance: {wallet}</TransactionText>
    </>
}