import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagesContainer from "./PagesContainer";
import Main from "./Main";
import Authorize from "./Authorize";

export enum RoutesList {
    Main = "/",
    Search = "/main/search",
    Book = "/main/:id",
    Authorize = "/authorize",
    Reset = "/reset",
    Account = "/account",
}

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Main} element={<PagesContainer/>}>
                <Route path={RoutesList.Main} element={<Main />}/>
                <Route path={RoutesList.Authorize} element={<Authorize />}/>
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default Router;