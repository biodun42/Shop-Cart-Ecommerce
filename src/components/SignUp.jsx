import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const title = "Register Now";
const socialTitle = "Login with Social Media";
const btnText = "Signup Now";
const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = () => {
    signUpWithGmail()
      .then((res) => {
        const user = res.user;
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup Successfully",
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

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Password mismatch",
        showConfirmButton: false,
        timer: 2500,
      });
      return;
    }

    const from = location.state?.from?.pathname || "/";

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup Successfully",
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
    if (error.code === "auth/email-already-in-use") {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Email already in use",
        text: "The email address is already associated with an account.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (error.code === "auth/weak-password") {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Weak password",
        text: "The password should be at least 6 characters long.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Signup Error",
        text: error.message,
        showConfirmButton: false,
        timer: 2500,
      });
    }
    console.error("Signup Error:", error.message);
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name *"
                required
              />
            </div>
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
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password *"
                required
              />
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
              Have an account? <Link to="/login">Sign In</Link>
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
  );
};

export default SignUp;
