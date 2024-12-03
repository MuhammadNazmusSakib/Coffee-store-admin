import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Home from './Components/Home.jsx';

import SignUp from './Components/SignIn&SignUp/SignUp.jsx';
import SignIn from './Components/SignIn&SignUp/SignIn.jsx';
import DataProvider from './Components/DataProvider/DataProvider.jsx';
import Users from './Components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
