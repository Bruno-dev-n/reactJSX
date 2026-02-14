import { useState } from "react";
import Perfil from "./components/Perfil";
import styles from './components/Perfil/Perfil.module.css';
//import Formulario from "./components/Form";
import ReposList from "./components/ReposList";
// import TesteAnimacao from "./components/TesteAnimacao";

function App() {
  const[usuario, setUsuario] = useState("");


  const[verFormulario, setVerFormulario] = useState(true);


  return (

    <>
      {/* <div className="App"> <h1>Teste isolado do Lottie</h1> <TesteAnimacao /> </div> */}
      <Perfil nomeUsuario={usuario} setUsuario={setUsuario}/>
      
      <ReposList usuario={usuario}/>
      {/* {verFormulario && <Formulario />}
      <button onClick={() => setVerFormulario(!verFormulario)}>Toggle Formulario</button> */}
          </>
  );
}

export default App;
