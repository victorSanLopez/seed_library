import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingLayout from "./pages/landingLayout/LandingLayout";
import SeedLibraryPage from "./pages/seedLibraryPage/SeedLibraryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/ma-grainotheque",
        element: <SeedLibraryPage />,
      },
    ],
  },
]);
