import "./App.css"
import React from "react";
import AllItems from "./components/AllItems";
import Homepage from "./components/Homepage";
import AllofTheOutfits from "./components/AllofTheOutfits";
import OutfitofTheDay from "./components/OutfitofTheDay";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import MakeanOutfit from "./components/MakeanOutfit"


function App() {
  return (
    <div className="App">
      <h1></h1>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/allitems" element={<AllItems/>}/>
        <Route path="/alloutfits" element={<AllofTheOutfits/>}/>
       {/*  <Route path="/outfitoftheday" element={<OutfitofTheDay/>}/> */}
        <Route path="/newoutfit" element={<MakeanOutfit/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
