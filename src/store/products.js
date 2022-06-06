const initialState={
  Products :  [
    {
      categoryId:1,
      id : 1,
      name : "al_aghwar farm",
      description :"all green",
      price:"$50000",
      img:'https://image.shutterstock.com/image-photo/beautiful-sunset-rice-field-terrace-260nw-521146474.jpg',
      inventoryCount:0
    

    },
    {
      categoryId:2,
      id : 2,
      name : "tesla car",
      description :"amazing tesla car ",
      price:"$15000",
      img:'https://media.wired.com/photos/5a69231ef0e3ef5b52cd5e12/16:9/w_1631,h_917,c_limit/APCrashesII-FeatureArt.jpg',
      inventoryCount:4
    },
    {
      categoryId:3,
      id : 3,
      name : "Dead Sea Mud Soap Bloom",
      description :"Shop Deep Sea Mud Mask ",
      price:"$500",
      img:'https://image.made-in-china.com/202f0j00mKdaZuEGCDpv/Private-Label-Dead-Sea-Mud-Mask-Products-Jordan.jpg',
      inventoryCount:4

    }
  ]
}
export default function productReduser(state =initialState, action ){
  switch (action.type){
  case 'GET_PRODUCT':
    return state;
    case 'DECREMENT_INVENTORY':
      let decArray=[...state.Products]
      let decItem=action.payload
      let arr=decArray.map(ele=>{
        if(ele.name==decItem.name){
           ele.inventoryCount=ele.inventoryCount-1
           return ele;
        }
        return ele;
      })
      return {Products:arr}
    
      
    default:return state
}}
export const decrementInventory = (item) => {
  return {
    type: 'DECREMENT_INVENTORY',
    payload: item,
  };
};


