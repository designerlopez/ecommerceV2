import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style/styleRegister.css";
import axios from "axios";
import ModalNewUser from "./ModalNewUser";

const NewUserScreen = () => {
  const [isEmptyFieldsError, setIsEmptyFieldsError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [errorRole, setErrorRole] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const [modalUserSucces, setModalUserSucces] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const navigateLogin = () => navigate("/login");

  const defaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "Admin",
  };

  const submit = (data) => {
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const regexEmail = /\S+@\S+\.\S+/;
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users";
    if (
      data.firstName == "" ||
      data.lastName == "" ||
      data.email == "" ||
      data.password == "" ||
      data.phone == "" ||
      data.role == ""
    ) {
      setIsEmptyFieldsError(true);
      setTimeout(() => {
        setIsEmptyFieldsError(false);
      }, 5000);
    } else if (!regexPassword.test(data.password)) {
      setIsPasswordError(true);
      setTimeout(() => {
        setIsPasswordError(false);
      }, 5000);
    } else if (!regexEmail.test(data.email)) {
      setErrorEmail(true);
      setTimeout(() => {
        setErrorEmail(false);
      }, 5000);
    } else if (data.phone.length < 10) {
      setMobileError(true);
      setTimeout(() => {
        setMobileError(false);
      }, 5000);
    } else if (data.role !== "admin") {
      setErrorRole(true);
      setTimeout(() => {
        setErrorRole(false);
      }, 5000);
    } else {
      axios
        .post(URL, data)
        .then((res) => {
          console.log(res.data);
          setModalUserSucces(true);
          setTimeout(() => {
            setModalUserSucces(false);
            navigate("/login");
          }, 3000);
          reset(defaultValue);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="register__container">
      {modalUserSucces ? (
        <ModalNewUser />
      ) : (
        <form className="register" onSubmit={handleSubmit(submit)}>
          <div className="register__text">
            <h2>Crear un nuevo usuario.</h2>
          </div>
          <div className="form__item">
            <label htmlFor="register-first">Nombre</label>
            <input type="text" id="register-first" {...register("firstName")} />
          </div>
          <div className="form__item">
            <label htmlFor="register-last">Apellido</label>
            <input type="text" id="register-last" {...register("lastName")} />
          </div>
          <div className="form__item">
            <label htmlFor="register-email">Email</label>
            <input type="email" id="register-email" {...register("email")} />
          </div>
          <div className="form__item">
            <label htmlFor="register-password">Contraseña</label>
            <input
              type="password"
              id="register-password"
              {...register("password")}
            />
          </div>
          <div className="form__item">
            <label htmlFor="register-phone">Celular</label>
            <input type="tel" id="register-phone" {...register("phone")} />
          </div>
          <div className="form__item">
            <label htmlFor="">Rol</label>
            <input
              type="text"
              id="register-role"
              defaultValue="admin"
              {...register("role")}
            />
          </div>
          <div className="form__error">
            {isEmptyFieldsError && "Los campos no pueden estar vacios."}
            {isPasswordError &&
              "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."}
            {mobileError && "El celular debe contener al menos 10 digitos"}
            {errorRole && 'La API solo admite el rol "admin", lo siento! '}
            {errorEmail && "Email invalido ejemplo -> example@example.com"}
          </div>
          <button className="form__btn">Crear</button>
          <p onClick={navigateLogin} className="form__register">
            ¿Ya tienes una cuenta? Inicia sesión.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewUserScreen;
