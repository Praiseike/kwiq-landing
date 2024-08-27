import './App.css'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
