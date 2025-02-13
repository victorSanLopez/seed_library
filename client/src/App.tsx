import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import NavHeader from "./components/navHeader/NavHeader";

function App() {
  return (
    <div className="appContainer">
      <NavHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
