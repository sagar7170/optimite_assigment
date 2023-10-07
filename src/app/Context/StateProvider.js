"use client"
import React, { createContext, useContext, useReducer } from 'react'
import reducer from './Reducers'
const StateContext = createContext()
export default function StateProvider({children}) {
    
    const [product,dispatch] = useReducer(reducer,{
        Products : [],
        ProductForm : false,
        Product_info : {},
        Price_filter : ''
    })

  return (
    <StateContext.Provider value={{product,dispatch}}> 
        {children}
    </StateContext.Provider>
  )
}

export const GlobalStore = () => useContext(StateContext);
