
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { connect } from 'react-redux'
import { addToCart } from '../../store/Cart'
import {decrementInventory}from '../../store/products'
import './Products.scss';
function Products(props) {
  const { category, product } = props;
function addCart(val){
  if(val?.inventoryCount>0){
    props.addToCart(val);
    props.decrementInventory(val)

  }
  else{
    alert("SOLED OUT")
  }
}
  return (
    <>

      <span  >
        {
          product.map((product, i) => {
            if (category?.id === product.categoryId) {
              return (
                <Card key={i} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
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