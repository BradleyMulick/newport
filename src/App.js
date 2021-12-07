
import './App.css';
import Navbar from './components/Navbar';


import { Route, useLocation } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';

import Projects from './Projects';
import Home from './Home';
import Contact from './Contact';




function App() {

  const location = useLocation();
  return (
    <div className="App">

      <Navbar />

      <SlideRoutes location={location} duration={720}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </SlideRoutes>





    </div >

  );
}

export default App;
