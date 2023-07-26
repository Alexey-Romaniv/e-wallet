import {useSelector} from "react-redux";
import {Transaction} from "../Transaction/Transaction";
import {selectTransactions} from "../../redux/transactions/transactionSelectors";
import {TransactionHeader, TransactionItem, TransactionList as List, TransactionTitle} from "./TransactionList.styles";

export const TransactionList = () => {
    const transactions = useSelector(selectTransactions);

    return <>
        <TransactionHeader>
            <TransactionTitle>Date</TransactionTitle>
            <TransactionTitle>Type</TransactionTitle>
            <TransactionTitle>Category</TransactionTitle>
            <TransactionTitle>Comment</TransactionTitle>
            <TransactionTitle>Sum</TransactionTitle>
            <TransactionTitle>Balance</TransactionTitle>
        </TransactionHeader>
        <List>
            {transactions.map((info) => <TransactionItem key={info._id}><Transaction id={info._id} info={info}
                                                                                     type={info.type}/></TransactionItem>)}
        </List>
    </>
}