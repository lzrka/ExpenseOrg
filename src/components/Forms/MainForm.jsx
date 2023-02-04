import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    let formErrors = {};
    if (!name) {
      formErrors.name = "Name is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }

    setErrors(formErrors);
  }, [name, email]);

  const handleSubmit = (event) => {
    console.log(errors);
    event.preventDefault();
    setHasSubmitted(true);

    if (Object.keys(errors).length === 0) {
      const incomingData = {
        name,
        email,
        submittedOn: new Date(),
      };
      console.log(incomingData);
      setName("");
      setEmail("");
      setErrors([]);
      setHasSubmitted(false);
    }
  };

  return (
    <form className="form_main" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {hasSubmitted && errors.name && <span>{errors.name}</span>}
      <br />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {hasSubmitted && errors.email && <span>{errors.email}</span>}
      <br />
      <button type="submit">Sign In</button>
      <br />
      <Link to="/registration" className="reg">
        Don't have an account? Register here.
      </Link>
    </form>
  );
}

export default MainForm;
