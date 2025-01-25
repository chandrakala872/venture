
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavabar from './Components/TopNavabar';
import Careers from './Components/Careers';

import About from './Components/About'
import Googleform from './Components/Googleform';
import Contact from './Components/Contact';



function App() {
  return (
    <div>
      <BrowserRouter>
        
        <TopNavabar />
        {/* <Home/>
       <Contactus/>
        <About/> */}
        
    
       
        <Routes>
         
          <Route path="/" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/googleform" element={<Googleform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
