import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CartScreen from "./components/Cart/CartScreen";
import HomeScreen from "./components/Home/HomeScreen";
import LoginScreen from "./components/Login/LoginScreen";
import NewUserScreen from "./components/Login/NewUserScreen";
import ProductId from "./components/productId/ProductId";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PurchasesScreen from "./components/Purchases/PurchasesScreen";
import FooterScreen from "./components/Shared/FooterScreen";
import HeaderScreen from "./components/Shared/HeaderScreen";
import { getAllProducts } from "./store/slices/products.slice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      <HeaderScreen/>
      <main className="main">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/login/newuser" element={<NewUserScreen/>}/> 

        <Route element={<ProtectedRoutes/>}>
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/purchases" element={<PurchasesScreen />} />
        </Route>
        <Route path="/product/:id" element={<ProductId/>}/>
      </Routes>
      </main>
      <FooterScreen/>
    </div>
  );
}

export default App;
