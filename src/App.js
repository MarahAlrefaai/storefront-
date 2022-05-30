
import './App.css';
const Headers =require('./components/Header/Header')
const Catigories =require('./components/Catigories/Catigories')
const Product =require('./components/Product/Product')
const Footer =require('./components/Footer/Footer')
function App() {
  return (
    <div >
    <Headers />
    <Catigories />
    <Product />
    <Footer />
    </div>
  );
}

export default App;
