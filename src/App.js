import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LandingPage } from './Pages/LandingPage';
import styles from './css/App.module.css';

function App() {
  return (
    <Router>

      <Header />

      <main className={styles.main}>
        
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>

      </main>
      <Footer />

    </Router>
  );
}

export default App;
