import './App.css';
import  Headers from './components/Header/Header'
import Catigories from './components/Categories/Categories';
import Product from './components/Products/Products';
import Footer from './components/Footer/Footer';
import SimpleCart from './components/SimpleCard/SimpleCard';
function App() {
  return (
    <div >
    <Headers />
    <SimpleCart />

    <Catigories />
    <Product />
    <Footer />
    </div>
  );
}

export default App;
