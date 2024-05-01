import {createBrowserRouter,RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client' 
import App from '../App.jsx';
import { Signingup,Login,Home } from "../components/index.js";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
        {
           path: "/home",
           element:<Home/>,
        },
        {
           path: "/signingup",
           element:<Signingup/>,
        },
        {
            path: "/login",
            element:<Login/>,
        }
    ]
    }
])

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <RouterProvider router = {router}/>
// )

export {router}