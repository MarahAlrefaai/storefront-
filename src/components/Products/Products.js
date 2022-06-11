
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { addToCart } from '../../store/Cart'
import {decrementInventory}from '../../store/products'
import {connect,useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getRemoteProduct} from '../../store/products'
import {getRemoteData} from '../../store/Categories'
import './Products.scss';
function Products(props) {
  const newProduct=useSelector(state=>state.product.Products);
const category=useSelector(state=>state.catigory.selectedCategory);
  const dispatchData=useDispatch();//fire data  related with redux
  useEffect(()=>{
    dispatchData(getRemoteData())
    dispatchData(getRemoteProduct())
 
   },[])
   
  // const { category, product } = props;
  //console.log("category ",category)
function addCart(val){
  if(val?.inventoryCount>0){
    props.addToCart(val);
    props.decrementInventory(val)

  }
  else{
    alert("SOLED OUT")
  }
}

console.log("category",category)
//console.log("newProduct",newProduct)
/*  "categoryAssociation": "Food",
            "displayName": "orange",
            "description": "orange for eating",
            "price": "15$",
            "inventoryCount": 10,
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"*/
  return (
    <>

      <span  >
        {
          newProduct.map((product, i) => {
            //console.log("outSide If : ",product)
            if (category.dispalyName === product.categoryAssociation) {
              console.log("inside If : ",product)
              return (
                <Card key={i} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.categoryAssociation}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        availability :
                        {product.inventoryCount}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    
                      <Button  onClick={() =>  addCart(product)
                        } size="small">Add to cart</Button> 
                    

                    <Button size="small">View Details</Button>
                  </CardActions>
                </Card>
              )
            } else { return null; }
          })}
      </span>
    </>
  )
}
const mapStateToPrps = (state) => ({
  category: state.catigory.selectedCategory,
  product: state.product.Products
})
const mapDispatchToProps = { addToCart, decrementInventory }
export default connect(mapStateToPrps, mapDispatchToProps)(Products);