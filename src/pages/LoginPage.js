import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";

export default function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" })
  const [item, setItems] = React.useState([])
  const [formErrors, setFormErrors] = React.useState({});
  const history = useNavigate();


  React.useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => setItems(data))
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



    item.map((items) => {
      var paswd = items.username;
      var num = 123;
      paswd += num;
      if (items.email !== userid && paswd !== passid) {
        errors.username = "Invalid username or password";
      }
      else if (items.email === userid && paswd !== passid) {
        errors.username = "Invalid username or passsword";
      }
      else if (items.email !== userid && paswd === passid) {
        errors.username = "Invalid username or passsword";
      }
      else {
        history("postDetails");
      }
    });
    return errors;
  };
  return (
    <div className="container">
      <h1>META</h1>

      <form onSubmit={handleSubmit} classname="form-input">
        <div></div>
        <p>{formErrors.username}</p>
        <label>
          Username:

          <input

            className='user-input'
            type="email"
            name="email"
            placeholder="Your email id"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br></br>
        <p>{formErrors.password}</p>
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
        <br></br>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>

  );
};


