import React ,{useState,useEffect} from 'react'
import './App.css';
import NewLanding from './NewLanding';
import About from './About';
import Loader from './Loader';
import Centre from './Centre';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Normal from './Normal';
// import NewLoader from './NewLoader';
function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader/>
      ) :(
        <>
      
     
      <BrowserRouter>
      <Routes>
      <Route path='/normal' element={<Normal />}/>
      <Route path='/' element={<NewLanding/>}/>
      <Route path='/centre' element={<Centre/>}/>
      <Route path='/about' element={<About/>}/>
     
      
      </Routes>
     
      </BrowserRouter>
      
      
     
      
      
        </>
      
    )}
   
     
</div>
  );
}

export default App;
