import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartGlobal } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import CartInfo from "./CartInfo";
import Loading from "../loading/Loading";
import "./styles/styleCartScreen.css";

const CartScreen = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.isLoading);

  console.log(cart);

  const postPurchase = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };

    axios
      .post(URL, objPurchase, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(setCartGlobal(null));
      })
      .catch((err) => console.log(err.data));
  };

  let totalPriceCart = 0;
  if (cart) {
    const cb = (acc, cv) => {
      console.log(cv);
      return acc + cv.price * cv.productsInCart.quantity;
    };

    totalPriceCart = cart.reduce(cb, 0);
  }

  const goBack = () => {
    navigate("/");
  };

  return loading ? (
    <Loading />
  ) : (
    <section className="cart">
      <div>
        <div className="cart-title-container">
          <p className="cart-title-goback" onClick={goBack}>
            Home
          </p>
          <span></span>
          <p className="cart-title">My Cart</p>
        </div>

        <div className="cart__container">
          {cart?.map((productCart) => (
            <CartInfo key={productCart.id} productCart={productCart} />
          ))}
        </div>
      </div>

      <div className="total-btnConfirm">
        {cart ? (
          <h2 className="cart__total">
            <span className="cart__total-label">Total: $</span>
            <span className="cart__total-number">{totalPriceCart}</span>
          </h2>
        ) : (
          <h2 className="text-cart-null">No has agregado nada al carrito!</h2>
        )}
        {cart ? (
          <button className="cart__btn" onClick={postPurchase}>
            Confirm Purchase
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default CartScreen;
