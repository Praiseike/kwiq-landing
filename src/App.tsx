import './App.css'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init({
    duration: 1000,
    delay: 300
  });
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
