import { ToastContainer } from "react-toastify";
import "./App.css";
import SignInPopup from "./components/signInPopup/SignInPopup";

function App() {
  return (
    <>
      <SignInPopup />
      <ToastContainer />
    </>
  );
}

export default App;
