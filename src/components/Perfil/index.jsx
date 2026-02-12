import'./perfil.css'
const Perfil=({avatar,nome}) => {

    return (
        <div >
            <img className="perfil-avatar" src={avatar} alt="Avatar" />
            <p>Nome: {nome}</p>
        </div>
    )
}
export default Perfil;