// import { useState } from "react"
// import Contador from "./components/Contador"
// import Formulario from "./components/Formulario"
// import Navbar from "./layouts/Navbar"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ContadorScreen from "./pages/ContadorScreen";
import ErrorScreen from "./pages/ErrorScreen";
import FormularioScreen from "./pages/FormularioScreen";
import AdminScreen from "./pages/AdminScreen";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/NavbarMenu";
import ProtectedRoute from "./routes/ProtectedRoute";


function App () {
  const [auth, setAuth] = useState(false);

  const logIn = () => {
    setAuth(true)
  }
  const logOut = () => {
    setAuth(false)
  }

  return (
    <BrowserRouter>
    <NavbarMenu logIn={logIn} logOut={logOut} auth={auth} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="contar" element={<ContadorScreen />} />
        <Route path="formulario" element={<FormularioScreen />} />
        <Route path="admin" element={
          <ProtectedRoute auth={auth}>
            <AdminScreen />
          </ProtectedRoute>
        } />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   function GetComponent(component) {
//     switch (component) {
//       case "contador":
//         return <Contador />;
//       case "formulario":
//         return <Formulario />;
//       default:
//         return <h1>Error 404 page not found</h1>;
//     }
//   }
//    const [component, setComponent] = useState(null);
//    return <Navbar setComponent={setComponent} component={component}>{GetComponent(component)}</Navbar>;
// }

// function Formulario(){
//   return <form>
//     <input type="text" placeholder="usuario" />
//     <input type="password" placeholder="password" />
//     <button>Iniciar Sesion</button>
//   </form>
// }
export default App
