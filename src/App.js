import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import About from "./pages/about/About"
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/hotels" element={<List/>} />
    <Route path="/hotels/:id" element={<Hotel/>} />
    <Route path="/about" element={<About/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
