import {Container} from "../../components/CommonComponents/Container.styles";
import {Navigation} from "../../components/Navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrency} from "../../redux/currency/currencySelectors";
import {useEffect} from "react";
import {fetchCurrency} from "../../redux/currency/currencyOperations";

const CurrencyPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrency())
    }, [dispatch])
    const currency = useSelector(selectCurrency)
    return <Container>
        <Navigation/>
        <table>
            <tr>
                <th>Currency</th>
                <th>Sale</th>
            </tr>
            {/*<tr>{currency.map(el => <><td>{el.asset_id_base}</td> )}</tr>*/}
            {/*<tr>{currency.map(el => <td>{el.rate}</td> )}</tr>*/}
            {currency.map(el => {
            return <tr>
                <td>{el.asset_id_base}</td>
                <td>{el.rate.toFixed(2)}</td>
            </tr>
            })
            }
        </table>
        {/*{currency && <>*/}
        {/*    <p>{currency[2].asset_id_base}</p>*/}
        {/*    <p>{currency[2].asset_id_quote}</p>*/}
        {/*    <p>{currency[2].rate}</p></>}*/}

    </Container>;
};

export default CurrencyPage;
