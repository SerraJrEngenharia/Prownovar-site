import { Link } from 'react-router-dom'

import "./style.css";


import { PrownovarLogo } from '@/components/PrownovarLogo';



export default function Header(props){
    return(
        <div className="header-container">
            <div className="header-container-logo">
                <PrownovarLogo />
            </div>
            <nav className="header-container-nav">
                <ul className="header-container-nav-ul">
                    <li className="header-container-nav-ul-li">{ props.path == "home" ? <strong><Link to="/">Home</Link></strong> : <Link to="/">Home</Link>}</li>
                    <li className="header-container-nav-ul-li">{ props.path == "aboutUs" ? <strong><Link to="/sobre">Sobre nós</Link></strong> : <Link to="/sobre">Sobre nós</Link>}</li>
                    <li className="header-container-nav-ul-li">{ props.path == "services" ? <strong><Link to="/servicos">Serviços</Link></strong> : <Link to="/servicos">Serviços</Link>}</li>
                    <li className="header-container-nav-ul-li">{ props.path == "contact" ? <strong><Link to="/contatos">Contatos</Link></strong> : <Link to="/contatos">Contatos</Link>}</li>
                </ul>
            </nav>
        </div>
    )
}
