import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {PrivateRoute} from "../HOCs/PrivateRoute";
import {PublicRoute} from "../HOCs/PublicRoute";

import {Layout} from "./Layout/Layout";

// const CurrencyPage = lazy(() => import('../pages/CurrencyPage/CurrencyPage'));
// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const StatisticPage = lazy(() => import('../pages/StatisticPage/StatisticPage'));
import HomePage from "../pages/HomePage/HomePage";
import CurrencyPage from "../pages/CurrencyPage/CurrencyPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import StatisticPage from "../pages/StatisticPage/StatisticPage";



const App = () => {
    return (
        <Routes>
            <Route index path="/login" element={<PublicRoute redirectTo='/' component={<LoginPage/>}/>}/>
            <Route path="/register" element={<PublicRoute redirectTo='/' component={<RegisterPage/>}/>}/>
            <Route path="/" element={<Layout/>}>
                <Route index element={<PrivateRoute redirectTo='/login' component={<HomePage/>}/>}/>
                <Route  path="/statistics" element={<PrivateRoute redirectTo='/login' component={<StatisticPage/>}/>}/>
                <Route path='/currency' element={<PrivateRoute redirectTo='/login' component={<CurrencyPage/>} />}/>}/>
            </Route>
        </Routes>

        // <Routes>
        //     <Route index path="/login" element={<LoginPage/>}/>
        //     <Route path="/register" element={<RegisterPage/>}/>
        //     <Route path="/" element={<Layout/>}>
        //         <Route index element={<HomePage/>}/>
        //         <Route  path="/statistics" element={<StatisticPage/>}/>
        //         <Route path='/currency' element={<CurrencyPage/>}/>
        //     </Route>
        // </Routes>
    );
};

export default App;
