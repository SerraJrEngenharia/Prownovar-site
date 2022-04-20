import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Sobre">Sobre nós</Link></li>
                <li><Link to="/Servicos">Serviços</Link></li>
                <li><Link to="/Contatos">Contatos</Link></li>
            </ul>
        </div>
    )
}
