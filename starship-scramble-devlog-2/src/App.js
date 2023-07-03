import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Page/Home';
import Feature from './Page/Feature';
import { useEffect } from 'react';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Inner />
      </Router>
    </>
  );
}
function Inner()
{
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname]);

  return (       
   <Routes>
    <Route path="/Starship-Scramble-devlog-2" element={<Home />} />
    <Route path="/feature" element={<Feature />} />
  </Routes>)
}
export default App;
