import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLoadingGlobal } from "../../store/slices/isLoading.slice";
import getConfig from "../../utils/getConfig";
import Loading from "../loading/Loading";
import PurchasesCard from "./PurchasesCard";
import "./styles/stylePurchases.css";

const PurchasesScreen = () => {
  const [userPurchases, setUserPurchases] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(setIsLoadingGlobal(true));
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => {
        setUserPurchases(res.data.data.purchases);
        dispatch(setIsLoadingGlobal(false));
      })
      .catch((err) => console.log(err));
  }, []);

  const toBackHome = () => {
    navigate("/");
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="purchases">
      <div className="purchases-title">
        <p onClick={toBackHome}>Home</p>
        <span></span>
        <p>My Purchases</p>
      </div>
      <div className="purchases__container">
        {userPurchases?.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesScreen;
