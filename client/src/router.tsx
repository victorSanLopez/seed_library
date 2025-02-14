import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import App from "./App";
import UserList from "./components/userList/UserList";
import AdminPage from "./pages/adminPage/AdminPage";
import NotFoundPage from "./pages/error404Page/NotFoundPage";
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
  {
    path: "/admin",
    element: <AdminPage />,
    loader: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/auth/protected`,
          { withCredentials: true },
        );
        return response.data;
      } catch (err) {
        toast.error("Erreur pendant le chargement 😵");
        throw err;
      }
    },
    children: [
      {
        path: "/admin/liste-utilisateurs",
        element: <UserList />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
