const initialState={
  Cart :  [
    {
  
      numberOfSavedProduct :0,
      all_product:[],
      soled:false,
      totalPrice: 0,
     

    }
  ]
}
export default function cartReduser(state =initialState, action ){
  console.log(state , action )
  switch (action.type){
  case 'ADD_TO_CART':
    let carInfo={
      all_product : [...state.all_product],
      numberOfSavedProduct : state.numberOfSavedProduct,



    }
    
    return {
      
    }
    default:return state
}}

export const getCart =()=>{
  return {type :'ADD_TO_CART'}
}