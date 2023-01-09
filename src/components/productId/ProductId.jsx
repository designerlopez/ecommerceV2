import axios from 'axios'
import React, { useEffect } from 'react'
import './styles/styleProductId.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SliderImgs from './SliderImgs'
import ProductInfoId from './ProductInfoId'
import SimilarProduct from './SimilarProduct'

const ProductId = () => {

    const [product, setProduct] = useState()
    
    const navigate = useNavigate()

    const {id} = useParams()
    
    useEffect(() => {
      const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
      axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
    }, [id])

    const handleVolver = () => {
      navigate('/')
    }


  return (
    <section className='product'>
      <div className='navigate-container'>
        <p onClick={handleVolver}>Home</p>
        <span></span>
        <p>{product?.title}</p>
      </div>
      
      <div className='product-slider-info'>
        <SliderImgs product={product}/>
        <ProductInfoId product={product}/>
      </div>

        <SimilarProduct product={product}/>
    </section>
  )
}

export default ProductId