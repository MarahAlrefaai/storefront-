const initialState={
cartProduct:[],
countItems:0
}

export default function cartReduser(state =initialState, action ){
  switch (action.type){
    case 'ADD_TO_CART':
    let cartArray=[...state.cartProduct]
    let c= Number.parseInt([state.countItems])+1
    
    console.log("c"+c)
    let newItem=action.payload;
    cartArray.push("newItem")
    cartArray.push(newItem)
   console.log("reducer"+ cartArray);
    return{...state , cartProduct:cartArray,countItems:state.countItems+1 }
    case 'DELETE_FROM_CART':
        let array=[...state.cartProduct];
        let removedItem = action.payload;
         array.map((product,id) =>{
          //console.log(array);
          if(product.name === removedItem.name ){
            let tempRemove=array.indexOf(product);
           // console.log(product);
            array.splice(tempRemove,1);
          }
          return array
        });
        return {cartProduct: array,cartCount:state.cartCount-1 };
       
default: return state;

  }
}

export const getProduct =()=>{
  return {type :'GET_PRODUCT'}
}
export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
}

export function deleteFromCart(product) {
  return {
    type: 'DELETE_FROM_CART',
    payload: product,
  };
}
