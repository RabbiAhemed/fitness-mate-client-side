import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import AddService from "./pages/AddService/AddService";
import Blog from "./pages/Blog/Blog";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyReview from "./pages/MyReview/MyReview";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import ThreeReview from "./pages/ThreeReview/ThreeReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            return fetch(
              "https://fitness-mate-server-side.vercel.app/services"
            );
          },
        },

        {
          path: "/services",
          element: <Services></Services>,
          loader: async () => {
            return fetch(
              "https://fitness-mate-server-side.vercel.app/services"
            );
          },
        },
        {
          path: "/service/:id",
          element: <Details></Details>,
          loader: async ({ params }) => {
            return fetch(
              `https://fitness-mate-server-side.vercel.app/services/${params.id}`
            );
          },
        },
        {
          path: "/addService",
          element: (
            <PrivateRoute>
              <AddService></AddService>
            </PrivateRoute>
          ),
        },
        {
          path: "/myReviews",
          element: (
            <PrivateRoute>
              <MyReview></MyReview>
            </PrivateRoute>
          ),
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
