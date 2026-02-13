import { useState, useEffect } from "react";
const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/Bruno-Dev-n/repos")
            .then(response => response.json())
            .then(resJson => { 
                setTimeout(() => {
                    setRepos(resJson); setLoading(false); }, 4000);
            })
    }, []);

    return (
    <div>
        <h1>Meus Repositórios</h1>
        
        {loading ? <p>Carregando repositórios...</p> : null }
        <ul>
            
        {repos.map(repo => (
            <li key={repo.id}>
            <b>NOME</b>    {repo.name}<br/>
            <b>DESCRIÇÃO</b>    {repo.description}<br/>
            <b>LINGUAGEM</b>    {repo.language}<br/>
            <b>ACESSE</b>    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a><br/><hr></hr>
            </li>
            
        ))}
        </ul>
      {/* Component content */}
    </div>
    );
}

export default ReposList;