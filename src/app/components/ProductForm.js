import React, { useState } from 'react'
import { GlobalStore } from '../Context/StateProvider';

function ProductForm() {
    const { product, dispatch } = GlobalStore();
    const {ProductForm} = product
    
    const [FormInput,setformInput] = useState({image:"",heading:"",description:"",price:""})
    
    const handleFormInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setformInput({...FormInput,[name]:value})
    }
    
    const SaveProductsForm = ()=>{
       const {image,heading,description,price} = FormInput;
       dispatch({
        type : "SAVE",
        payload : {image,heading,description,price}
       })
     
     dispatch({
        type : "POPUP_FORM",
        payload : !ProductForm
      })
   
    }  

  return (
      <div className={!ProductForm? 'hidden' : 'flex '}>
        <div className='bg-slate-300 md:w-1/2  p-7 space-y-3 rounded-md absolute z-30 md:left-1/4 top-10 shadow-2xl shadow-black'>
          <div className='space-x-5 grid grid-cols-2'>
            <label htmlFor="">Image</label>
            <input className='bg-blue-100 p-3 rounded-md' name='image' onChange={handleFormInput} type="text" placeholder='enter image url' />
          </div>
          <div className='space-x-5 grid grid-cols-2'>
            <label htmlFor="">Heading</label>
            <input className='bg-blue-100 p-3 rounded-md' name='heading' onChange={handleFormInput} type="text" placeholder='enter heading' />
          </div>
          <div className='space-x-5 grid grid-cols-2'>
            <label htmlFor="">Description</label>
            <input className='bg-blue-100 p-3 rounded-md' name='description' onChange={handleFormInput} type="text" placeholder='enter description' />
          </div>
          <div className='space-x-5  grid grid-cols-2'>
            <label htmlFor="">Price</label>
            <input className='bg-blue-100 p-3 rounded-md' name='price' onChange={handleFormInput} type="text" placeholder='enter price' />
          </div>
          <button className='bg-blue-400 p-2 rounded-md w-24 hover:bg-blue-700' onClick={SaveProductsForm} >Save</button>
        </div>
      </div>
  )
}

export default ProductForm