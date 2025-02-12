import { ToastContainer } from "react-toastify";
import "./App.css";
import UserRegistrationForm from "./components/userRegistrationForm/UserRegistrationForm";

function App() {
  return (
    <>
      <UserRegistrationForm />
      <ToastContainer />
    </>
  );
}

export default App;
