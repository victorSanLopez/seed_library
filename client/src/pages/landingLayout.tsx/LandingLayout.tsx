import { ToastContainer } from "react-toastify";
import SignInPopup from "../../components/signInPopup/SignInPopup";

export default function LandingLayout() {
  return (
    <>
      <SignInPopup />
      <ToastContainer />
    </>
  );
}
