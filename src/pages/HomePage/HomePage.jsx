import {BalanceInfo} from "../../components/BalanceInfo/BalanceInfo";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTransactions} from "../../redux/transactions/transactionsOperations";
import {TransactionList} from "../../components/TransactionList/TransactionList";

const HomePage = () => {
    const dispatch =  useDispatch();
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);
    return <>
        <div>HomePage</div>
        <BalanceInfo/>
        <TransactionList/>
    </>;
}
export default HomePage;

