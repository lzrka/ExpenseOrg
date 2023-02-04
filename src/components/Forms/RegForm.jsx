import React, { useState, useEffect } from "react";

function RegForm() {
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    let formErrors = {};
    if (!userName) {
      formErrors.userName = "Username is required";
    }
    if (!firstName) {
      formErrors.firstName = "First Name is required";
    }
    if (!lastName) {
      formErrors.lastName = "Last Name is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }
    setErrors(formErrors);
  }, [userName, firstName, lastName, email]);

  const handleSubmit = (event) => {
    console.log(errors);
    event.preventDefault();
    setHasSubmitted(true);

    if (Object.keys(errors).length === 0) {
      const incomingData = {
        userName,
        firstName,
        lastName,
        email,
        submittedOn: new Date(),
      };
      console.log(incomingData);
      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setErrors([]);
      setHasSubmitted(false);
    }
  };

  return (
    <form className="form_main" onSubmit={handleSubmit}>
      <h1>Registration</h1>

      <input
        placeholder="Username"
        type="text"
        value={userName}
        onChange={(event) => setUsername(event.target.value)}
      />

      {hasSubmitted && errors.userName && <span>{errors.userName}</span>}
      <br />

      <input
        placeholder="First Name"
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      {hasSubmitted && errors.firstName && <span>{errors.firstName}</span>}
      <br />

      <input
        placeholder="Last Name"
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      {hasSubmitted && errors.lastName && <span>{errors.lastName}</span>}
      <br />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      {hasSubmitted && errors.email && <span>{errors.email}</span>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegForm;
