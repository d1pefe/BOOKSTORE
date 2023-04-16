import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PagesContainer from "./PagesContainer";
import Main from "./Main";
import Authorize from "./Authorize";
import SinglePage from "./SinglePage";

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

const MOCK_ARRAY = {
    error: "0",
    title: "Securing DevOps",
    subtitle: "Security in the Cloud",
    authors: "Julien Vehent",
    publisher: "Manning",
    isbn10: "1617294136",
    isbn13: "9781617294136",
    pages: "384",
    year: "2018",
    rating: 5,
    desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
    price: "$26.98",
    image: "https://itbook.store/img/books/9781617294136.png",
    url: "https://itbook.store/books/9781617294136",
    pdf: {
        Chapter2 : "https://itbook.store/files/9781617294136/chapter2.pdf",
        Chapter5 : "https://itbook.store/files/9781617294136/chapter5.pdf",
    }
}

const Router = () => {
    const isLoggedIn = false;
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Main} element={<PagesContainer/>}>
                <Route path={RoutesList.Main} element={<SinglePage data={MOCK_ARRAY}/>}/>
                <Route path={RoutesList.Authorize} element={<Authorize />}/>
                {/*<Route path={RoutesList.Account} element={isLoggedIn ? <Account /> : <Navigate to={RoutesList.SelectedPostModal} />}/>*/}
                {/*<Route path={RoutesList.Cart} element={isLoggedIn ? <Cart /> : <Navigate to={RoutesList.SelectedPostModal} />}/>*/}
                {/*<Route path={RoutesList.Favorites} element={isLoggedIn ? <Favorites /> : <Navigate to={RoutesList.SelectedPostModal} />}/>*/}
                <Route path={RoutesList.Default} element={<div>404 ERROR</div>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default Router;