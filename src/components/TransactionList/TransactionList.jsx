import {useSelector} from "react-redux";
import {Transaction} from "../Transaction/Transaction";
import {selectTransactions} from "../../redux/transactions/transactionSelectors";

export const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return <ul>
      {transactions.map((info) => <li key={info._id}><Transaction id={info._id} info={info}/></li>)}
  </ul>
}