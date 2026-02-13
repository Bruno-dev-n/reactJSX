import { useState } from "react";
import Perfil from "./components/Perfil";
import'./components/Perfil/perfil.css'
import Formulario from "./components/Form";
import ReposList from "./components/ReposList";

function App() {
  const nome = "Bruno";
  const idade = 28;
  const profissao = "Desenvolvedor";
  const hobbies = ["Ler", "Viajar", "Programar"];

  const[verFormulario, setVerFormulario] = useState(true);

  function retornanome() {
    return `Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}, Hobbies: ${hobbies.join(", ")}`;
  }

  let voce = true;

  const pessoa = {
    nome,
    idade,
    profissao,
    hobbies
  };

  return (
    <div className="perfil-container">
      <Perfil nome="Bruno" avatar="https://avatars.githubusercontent.com/u/155686844?s=400&u=8dd3afb97aafca296450b419cc88da14aecb3863&v=4"/>
      <ReposList />
      {verFormulario && <Formulario />}
      <button onClick={() => setVerFormulario(!verFormulario)}>Toggle Formulario</button>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>{retornanome()}</p>
      <p>{`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Hobbies: ${pessoa.hobbies.join(", ")}`}</p>
      <p>{voce ? "Você é verdadeiro" : "Você é falso"}</p>
    </div>
  );
}

export default App;
