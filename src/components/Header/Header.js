import './Header.scss'
import{connect}from 'react-redux'
  function Header (props){
    
    // console.log("header")
    // console.log(props.countItems)
   
  return(
  <>
  <h1>Store</h1>
   <label > Cart: {props.countItems}</label> 
   
  </>
  )}
  const mapStateToProps=(state)=>({countItems:state.cart.countItems})
  export default connect(mapStateToProps)(Header)