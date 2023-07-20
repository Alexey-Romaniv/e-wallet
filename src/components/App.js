import {Route, Routes} from "react-router-dom";
import {lazy, useEffect} from "react";
import {PrivateRoute} from "../HOCs/PrivateRoute";
import {PublicRoute} from "../HOCs/PublicRoute";



import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

import {Loader} from "./Loader/Loader";
import {Layout} from "./Layout/Layout";
import {useAuth} from "../hooks/useAuth";
import {fetchCurrentUser} from "../redux/auth/authOperations";
import {useDispatch, useSelector} from "react-redux";
import {selectLoading} from "../redux/transactions/transactionSelectors";
import {selectIsLoading as currencyLoader} from "../redux/currency/currencySelectors";

const CurrencyPage = lazy(() => import('../pages/CurrencyPage/CurrencyPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const StatisticPage = lazy(() => import('../pages/StatisticPage/StatisticPage'));



const App = () => {
    const dispath = useDispatch();
    // const isLoading = useSelector(state => state.global.isLoading)
    const {isFetching, isLoading} = useAuth();
    const statisticLoading = useSelector(selectLoading)
    const currencyLoading = useSelector(currencyLoader);

    useEffect(() =>  {dispath(fetchCurrentUser())}, [dispath])
    return <>
    {(isLoading || isFetching || statisticLoading || currencyLoading) ?  <Loader/> : null}
        <Routes>
            <Route index path="/login" element={<PublicRoute redirectTo='/' component={<LoginPage/>}/>}/>
            <Route path="/register" element={<PublicRoute redirectTo='/' component={<RegisterPage/>}/>}/>
            <Route path="/" element={<Layout/>}>
                <Route index element={<PrivateRoute redirectTo='/login' component={<HomePage/>}/>}/>
                <Route  path="/statistics" element={<PrivateRoute redirectTo='/login' component={<StatisticPage/>}/>}/>
                <Route path='/currency' element={<PrivateRoute redirectTo='/login' component={<CurrencyPage/>} />}/>}/>
            </Route>
        </Routes>
</>
};
export default App;
