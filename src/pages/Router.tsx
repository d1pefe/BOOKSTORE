import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
    Cart = "/cart",
    Favorites = "/favorites",
    Default = "*",
}

const Router = () => {
    const isLoggedIn = false;
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Main} element={<PagesContainer/>}>
                <Route path={RoutesList.Main} element={<Main />}/>
                <Route path={RoutesList.Authorize} element={<Authorize />}/>
                {/*<Route path={RoutesList.Account} element={isLoggedIn ? <Account /> : <Navigate to={RoutesList.Authorize} />}/>*/}
                {/*<Route path={RoutesList.Cart} element={isLoggedIn ? <Cart /> : <Navigate to={RoutesList.Authorize} />}/>*/}
                {/*<Route path={RoutesList.Favorites} element={isLoggedIn ? <Favorites /> : <Navigate to={RoutesList.Authorize} />}/>*/}
                <Route path={RoutesList.Default} element={<div>404 ERROR</div>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default Router;