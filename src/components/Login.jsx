import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now";
const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          localStorage.removeItem("cart");
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        handleFirebaseError(error);
      });
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then((res) => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          localStorage.removeItem("cart");
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        handleFirebaseError(error);
      });
  };

  const handleFirebaseError = (error) => {
    if (error.code === "auth/user-not-found") {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "User not found",
        text: "No user found with this email.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (error.code === "auth/wrong-password") {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Incorrect password",
        text: "The password you entered is incorrect.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (error.code === "auth/too-many-requests") {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Too many attempts",
        text: "Access to this account has been temporarily disabled due to many failed login attempts. Try again later.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Login Error",
        text: error.message,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password *"
                  required
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgotpass">Forgot Password?</Link>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
              {errorMessage && (
                <div className="form-group">
                  <p className="error-message">{errorMessage}</p>
                </div>
              )}
            </form>

            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Do not have an account? <Link to="/sign-up">Sign Up</Link>
              </span>
              <span className="or">or</span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button onClick={handleRegister} className="github">
                    <i className="icofont-github"></i>
                  </button>
                </li>
                {socialList.map((item, index) => (
                  <li key={index}>
                    <a href={item.siteLink} className={item.className}>
                      <i className={item.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
