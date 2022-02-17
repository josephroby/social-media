import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import useFetch from "../hooks/useFetch";

export default function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = React.useState({});
  const navigate = useNavigate();
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
  };

  const validate = () => {
    const errors = {};
    const userid = formData.email;
    const passid = formData.password;
    users.forEach((user) => {
      var paswd = user.username;
      var num = 123;
      paswd += num;
      if (user.email !== userid) {
        errors.username = "Invalid credentials";
      } else if (user.email === userid && paswd !== passid) {
        errors.username = "Invalid credentials";
      } else {
        localStorage.setItem("userDetails", JSON.stringify(user));
        navigate("postPage");
      }
    });
    return errors;
  };
  return (
    <div className="container">
      <div className="header-content">
        <h1>
          <strong>META</strong>
        </h1>
      </div>
      <div className="main-content">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit} classname="form-input">
          <fieldset>
            <p className="error-message">{formErrors.username}</p>
            <label>
              Username:
              <input
                className="user-input"
                type="email"
                name="email"
                placeholder="Enter your email-id"
                onChange={handleChange}
                value={formData.email}
              />
            </label>
          </fieldset>
          <p className="error-message">{formErrors.password}</p>
          <fieldset>
            <label>
              Password:
              <input
                className="user-password"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
            </label>
          </fieldset>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
