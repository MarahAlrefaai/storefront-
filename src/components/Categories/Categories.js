import './Categories.scss'
//these imports for the design that i take it from the mui 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
//=====================================================
import {connect} from 'react-redux'
import {useState,useEffect} from 'react'
import {getSelectedCategory} from '../../store/Categories'
 function Categories (props){
   const {category,getSelectedCategory}=props;//destructureing 
   const [id,setId]=useState(1);
   useEffect(()=>{
   
    getSelectedCategory(id)
 
   },[id,getSelectedCategory])
return(
<>
<ButtonGroup variant="text" aria-label="text button group">
  <Button onClick={()=>{
setId(1);
  }}>farms</Button>
  <Button onClick={()=>{
setId(2);
  }}>cars</Button>
  <Button onClick={()=>{
setId(3);
  }} >dead sea products</Button>
</ButtonGroup>
<h2>{category.selectedCategory?.name}</h2>
<h6>{category.selectedCategory?.description}</h6>
</>
)}

//enter the state that we take from store to add it to cheldrin 
const mapStateToPrps=(state)=>({category: state.catigory,})
const mapDispatchToProps={getSelectedCategory}//take the action 
export default connect(mapStateToPrps,mapDispatchToProps)(Categories);
