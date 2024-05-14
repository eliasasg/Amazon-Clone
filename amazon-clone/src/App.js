
import './App.css';
import CarouselEffect from './component/Carousel/CarouselEffect';

import Header from './component/Header/Header';
import Product from './component/Product/Product';
import Category from './component/catagory/Category';

function App() {
  return (
    <div className="App">
     <Header />
     <CarouselEffect />
     <Category />
     <Product />
     
    </div>
  );
}

export default App;
