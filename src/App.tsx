import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy (()=> import ("./components/Grocery"));

const About = lazy (() => import ("./components/About"))

const AppLayout = () => {

    const [userName, setUserName] = useState<string>("Default User");
    // authentication
        useEffect(()=>{
            const data = {
                name: 'Dummy',
            };
        setUserName(data.name);
    },[])
    return (
        <Provider store = {appStore}>
            <UserContext.Provider value = {{ loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);

const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={appRouter} />)