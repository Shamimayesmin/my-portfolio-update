import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Layout/Home/Home";
import Main from "../components/Layout/Main/Main";
import About from "../components/Pages/About/About";
import Contact from "../components/Pages/Contact/Contact";
import Details from "../components/Pages/Projects/Details";
import Projects from "../components/Pages/Projects/Projects";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>,
              },
            //   {
            //     path: "/blog",
            //     element: <Blog></Blog>,
            //   },
      
              {
                path: "/projects",
                element: <Projects></Projects>
              },
              {
                path: "/about",
                element: <About></About>,
              },
              {
                path: "/contact",
                element: <Contact></Contact>,
              },
              {
                path: "/details/:id",
                element: <Details></Details>,
              },
        ]
    }
])