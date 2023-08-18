import Layout from "./Conponent/Layout";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Pagenotfound from './Pages/Pagenotfound';
import Crud from "./Pages/Crud";





function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/menu" Component={Menu}/>
        <Route path="*" Component={Pagenotfound}/>
        <Route path="crud" Component={Crud}/>





      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
