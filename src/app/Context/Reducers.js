const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE":
            {
                return { ...state, Products: [...state.Products, action.payload] }
            }
        case "POPUP_FORM":
            {
                return { ...state, ProductForm: action.payload }
            }
        case "REMOVE_ITEM":
           {    
                    const index = action.payload;
                    state.Products.splice(index, 1); 
                return { ...state, Products: state.Products }

            }
        case "PRODUCT_INFO":
            {
                return {...state,Product_info : action.payload}
            }
        case "FILTER":
            {
                console.log("filter")
                return {...state,Price_filter: action.payload} 
            }               
    }
}

export default reducer;