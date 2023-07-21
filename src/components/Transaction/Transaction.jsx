import {Sum, TransactionComment, TransactionText} from "./Transaction.styles";

export const Transaction = ({info: {date,type, category, sum, wallet,comment }}) => {
    // console.log(info)

   const [formattedDate, ] = date.split("T")
    return <>
        <TransactionText type={type}>Date: <span>{formattedDate}</span></TransactionText>
        <TransactionText type={type}>Type: <span>{type}</span></TransactionText>
        <TransactionText type={type}>Category: <span>{category ? category : 'Regular income'}</span></TransactionText>
        <TransactionText type={type}>Comment: <TransactionComment>{comment ? comment : ''}</TransactionComment></TransactionText>
        <TransactionText type={type}>Sum: <Sum type={type}>{sum.toFixed(2)}</Sum></TransactionText>
        <TransactionText type={type}>Balance: <span>{wallet.toFixed(2)}</span></TransactionText>
    </>
}