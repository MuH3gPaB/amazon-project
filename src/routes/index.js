import Category from "../pages/category";
import Product from "../pages/product";
import NotFound from "../pages/not-found";
import Cart from "../pages/cart";
import ThankYou from "../pages/thank-you";

const routes = [
    {
        path: "/category/:id?",
        name: "category",
        component: Category
    },
    {
        path: "/product/:id?",
        name: "product",
        component: Product
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    },
    {
        path: "/thankYou",
        name: "thankYou",
        component: ThankYou
    },
    {
        path: "/notFound",
        name: "notFound",
        component: NotFound
    },
    {
        path: "*",
        name: "default",
        redirect: {name: "category"}
    }
];

export default routes;