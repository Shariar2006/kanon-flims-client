import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import OurStory from "../Page/OurStory/OurStory";
import TheCompany from "../Page/TheCompany/TheCompany";
import Movies from "../Page/Movies/Movies";
import News from "../Page/News/News";
import Blogs from "../Page/Blogs/Blogs";
import Contact from "../Page/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/ourStory',
            element: <OurStory></OurStory>
        },
        {
            path: '/compony',
            element: <TheCompany></TheCompany>
        },
        {
            path: '/movies',
            element: <Movies></Movies>
        },
        {
            path: '/news',
            element: <News></News>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/contact-us',
            element: <Contact></Contact>
        },
      ]
    },
  ]);

  export default router;