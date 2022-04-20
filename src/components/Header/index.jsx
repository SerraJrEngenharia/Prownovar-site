import { Link } from 'react-router-dom'

import "./style.css";


import { PrownovarLogo } from '@/components/PrownovarLogo';
import { useEffect } from 'react';


export default function Header(props){

    useEffect(() => {
        window.addEventListener('scroll', isFixed);
        return () => {
            window.removeEventListener('scroll', isFixed);
        };
    });


     const isFixed = (e) => {
        const header = document.querySelector('.header-container');
        const headerImg = document.querySelector(".header-container-logo");

        const scrollTop = window.scrollY;
        scrollTop >= header.clientHeight * 0.05 ? headerImg.classList.add('header-container-logo-fixed') : headerImg.classList.remove('header-container-logo-fixed') 
        scrollTop >= header.clientHeight * 0.05 ? header.classList.add('header-container-fixed') : header.classList.remove('header-container-fixed');
    };
    
    return(
        <header className="header-container">
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
        </header>
    )
}
