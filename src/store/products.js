const initialState={
  Products :  [
    {
      categoryId:1,
      id : 1,
      name : "al_aghwar farm",
      description :"all green",
      price:"$50000",
      img:'https://image.shutterstock.com/image-photo/beautiful-sunset-rice-field-terrace-260nw-521146474.jpg'
    },
    {
      categoryId:2,
      id : 2,
      name : "tesla car",
      description :"amazing tesla car ",
      price:"$15000",
      img:'https://media.wired.com/photos/5a69231ef0e3ef5b52cd5e12/16:9/w_1631,h_917,c_limit/APCrashesII-FeatureArt.jpg'
    },
    {
      categoryId:3,
      id : 3,
      name : "Dead Sea Mud Soap Bloom",
      description :"Shop Deep Sea Mud Mask ",
      price:"$500",
      img:'https://image.made-in-china.com/202f0j00mKdaZuEGCDpv/Private-Label-Dead-Sea-Mud-Mask-Products-Jordan.jpg'
    }
  ]
}
export default function productReduser(state =initialState, action ){
  switch (action.type){
  case 'GET_PRODUCT':
    return state;
    default:return state
}}

export const getProduct =()=>{
  return {type :'GET_PRODUCT'}
}
