import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './Components/Usuario/CreateUser';
import ListUser from "./Components/Usuario/ListUser";

function App() {


  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
<Route path='/usuarios/create' element={<User/>} />
<Route path="/usuarios/listar" element={<ListUser/>} />
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
