import { useState } from "react";
import SignInPopup from "../accessPopups/SignInPopup";
import style from "./navHeader.module.css";

export default function LandingNavHeader() {
  const [isSignInPopup, setSignInPopup] = useState(false);
  const handleCloseSignIn = () => {
    setSignInPopup(false);
  };

  return (
    <header
      className={`${style.headerContainer} ${style.LandingHeaderContainer}`}
    >
      <h1 className={style.headerTitle}>Mon Grainetier virtuel</h1>
      <figure className={style.heroBanner}>
        <button
          type="submit"
          className={style.submitButton}
          onClick={() => setSignInPopup(true)}
        >
          Se Connecter
        </button>
        {isSignInPopup && <SignInPopup closePopup={handleCloseSignIn} />}
      </figure>
    </header>
  );
}
