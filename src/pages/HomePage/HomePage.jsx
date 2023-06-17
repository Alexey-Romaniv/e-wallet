import {BalanceInfo} from "../../components/BalanceInfo/BalanceInfo";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchTransactions} from "../../redux/transactions/transactionsOperations";
import {TransactionList} from "../../components/TransactionList/TransactionList";
import {Container} from "../../components/CommonComponents/Container.styles";
import {Navigation} from "../../components/Navigation/Navigation";
import {Modal} from "../../components/Modal/Modal";
import {ShowModalBtn} from "../../components/CommonComponents/Buttons.styles";

import {AiOutlinePlus} from "react-icons/ai";

const HomePage = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const dispatch =  useDispatch();
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);
    return <Container>
        <Navigation/>
        <BalanceInfo/>
        <TransactionList/>
        <ShowModalBtn  onClick={toggleModal}>
            <AiOutlinePlus size={30} color={"white"}/>
        </ShowModalBtn>
        {showModal && <Modal toggleModal={toggleModal}/>}
    </Container>;
}
export default HomePage;

