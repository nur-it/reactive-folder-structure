import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      /*  {
        path: "/product/:itemId",
        element: <ProductDetails />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/aboutV2",
        element: <AboutUsV2 />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/orders/:id",
        element: <OrderTrack />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/terms",
        element: <TermsCondition />,
      }, */
    ],
  },
]);
