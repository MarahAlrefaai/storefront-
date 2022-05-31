
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import {connect} from 'react-redux'
import './Products.scss';
function Products (props){
  const {category,product}=props;

  return(
  <>

  <span  >
 {
   product.map((product,i)=>{
     if(category?.id===product.categoryId){
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
            <Typography  variant="body2" color="text.secondary">
            {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
       
       )
     }else {return null ;}
   })}
  </span>
 
  </> 
  )}
  const mapStateToPrps=(state)=>({category: state.catigory.selectedCategory,product:state.product.Products})
  export default connect(mapStateToPrps)(Products);