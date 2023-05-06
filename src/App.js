import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Button from "./Components/Button";
import Input from "./Components/Input"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/button" element={<Button/>}/>
      <Route path ="/input" element={<Input/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
