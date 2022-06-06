import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {connect} from 'react-redux'
import {deleteFromCart} from '../../store/Cart'
 function SimpleCard (props){
   console.log( props.cart)
  return (
  <>
    {
      props.cart.map((item)=>{
        return(
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.deleteFromCart(item)}>
          delete
        </Button>
      </CardActions>
    </Card>
        )
      })
  
    }
  </> )}
  const mapStateToProps=(state)=>{
   // console.log("mapStateToProps ==> "+state.cart.cartProduct)
  
   return { cart:state.cart.cartProduct}
  }
  const mapDispatchToProps={deleteFromCart }
  export default connect(mapStateToProps,mapDispatchToProps)(SimpleCard)