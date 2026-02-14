
import { useEffect, useState } from "react";
import styles from './Perfil.module.css';

const Perfil=({nomeUsuario, setUsuario})=>{
    const[perfil, setPerfil] = useState(null);

    useEffect(() => {
        if (!nomeUsuario) return; // Evita fazer a requisição se o nome do usuário estiver vazio
        fetch(`https://api.github.com/users/${nomeUsuario}`)
            .then(response => response.json())
            .then(resJson => setPerfil(resJson));
    }, [nomeUsuario]);


    return (
        <header className={styles.header}>
            <span className={styles.titulo}>Buscar usuário no GitHub</span>
        <input className={styles.input} type="text" value={nomeUsuario} onChange={(e) => setUsuario(e.target.value)}
        placeholder="Digite o nome do usuário"
        />

        {perfil && (
        <>
            <img className={styles.avatar} src={perfil?.avatar_url} alt="Avatar" />
            <h1 className={styles.tituloNomeUsuario}>{nomeUsuario}</h1>
            <p className={styles.titulo}>Bio: {perfil?.bio}</p>
        </>)}
        </header>
    )
}
export default Perfil;