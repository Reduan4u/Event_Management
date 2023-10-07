import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Root/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Service from "../Home/Services/SelectedServices/Service";
import Services from "../Home/Services/Services";
import LogIn from "../Root/LogIn/LogIn";
import SignUp from "../Root/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/service/:service_id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
]);

export default router;