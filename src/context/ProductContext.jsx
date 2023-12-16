// create a context
//provider
//consumer => useContext hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/ProductReducer';



const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
// seconds step
const initialState ={
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: []
 };

const AppProvider = ( {children} )=>{

    const [state, dispatch] = useReducer(reducer, initialState);

     const getProduct = async (url) =>{
        dispatch({ type: "SET_LOADING"})
        try{
           const res = await axios.get(url);
           const products = await res.data;
           console.log(products);
           console.log("meer");
           dispatch({ type: "SET_API_DATA", payload: products })
        }catch(error){
             dispatch({type: "API_ERROR"})
        }
     }
     useEffect(()=>{
       getProduct(API)
     }, [])
    return(
    <AppContext.Provider value={{ ...state }}>
        { children }
    </AppContext.Provider>
    )
};

//custom Hook
function useProductContext(){
    return useContext( AppContext ); 
}
 
export { AppProvider, AppContext, useProductContext };