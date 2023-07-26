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

import {DesktopInfoBar} from "../../components/DesktopInfoBar/DesktopInfoBar";


const HomePage = () => {
    const isMobileScreen = window.innerWidth <= 768;
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    return <Container>
        {isMobileScreen ?
            <div>
                <Navigation/>
                <BalanceInfo/>
            </div> :
            <DesktopInfoBar/>
        }

            <TransactionList/>
        <ShowModalBtn onClick={toggleModal}>
            <AiOutlinePlus size={30} color={"white"}/>
        </ShowModalBtn>
        {showModal && <Modal toggleModal={toggleModal}/>}
    </Container>;
}
export default HomePage;

