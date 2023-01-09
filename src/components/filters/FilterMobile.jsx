import React, { useRef } from "react";
import "./style/styleFilterMobile.css";

const categories = ['Smartphones', 'Smart TV', 'Computers']

const FilterMobile = ({products, setFilteredProduct}) => {
  const openFilterMobile = useRef();

  const containerFilterPrice = useRef();
  const containerFilterCategory = useRef()

  const rotateRow = useRef()
  const rotateRow1 = useRef();

  const openMenuFilterMobile = () => {
    openFilterMobile.current?.classList.toggle("open-nav-filter");
  };

  const closedMenuFilterMobile = () => {
    openFilterMobile.current?.classList.remove("open-nav-filter");
  };

  const mostrarFilterPrice = () => {
    rotateRow1.current?.classList.toggle("rotate-row-open1");
    containerFilterPrice.current?.classList.toggle("open-filterPrice-mobile");
  };

  const mostrarFilterCategory = () => {
    rotateRow.current?.classList.toggle('rotate-row-open')
    containerFilterCategory.current?.classList.toggle('open-filter-category')
  }

  const categoryFilter = categoryFilter => {
    setFilteredProduct(products.filter(e => e.category?.name.toLowerCase().includes(categoryFilter.toLowerCase()) === true))
  }

  return (
    <section className="filter-mobile">
      <div className="container-btn-filter-mobile">
        <p onClick={openMenuFilterMobile}>Filter</p>
        <i onClick={openMenuFilterMobile} className="bx bx-filter-alt"></i>
      </div>

      <nav className="navbar-filter-mobile" ref={openFilterMobile}>
        <div className="filte-mobile-title">
          <p>Filtros</p>
          <i onClick={closedMenuFilterMobile} className="bx bx-x"></i>
        </div>

        <div className="container-filters-mobile">

          <article className="filter-mobile-price">

            <div className="container-btn-openFilter-mobile">
              <p>Price</p>
              <i
                ref={rotateRow1}
                onClick={mostrarFilterPrice}
                className="bx bx-chevron-up"
              ></i>
            </div>

            <ul
              className="container-filter-inputMobile"
              ref={containerFilterPrice}
            >
              <li className="containerInput-filter-mobile">
                <p className="label-inputFilter-mobile">Desde</p>
                <input
                  className="inputD-inputFilter-mobile"
                  type="number"
                  min="1"
                />
              </li>
              <li className="containerInput-filter-mobile">
                <p className="label-inputFilter-mobile">Hasta</p>
                <input
                  className="inputH-inputFilter-mobile"
                  type="number"
                  min="1"
                />
              </li>
              <button className="btn-filterMobile-price">
                Filtrar por precio
              </button>
            </ul>
          </article>


          <article className="filter-mobile-price">
            <div className="container-btn-openFilter-mobile">
              <p>Categoria</p>
              <i
                ref={rotateRow}
                onClick={mostrarFilterCategory}
                className="bx bx-chevron-up"
              ></i>
            </div>
            <ul
              ref={containerFilterCategory}
              className="container-list-category"
            >
                         {
                categories.map(category => (
                    <li className='category-item-mobile' onClick={() => categoryFilter(category)} key={category}>{category}</li>
                ))
            }
            </ul>
          </article>
        </div>
      </nav>
    </section>
  );
};

export default FilterMobile;
