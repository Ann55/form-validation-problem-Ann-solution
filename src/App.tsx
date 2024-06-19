import { useState } from "react";
import React from "react";
import "./App.css";
import { isValidEmail } from "./utils";

const colours = ["Blue", "Green", "Red", "Black", "Brown"];
const animals = ["Bear", "Tiger", "Snake", "Donkey"];

function App() {
  //set up controlled form components
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    colour: "",
    animal: [] as string[],
    tiger_type: "",
  });
  //set initial error states
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    colour: false,
    animal: false,
    tiger_type: false,
  });

  //updates form values per user input
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const animalArray = formData.animal;
      if (checked) {
        setFormData({
          ...formData,
          animal: [...animalArray, value],
        });
      } else {
        setFormData({
          ...formData,
          animal: animalArray.filter((animal) => animal !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Clear the error state when the user starts typing
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  //checks for errors on submit
  const handleSubmit = (e: any) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // checks for email validity
    if (!isValidEmail(formData.email)) {
      setErrors({
        ...errors,
        email: true,
      });
      return false;
    }
    // checks password is at least 8 characters
    if (formData.password.length < 8) {
      setErrors({
        ...errors,
        password: true,
      });
      return false;
    }
    // check colour is selected
    if (formData.colour === "") {
      setErrors({
        ...errors,
        colour: true,
      });
      return false;
    }
    // check at least two animals chosen
    if (formData.animal.length < 2) {
      setErrors({
        ...errors,
        animal: true,
      });
      return false;
    }
    // check type of tiger is non-empty string when tiger is chosen
    if (formData.animal.includes("Tiger")) {
      if (formData.tiger_type === "") {
        setErrors({
          ...errors,
          tiger_type: true,
        });
        return false;
      }
    }
    // submits form if no errors
    e.currentTarget.submit();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Fill out this awesome form</h1>
        <fieldset>
          <h3>Your details</h3>
          <div className={errors.email ? "error" : ""}>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            <span
              id="email-error"
              className={errors.email ? "errorMsg" : "hidden"}
            >
              Please enter a valid email address
            </span>
          </div>
          <div className={errors.password ? "error" : ""}>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="error"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby="password-error"
            />
            <span
              id="password-error"
              className={errors.password ? "errorMsg" : "hidden"}
            >
              Password must be longer than 8 characters
            </span>
          </div>
        </fieldset>

        <fieldset>
          <h3>Your animal</h3>
          <div className={errors.colour ? "error" : ""}>
            <label className="label" htmlFor="colour">
              Colour
            </label>
            <select
              name="colour"
              id="colour"
              defaultValue=""
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.colour ? "true" : "false"}
              aria-describedby="colour-error"
            >
              <option value="" disabled>
                Choose colour
              </option>
              {colours.map((colour) => (
                <option value={colour} key={colour}>
                  {colour}
                </option>
              ))}
            </select>
            <span
              id="colour-error"
              className={errors.colour ? "errorMsg" : "hidden"}
            >
              Please choose a colour
            </span>
          </div>
          <div className={errors.animal ? "error" : ""}>
            <fieldset>
              <label className="label">Animal</label>
              {animals.map((animal) => {
                return (
                  <React.Fragment key={animal}>
                    <input
                      type="checkbox"
                      name="animal"
                      value={animal}
                      id={animal}
                      onChange={handleChange}
                    />
                    <label htmlFor={animal}>{animal}</label>
                  </React.Fragment>
                );
              })}
            </fieldset>

            <span
              id="animal-error"
              className={errors.animal ? "errorMsg" : "hidden"}
            >
              Please choose at least 2 animals
            </span>
          </div>
          <div className={errors.tiger_type ? "error" : ""}>
            <label className="label" htmlFor="tiger_type">
              Type of tiger
            </label>
            <input
              type="text"
              name="tiger_type"
              id="tiger_type"
              onChange={handleChange}
              aria-required={
                formData.animal.includes("Tiger") ? "true" : "false"
              }
              aria-invalid={errors.tiger_type ? "true" : "false"}
              aria-describedby="tiger-type-error"
            />
            <span
              id="tiger-type-error"
              className={errors.tiger_type ? "errorMsg" : "hidden"}
            >
              Please specify type of tiger
            </span>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <button type="submit">Create account</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
