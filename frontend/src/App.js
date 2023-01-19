import {BrowserRouter, Routes, Route} from "react-router-dom";
import OrganizacionList from "./components/OrganizacionList";
import AddOrganizacion from "./components/AddOrganizacion";
import EditOrganizacion from "./components/EditOrganizacion";
import PersonalList from "./components/PersonalList";
import AddPersonal from "./components/AddPersonal";
import EditPersonal from "./components/EditPersonal";
import ProductosList from "./components/ProductosList";
import AddProductos from "./components/AddProductos";
import EditProductos from "./components/EditProductos";
import MensajectList from "./components/MensajeList";
import AddMensaje from "./components/AddMensaje";
import EditMensaje from "./components/EditMensaje";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrganizacionList/>}/>
          <Route path="/add" element={<AddOrganizacion/>}/>
          <Route path="/edit/:idorganizacion" element={<EditOrganizacion/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalList/>}/>
          <Route path="/add" element={<AddPersonal/>}/>
          <Route path="/edit/:idpersonal" element={<EditPersonal/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductosList/>}/>
          <Route path="/add" element={<AddProductos/>}/>
          <Route path="/edit/:codigo" element={<EditProductos/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MensajectList/>}/>
          <Route path="/add" element={<AddMensaje/>}/>
          <Route path="/edit/:idmensaje" element={<EditMensaje/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
