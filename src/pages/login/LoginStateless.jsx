import React from 'react';
import Logo from '../../components/logo/Logo';
import { Link } from 'react-router-dom';
import Alert from '../../components/alert/Alert';

const LoginStateless = ({
  refEmail,
  refPassword,
  handleChangeInput,
  handleClickSignIn,
  alertMessage,
}) => {
  return (
    <>
      <Logo />
      <br />
      <br />
      <h3 className="mb-3 fw-normal">Ingresar</h3>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          name="txtEmail"
          placeholder="Correo Electronico"
          ref={refEmail}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtEmail">Correo Electronico</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          name="txtPassword"
          placeholder="Contraseña"
          ref={refPassword}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtPassword">Contraseña</label>
      </div>
      <div className="d-grid gp-2 mx-auto">
        <button
          className="btn btn-lg btn-primary mb-2"
          onClick={handleClickSignIn}
          disabled={alertMessage.visibility}
        >
          Ingresar
        </button>
        <Link className="btn btn-lg btn-success" to="/register">
          Registrar
        </Link>
        <div className="mt-3">
          {alertMessage.visibility ? (
            <Alert message={alertMessage.message} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LoginStateless;
