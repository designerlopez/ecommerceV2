import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style/styleLogin.css";
import axios from "axios";
import ModalLoginSucces from "./ModalLoginSucces";

const LoginScreen = () => {
  const [isErrorLogin, setIsErrorLogin] = useState();

  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const defaultValues = { email: "", password: "" };

  const naviNewUser = () => {
    navigate("newuser");
  };

  const submit = (data) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setTimeout(() => {
          navigate("/");
        }, 3000);
        reset(defaultValues);
      })
      .catch((err) => {
        if (!regexEmail.test(data.email)) {
          setIsErrorLogin(true);
          setTimeout(() => {
            setIsErrorLogin(false);
          }, 5000);
        }
      });
  };

  const getToken = localStorage.getItem("token");

  return (
    <div className="login">
      {getToken ? (
        <ModalLoginSucces />
      ) : (
        <form onSubmit={handleSubmit(submit)} className="form">
          <div className="form__welcome">
            <h2>
              ¡Bienvenido! Introduzca su correo electrónico y contraseña para
              continuar.
            </h2>
          </div>

          <div className="form__welcome-data">
            <p>Datos de prueba:</p>
            <p className="Login-email">
              <b>Email:</b> frontenddev@gmail.com
            </p>
            <p className="login-password">
              <b>Password:</b> FrontendDev22
            </p>
          </div>

          <div className="form__item">
            <label htmlFor="login-email">Email</label>
            <input type="email" id="login-email" {...register("email")} />
          </div>
          <div className="form__item">
            <label htmlFor="login-pass">Password</label>
            <input type="password" id="login-pass" {...register("password")} />
          </div>
          <div className="form__error">
            {isErrorLogin && "Credenciales invalidas."}
          </div>
          <button className="form__btn">Login</button>
          <p onClick={naviNewUser} className="form__register">
            ¿No tienes cuenta? Registrate.
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginScreen;
