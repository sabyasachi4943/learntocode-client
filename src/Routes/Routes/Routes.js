import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import Topics from "../../Pages/Topics/Topics/Topics";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
      },
      {
        path: '/topics/:id',
        element: <Topics></Topics>,
      }

    ]
  },
]);