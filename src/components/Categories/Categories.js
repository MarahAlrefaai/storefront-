import './Categories.scss'
//these imports for the design that i take it from the mui 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';

//=====================================================
import {connect,useSelector,useDispatch} from 'react-redux'
import {useState,useEffect} from 'react'

import {getSelectedCategory,getRemoteData} from '../../store/Categories'

 function Categories (props){
  const dispatchData=useDispatch();//fire data  related with redux 

 //console.log(props)
   const {getSelectedCategory}=props;//destructureing 
   const [dispalyName,setdispalyName]=useState(1);
   useEffect(()=>{
   console.log("dispalyName>>>>>>>>>   ",dispalyName)
    getSelectedCategory(dispalyName)
 
   },[dispalyName,getSelectedCategory])
   useEffect(()=>{
   
    dispatchData(getRemoteData())
 
   },[])
   const newCategory=useSelector(state=>state.catigory.category);
   //console.log("coponent>>>>>>>>>   ",newCategory)
return(
<>
<ButtonGroup variant="text" aria-label="text button group">
      {
      
      newCategory.map(category => {
        console.log("Onclick : " ,category.dispalyName)
          return (          
            <Button key={category.id}  onClick={() =>{
              setdispalyName(category);
                }}>
              {category.dispalyName}
            </Button>
          )
        })
        }
</ButtonGroup>
<h2>{props.category.selectedCategory?.dispalyName}</h2>
<h6>{props.category.selectedCategory?.description}</h6>
</>
)}

//enter the state that we take from store to add it to cheldrin 
const mapStateToPrps=(state)=>({category: state.catigory,})
const mapDispatchToProps={getSelectedCategory}//take the action 
export default connect(mapStateToPrps,mapDispatchToProps)(Categories);
