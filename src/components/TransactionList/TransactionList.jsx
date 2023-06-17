import {useSelector} from "react-redux";
import {Transaction} from "../Transaction/Transaction";
import {selectTransactions} from "../../redux/transactions/transactionSelectors";
import {TransactionItem, TransactionList as List} from "./TransactionList.styles";

export const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return <List>
      {transactions.map((info) => <TransactionItem key={info._id} ><Transaction id={info._id} info={info} type={info.type}/></TransactionItem>)}
  </List>
}