import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  } from "react-router-dom";
import { Home } from "../pages";
import { Info } from "../pages/Info";
import { NotFound } from "../pages/Notfound";

  const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Home />}/>,
        <Route path="*" element={<NotFound />} />,
        <Route path="/info" element={<Info />} />
    ])
  )

  function Router(){
    return <RouterProvider router={router} />
  }

  export { Router }; 