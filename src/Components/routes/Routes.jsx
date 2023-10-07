import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Root/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Service from "../Home/Services/SelectedServices/Service";

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
                element: <Service></Service>
            },
            {
                path: '/service/:service_id',
                element: <Service></Service>,
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
        ]
    },
]);

export default router;