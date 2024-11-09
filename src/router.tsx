import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Products, { loader as productLoader, action as updateAvailabilityAction } from "./views/Products"
import NewProducts, { action as newProductAction } from "./views/NewProducts"
import EditProduct, { loader as editProductLoader, action as editProductAction } from "./views/EditProduct"
import { action as deleteProductAction } from "./components/ProductDetails"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                // path: "/", //similar to index:true
                element: <Products />,
                loader: productLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'producto/nuevo',
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', //ROA Pattern - Resource-oriented design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }

        ]
    }
])