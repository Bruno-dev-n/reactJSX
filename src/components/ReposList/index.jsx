import { useState, useEffect } from "react";
import Lottie from "lottie-react"; 
import waveLoading from "../../assets/wave-loading.json";
import style from './ReposList.module.css';
const ReposList = ({ usuario }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!usuario) {
            setError("Usuário não fornecido");
            setRepos([]);
            setLoading(false);
            return;
        }
        setLoading(true);

        fetch(`https://api.github.com/users/${usuario}/repos`)
            .then(resposta =>{ 
                if (!resposta.ok) {
                    if (resposta.status === 403) { 
                        throw new Error("Acesso negado: limite da API ou falta de autenticação"); }
                    if (resposta.status === 404) {
                        throw new Error("Usuário não encontrado");
                    } else {
                        throw new Error("Erro ao buscar repositórios");
                    }
                    throw new Error("Erro ao buscar repositórios");
                }
                return resposta.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    if(Array.isArray(resJson)){
                        setRepos(resJson);
                        setError(null);
                    } else {
                        setError(" Usuario não encontrado");
                        setRepos([]);
                    }
                    setLoading(false);//desativa o loading após 5 segundos, mesmo que a resposta seja rápida, para garantir que a animação seja exibida por um tempo mínimo
                }, 5000);
            })
            .catch(err => {
                setError(err.message);
                setRepos([]);
                setLoading(false);
            });
    }, [usuario]);

    return (
        <div className="container-ReposList">
            {loading && (
                <div className="loading-container">
                    <Lottie 
                        animationData={waveLoading} 
                        loop={true} 
                        style={{ width: 200, height: 200 }} 
                    />
                    <p>Carregando</p>
                </div>
            )}

            {usuario && !error && repos.length > 0 && <h3 className="container-ReposList-title">Lista de repositórios</h3>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul className={style.list}>
                {repos.map(repo => (
                    <li className={style.listItem} key={repo.id}>
                        <div className={style.itemName}>
                            < span>NOME:   </span> {repo.name}</div>
                        <div className={style.ItemDescription}>
                            <b>DESCRIÇÃO:   </b> {repo.description }<br/>
                            </div>
                        <div className={style.ItemLanguage}>
                            <b>LINGUAGEM: </b> {repo.language}<br/>
                            </div>
                            <div className={style.ItemLinkB}>
                                <b>LINK do repositório: </b> <br />
                                <a className={style.ItemLink} href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a> 
                                </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReposList;