import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Root";
import Shop from "../components/Shop";
import { productsAndCartData } from "../loaders/getCart&ProductData";


const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
        { path: '/about', element: <About /> }
    ]
}])

export default router