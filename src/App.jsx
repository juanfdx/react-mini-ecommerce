import './App.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
//pages components
import { 
  HomeLayout, 
  Landing, 
  Products, 
  SingleProduct, 
  About, 
  Contact, 
  Cart, 
  Checkout, 
  Orders, 
  Login, 
  Register, 
  Error, 
  Wishlist,
} from './pages';
//components
import { ErrorElement } from './components';


//LOADERS
import { loader as landingLoader } from './pages';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      { 
        index: true, 
        element: <Landing />, 
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },   
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  }
]);


function App() {

  return <RouterProvider router={router} />
}

export default App
