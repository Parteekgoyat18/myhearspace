import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import OurListener from "./Pages/OurListener";
import Blogs from "./Pages/Blogs";
import ScrollToTop from "./Componets/ScrollToop";
import ListnerDesc from "./Pages/ListnerDesc";
import Blogdesc from "./Pages/blogdesc";


function App() {




  return (
    <Router>
      <ScrollToTop/>
      <Routes>       
        <Route path='/' element={<Home/>} />
        <Route path="/ourListener" element={<OurListener/>}/>  
        <Route path="/blogs" element={<Blogs/>}/>
         <Route path="/ListnerDesc" element={<ListnerDesc/>}/>
         <Route path="/Blogdesc" element={<Blogdesc/>}/>
      </Routes>
    </Router>

  )
}

export default App
