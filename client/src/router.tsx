import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingLayout from "./pages/landingLayout/LandingLayout";
import SeedEntryPage from "./pages/seedEntryPage/SeedEntryPage";
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
      {
        path: "/ajouter-mes-graines",
        element: <SeedEntryPage />,
      },
    ],
  },
]);
