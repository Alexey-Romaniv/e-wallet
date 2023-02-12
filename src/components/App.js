import { Route, Route, Navigate } from "react-router";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element="" />
      <Route path="/register" element="" />
      <Route path="/" element="<DashboardPage/>">
        <Route index element="HomePage" />
        <Route path="" />
      </Route>
    </Routes>
  );
};

export default App;
