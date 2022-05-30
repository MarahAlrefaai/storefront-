const initialState={
  Products :  [
    {
      categoryId:1,
      id : 1,
      name : "dead sea farm",
      description :"",
      price:"$50000"
    },
    {
      categoryId:2,
      id : 2,
      name : "tesla car",
      description :"",
      price:"$15000"
    },
    {
      categoryId:3,
      id : 3,
      name : "Dead Sea Mud Soap Bloom",
      description :"",
      price:"$500"
    }
  ]
}
export default (state =initialState, action )=>{
  switch (action.type){
  case 'GET_PRODUCT':
    return state;
    default:return state
}}

export const getProduct =()=>{
  return {type :'GET_PRODUCT'}
}
