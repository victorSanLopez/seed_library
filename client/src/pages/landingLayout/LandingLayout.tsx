import { ToastContainer } from "react-toastify";
import RegisterPopup from "../../components/accessPopups/RegisterPopup";
import SignInPopup from "../../components/accessPopups/SignInPopup";

export default function LandingLayout() {
  return (
    <>
      <SignInPopup />
      <RegisterPopup />
      <ToastContainer />
    </>
  );
}
