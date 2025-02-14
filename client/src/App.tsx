import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import UserNavHeader from "./components/navHeader/UserNavHeader";

function App() {
  return (
    <div className="appContainer">
      <UserNavHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
