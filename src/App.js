import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResetPasswordLinkSent from "./pages/ResetPasswordLinkSent";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SignUpRegister from "./pages/SignUpRegister";
import PropertyPage from "./pages/PropertyPage";
import MarketPlace from "./pages/MarketPlace";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-link-sent":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/signupregister":
        title = "";
        metaDescription = "";
        break;
      case "/property-page":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/reset-password-link-sent"
        element={<ResetPasswordLinkSent />}
      />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/signupregister" element={<SignUpRegister />} />
      <Route path="/property-page" element={<PropertyPage />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
export default App;
