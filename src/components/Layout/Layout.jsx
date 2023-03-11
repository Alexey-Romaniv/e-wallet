import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import {AppBar} from "../AppBar/AppBar";
import {Navigation} from "../Navigation/Navigation";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Layout = () => {
  return (
    <div>
        <AppBar/>
        <Navigation/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
        <ToastContainer/>
    </div>
  );
};
