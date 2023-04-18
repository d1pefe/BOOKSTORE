import React from "react";

import "../FirebaseApp";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PagesContainer from "./PagesContainer";
import Main from "./Main";
import Authorize from "./Authorize";
import SinglePage from "./SinglePage";
import {useAuth} from "../hooks/useAuth";
import Favorites from "./Favorites";

export enum RoutesList {
    Main = "/",
    Search = "/main/search",
    Book = "/books/:id",
    Authorize = "/authorize",
    Reset = "/reset",
    Account = "/account",
    Cart = "/cart",
    Favorites = "/favorites",
    Default = "*",
}

const Router = () => {
    const {isLoggedIn} = useAuth();
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Main} element={<PagesContainer/>}>
                <Route path={RoutesList.Main} element={<Main/>}/>
                <Route path={RoutesList.Authorize} element={<Authorize/>}/>
                <Route path={RoutesList.Book} element={<SinglePage/>}/>
                {/*<Route path={RoutesList.Account} element={isLoggedIn ? <Account /> : <Navigate to={RoutesList.SelectedPostModal} />}/>*/}
                {/*<Route path={RoutesList.Cart} element={isLoggedIn ? <Cart /> : <Navigate to={RoutesList.SelectedPostModal} />}/>*/}
                <Route path={RoutesList.Favorites} element={!isLoggedIn ? <Favorites/> : <Navigate to={RoutesList.Authorize}/>}/>
                <Route path={RoutesList.Default} element={<div>404 ERROR</div>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default Router;