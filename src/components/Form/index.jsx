import { useState,useEffect } from "react";

const Formulario = () => {
    const [portugues, setPortugues] = useState(0);
    const [matematica, setMatematica] = useState(0);
    const [ciencias, setCiencias] = useState(0);
    let [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");

    const alterarnome = (evento) => {
        setNome(estadoAnterior => {
            console.log( estadoAnterior);
            return evento.target.value;
        });
    }
    
useEffect(() => {

     // só calcula se todas as notas forem maiores que 0
if (portugues > 0 && matematica > 0 && ciencias > 0) {
    const soma = portugues + matematica + ciencias; 
    const media = soma / 3;



    if (media >= 7) { 
        setMensagem(`Parabéns ${nome}, você está Aprovado`); 
    } else if (media >= 5) {
        setMensagem(`${nome}, você está em Recuperação`);
    } else { setMensagem(`${nome}, você está Reprovado`); 
} } }, [portugues, matematica, ciencias, nome]);
// dependências: sempre que mudar alguma nota ou o nome, recalcula

    return (
        <>
            <form>
                <input type="text" placeholder="Nome Completo" onChange={alterarnome}/>
                <input type="number" placeholder="Nota Portugues" onChange={evento => setPortugues(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Nota Matematica" onChange={evento => setMatematica(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Nota Ciencias" onChange={evento => setCiencias(parseInt(evento.target.value))}/>
            {mensagem && <p>{mensagem}</p>}
            </form>

        </>
    );
};

export default Formulario;
