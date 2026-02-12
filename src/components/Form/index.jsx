import { useState } from "react";

const Formulario = () => {
    const [portugues, setPortugues] = useState(0);
    const [matematica, setMatematica] = useState(0);
    const [ciencias, setCiencias] = useState(0);
    let [nome, setNome] = useState("");
    const alterarnome = (evento) => {
        setNome(estadoAnterior => {
            console.log( estadoAnterior);
            return evento.target.value;
        });
    }
    
    const resultado =() =>{
        const soma = portugues + matematica + ciencias;
        const media = soma / 3;



    if (media >= 7) {
        return(<p> Parabens {nome} Voce esta Aprovado</p>) 
    } else if (media >= 5) {
        return(<p>{nome} Voce esta em Recuperação</p>)
    } else {
        return(<p>{nome} Voce esta Reprovado</p>)
    }
}

    return (
        <>
            <form>
                <input type="text" placeholder="Nome Completo" onChange={alterarnome}/>
                <input type="number" placeholder="Nota Portugues" onChange={evento => setPortugues(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Nota Matematica" onChange={evento => setMatematica(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Nota Ciencias" onChange={evento => setCiencias(parseInt(evento.target.value))}/>
            {resultado()}
            </form>

        </>
    );
};

export default Formulario;
