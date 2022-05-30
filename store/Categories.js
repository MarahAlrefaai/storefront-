const initialState={
  category :  [
    {
      id : 1,
      name : "farms",
      description :"You find in us the best beautiful and fruitful farms"
    },
    {
      id : 2,
      name : "cars",
      description :"You will find with us the latest technologies and new versions of cars"
    },
    {
      id : 3,
      name : "dead sea products",
      description :"Dead Sea products refers to cosmetic products based on materials extracted from the Dead Sea, such as salt, mud, and potash."
    }
  ],
  selectedCategory:{}
}
export default (state =initialState, action )=>{
  switch (action.type){
    case 'CATEGORTY_SELECTED':
let selectedCategory =state.category.find(category => category.id=== action.ppayload)
return{
  ...state,
  selectedCategory:selectedCategory
}
default: return state;

  }
}
export const getSelectedCategory =(value)=>{
  return {type :'CATEGORTY_SELECTED',
payload:value }
}