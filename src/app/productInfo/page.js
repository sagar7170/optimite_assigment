"use client"
import React from 'react'
import { GlobalStore } from '../Context/StateProvider'

function Info() {
    const {product,dispatch} =  GlobalStore();
    const {Product_info} = product;
    console.log(Product_info,"info");
    const {image,heading,description,price} = Product_info;
  return (
    <div className='bg-white w-[90%] sm:flex gap-x-10 m-auto p-10 relative shadow-xl top-16'>
    <img className='w-64 hover:scale-110  duration-500 ease-in-out  object-contain'src={image} alt=""/>
    
    <div className='flex flex-col  justify-between gap-y-5'>
        <div>
            <h1 className='text-xl font-semibold'>{heading}</h1>  
            <h1 className='text-3xl font-semibold'>${price}</h1>
            <div className=''>
                <h1>Description:</h1>
                <h1 className='font-thin'>{description}</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default Info