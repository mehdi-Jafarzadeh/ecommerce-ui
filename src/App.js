import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route , Routes } from "react-router-dom";
import Homepage from "./components/pages/Home/Homepage"
import Shop from "./components/pages/Shop/shop"
import Contact from "./components/pages/contact/contact"
import Auth from "./components/pages/auth/Auth"
import Card from "./components/pages/card/Card"

function App() { return (
  <div className="App">
      
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/card" element={<Card/>}/>
        </Routes>  
      </main>
      
     <Footer /> 
 
     </div>
    );
}

export default App;
