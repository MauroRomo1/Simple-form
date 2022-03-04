import React, { useState } from "react";
import InuputForm from "./InuputForm";
import Message from "./Message";

const SimpleForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    dni: "",
    email: "",
    password: "",
    check: false,
  });

  const { name, lastname, dni, email, password, check } = formValues;

  const handleChange = (e) => {
    if (e.target.name === "check") {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const btnSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      lastname === "" ||
      dni === "" ||
      email === "" ||
      password === "" ||
      check === false
    ) {
      alert("Completar todos los datos");
    } else {
      alert("datos enviados");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 bg-secondary bg-gradient">
          <h2 className="text-center">Formulario Simple</h2>

          <form>
            <InuputForm handleChange={handleChange} btnSubmit={btnSubmit} />

            {check && <Message />}

            <button
              type="submit"
              className="btn btn-primary mb-4"
              onClick={btnSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
