import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import PremiumDetails from "./PremiumDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container">
        <div className="side-bar">
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/premium-details" className="nav-link">
                  Premium Details
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/premium-details",
        element: <PremiumDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
