import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LandingPage } from './Pages/LandingPage';
import styles from './css/App.module.css';
import { GridCards } from "./components/GridCards";
import { About } from './Pages/About'
import { Blog } from './Pages/Blogs/Blog'
import { Contact } from "./Pages/Contact";
import { Privacy } from "./Pages/Privacy";
import { ShoppingCart } from "./Pages/ShoppingCart";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  return (
    <Router>

      <Header />

      <main className={styles.main}>
        
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/new' element={<GridCards title='New'/>} />
          <Route path='/jackets' element={<GridCards title='Jackets'/>} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/sweatshirts' element={<GridCards title='Sweatshirts'/>} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='*' element={<Navigate replace to='/' />}></Route>
        </Routes>
    
      </main>
      <Footer />

    </Router>
  );
}

export default App;
