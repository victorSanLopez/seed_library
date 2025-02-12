import "./App.css";
import { Outlet } from "react-router-dom";
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
    </div>
  );
}

export default App;
