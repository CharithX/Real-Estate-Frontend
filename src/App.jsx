import HomePage from "./Pages/HomePage/HomePage";
import ListPage from "./Pages/ListPage/ListPage";
import Layout from "./Pages/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./Pages/Singlepage/Singlepage";

function App() {

     const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        // {
        //   path:"/profile",
        //   element:<ProfilePage/>
        // },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;