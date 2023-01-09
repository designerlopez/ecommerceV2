import React from 'react'
import { useForm } from 'react-hook-form'
import './style/styleSearchName.css'



const FilterProducstOrName = ({setSearchProductName}) => {


const {handleSubmit, register, reset} = useForm()

const submit = data => {
  setSearchProductName(data.name)
}


  return (
    <div className='container__filterName'>
        <form className='formNameProduct' onSubmit={handleSubmit(submit)}>
            <div className='formNameProduct__item'>
                <input className='formNameProduct__input' placeholder='Busque un producto en particular' type='text' {...register("name")}/>
            </div>
            <button className='formNameProduct__btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
  )
}

export default FilterProducstOrName