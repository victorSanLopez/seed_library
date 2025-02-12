import { ToastContainer } from "react-toastify";
import "./App.css";
import SignInPopup from "./components/signInPopup/SignInPopUp";
import UserRegistrationForm from "./components/userRegistrationForm/UserRegistrationForm";

function App() {
  return (
    <>
      <UserRegistrationForm />
      <SignInPopup />
      <ToastContainer />
    </>
  );
}

export default App;
