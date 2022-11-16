import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LandingPage } from './Pages/LandingPage';
import styles from './css/App.module.css';
import { GridCards } from "./components/GridCards";
import { About } from './Pages/About'
import { Blog } from './Pages/Blogs/Blog'

function App() {
  return (
    <Router>

      <Header />

      <main className={styles.main}>
        
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/new' element={<GridCards title='New'/>} />
          <Route path='/jackets' element={<GridCards title='Jackets'/>} />
          <Route path='/sweatshirts' element={<GridCards title='Sweatshirts'/>} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<Navigate replace to='/' />}></Route>
        </Routes>

      </main>
      <Footer />

    </Router>
  );
}

export default App;
