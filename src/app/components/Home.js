import React from 'react'
import SingleProduct from './SingleProduct'
import { GlobalStore } from '../Context/StateProvider'
import Header from './Header';
import ProductForm from './ProductForm';


function Home() {
    const { product, dispatch } = GlobalStore();
    const { Products,Price_filter} = product;
    
    const ProductArray = ()=>{
        if(Price_filter==='increase'){
            return Products.sort((a,b)=>a.price-b.price);
        }
        if(Price_filter==='decrease'){
            return Products.sort((a,b)=>b.price-a.price);
        }
        else{
            return Products;
        }
    }
    
    return (
        <div>
             <Header/>
             <ProductForm/>
            <div className='sm:flex sm:flex-wrap sm:w-full justify-center'>
                {ProductArray()?.map((item, index) => (
                    <SingleProduct key={index} image={item.image} heading={item.heading} description={item.description} price={item.price} id={index} /> 
                ))
                }
            </div>
        </div>
    )
}

export default Home