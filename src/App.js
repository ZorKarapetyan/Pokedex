import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import Pokemon from "./pages/Pokemon"
import { useState } from "react";


const App = () => {

  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pokemon/:pname" element={<Pokemon />} />
      </Routes>
  )
}

export default App;
