import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";

export default function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" })
  const [users, setUsers] = React.useState([])
  const [formErrors, setFormErrors] = React.useState({});
  const navigate = useNavigate();


  React.useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => setUsers(data))
  }, [])


  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
  };

  const validate = (values) => {
    const errors = {};
    const userid = formData.email;
    const passid = formData.password;
    users.forEach((user) => {
      var paswd = user.username;
      var num = 123;
      paswd += num;
      if (user.email !== userid) {
        errors.username = "Invalid username or password";
      }
      else if (user.email === userid && paswd !== passid) {
        errors.username = "Invalid username or passsword";
      }
      else {
        navigate("postDetails");
      }
    });
    return errors;
  };
  return (
    <div className="container">
      <h1>META</h1>
      <form onSubmit={handleSubmit} classname="form-input">
        <fieldset>
          <p>{formErrors.username}</p>
          <label>
            Username:
            <input
              className='user-input'
              type="email"
              name="email"
              placeholder="Enter your email-id"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </fieldset> 
        <p>{formErrors.password}</p>
        <fieldset>
          <label>
            Password:
            <input
              className='user-password'
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

  );
};


