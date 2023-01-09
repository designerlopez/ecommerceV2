import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterMobile from "../filters/FilterMobile";
import FilterProducstOrName from "../filters/FilterProducstOrName";
import FilterProductsOrCatPrice from "../filters/FilterProductsOrCatPrice";
import Loading from "../loading/Loading";
import ProductCard from "./ProductCard";
import "./styles/styleHome.css";

const HomeScreen = () => {
  // aqui guardo el nombre del producto para luego filtrarlo.
  const [searchProductName, setSearchProductName] = useState();

  // aqui guardo el primer precio (desde que precio quiero empezar a filtrar)
  const [productPriceOne, setProductPriceOne] = useState();

  // aqui guardo el segundo precio (hasta que precio quiero filtrar)
  const [productPriceTwo, setProductPriceTwo] = useState();

  // con este estado renderizo los productos filtrados.
  const [filteredProduct, setFilteredProduct] = useState();

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.isLoading);

  /* en este hook, verifico que searchProductName no este vacio y luego filtro el nombre del producto y lo guardo en filteredProduct,
     para hacer el mapeo de ese producto. Alli en filteredProduct tambien guardo el filtro por categoria.
  */
  useEffect(() => {
    if (searchProductName) {
      setFilteredProduct(
        products.filter(
          (e) =>
            e.title.toLowerCase().includes(searchProductName.toLowerCase()) ===
            true
        )
      );
    }
  }, [searchProductName]);

  useEffect(() => {
    if (productPriceOne && productPriceTwo) {
      setFilteredProduct(
        products.filter(
          (e) => e.price > productPriceOne && e.price < productPriceTwo
        )
      );
    }
  }, [productPriceOne, productPriceTwo]);

  return loading ? (
    <Loading />
  ) : (
    <section className="home">
      <div className="home-filter-byname">
        <FilterProducstOrName setSearchProductName={setSearchProductName} />
      </div>

      <div className="home_filterMobile">
        <FilterMobile
          setFilteredProduct={setFilteredProduct}
          products={products}
        />
      </div>

      <div className="container-products">
        <div className="aside-Container">
          <FilterProductsOrCatPrice
            setFilteredProduct={setFilteredProduct}
            products={products}
            setProductPriceOne={setProductPriceOne}
            setProductPriceTwo={setProductPriceTwo}
          />
        </div>
        <div className="container-card">
          {filteredProduct
            ? filteredProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
