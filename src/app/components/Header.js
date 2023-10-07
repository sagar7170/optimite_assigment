import React, { useState } from 'react'
import { GlobalStore } from '../Context/StateProvider';

function Header() {
    const { product, dispatch } = GlobalStore();
    const { ProductForm } = product;
    const [filterButton, SetFilterButton] =  useState(false);
    
    const form_Popup = () => {
        dispatch({
            type: "POPUP_FORM",
            payload: !ProductForm
        })
    }
    const filter = (e)=>{
        dispatch({
            type: 'FILTER',
            payload : e.target.name
        })
    }

    const sortBy = ()=>{
        SetFilterButton(!filterButton);
    }
    return (
        <div className='flex justify-between bg-black p-4'>
            <h1 className='font-semibold text-white text-xl'>Store</h1>
            <div className='space-x-4 relative'>
                    <button onClick={sortBy} className='bg-blue-400 p-2 rounded-md hover:bg-blue-700'>Sort by price</button>
                    <div className={!filterButton?'hidden':'absolute space-y-1 top-12 right-36 z-20'}>
                        <button  onClick={filter}  name='increase' className='bg-green-400 p-2 flex rounded-md hover:bg-green-700'>Low to High</button>
                        <button  onClick={filter}  name='decrease' className='bg-green-400 p-2 flex rounded-md hover:bg-green-700'>High to Low</button>
                    </div>
                
                <button onClick={form_Popup} className='bg-blue-400 p-2 rounded-md hover:bg-blue-700'>Add products</button>
            </div>
        </div>
    )
}

export default Header