import React from "react";

import "../FirebaseApp";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PagesContainer from "./PagesContainer";
import Main from "./Main";
import Authorize from "./Authorize";
import SinglePage from "./SinglePage";
import {useAuth} from "../hooks/useAuth";
import Favorites from "./Favorites";
import Cart from "./Cart";
import Search from "./Search";
import EmptyState from "../components/EmptyState";
import Account from "./Account";

export enum RoutesList {
    Main = "/",
    Search = "/main/search",
    Book = "/books/:id",
    Authorize = "/authorize",
    Account = "/account",
    Cart = "/cart",
    Favorites = "/favorites",
    Default = "*",
}

const Router = () => {
    const { isLoggedIn } = useAuth();
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Main} element={<PagesContainer/>}>
                <Route path={RoutesList.Main} element={<Main/>}/>
                <Route path={RoutesList.Authorize} element={<Authorize/>}/>
                <Route path={RoutesList.Book} element={<SinglePage/>}/>
                <Route path={RoutesList.Search} element={<Search/>}/>
                <Route path={RoutesList.Account} element={isLoggedIn ? <Account /> : <Navigate to={RoutesList.Authorize} />}/>
                <Route path={RoutesList.Cart} element={isLoggedIn ? <Cart /> : <Navigate to={RoutesList.Authorize} />}/>
                <Route path={RoutesList.Favorites} element={isLoggedIn ? <Favorites/> : <Navigate to={RoutesList.Authorize}/>}/>
                <Route path={RoutesList.Default} element={<EmptyState/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default Router;