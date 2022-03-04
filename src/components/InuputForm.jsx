import React from "react";

const InuputForm = ({
  name,
  lastname,
  dni,
  email,
  password,
  check,
  handleChange,
}) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputText1"
          aria-describedby="emailHelp"
          required
          placeholder="Ingrese su nombre..."
          maxLength={42}
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputText2"
          aria-describedby="emailHelp"
          required
          placeholder="Ingrese su apellido..."
          maxLength={42}
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">DNI</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputNumber"
          aria-describedby="emailHelp"
          placeholder="Ingrese su DNI..."
          required
          name="dni"
          value={dni}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electronico</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          placeholder="Example@gmail.com..."
          maxLength={80}
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          required
          maxLength={80}
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          required
          name="check"
          checked={check}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Acepto los terminos y servicios.
        </label>
      </div>
    </>
  );
};

export default InuputForm;
