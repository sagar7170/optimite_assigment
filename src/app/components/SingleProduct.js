import React from 'react'
import { GlobalStore } from '../Context/StateProvider'
import Link from 'next/link';

function SingleProduct({image,heading,description,price,id}) {
    
    const {product,dispatch} =  GlobalStore();
    const {Products} = product;
   
    const product_info = ()=>{
        console.log("index",id)
        dispatch({
            type : "PRODUCT_INFO",
            payload : {image,heading,description,price}
        })
    }
    
    const RemoveItem  = ()=>{    
        dispatch({
            type : "REMOVE_ITEM",
            payload : id
        })
    }



    return(
        <div className=' flex justify-center h-full'>
            <div className='w-[22rem]  p-5  flex justify-between flex-col bg-white relative hover:shadow-2xl hover:shadow-black hover:scale-100 duration-500  top-2 '>
                <Link href = 'productInfo'>
                  <img onClick={product_info} className='w-60 h-60 m-auto object-contain' src= {image} />
                  </Link>
                <div>
                    <h1 className='font-bold  whitespace-nowrap overflow-hidden text-ellipsis' >{heading}</h1>
                    <h1 className='line-clamp-2'>{description}</h1>
                    <h1 className='font-bold'>$ {price}</h1>
                    <button onClick={RemoveItem} className='bg-red-400 mt-1 hover:bg-red-500 w-full h-9 rounded-sm font-semibold'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

