import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import './styles.css'

function Footer(){

    return (
        <footer>
            <img id="logo" src={Logo} alt="logo"/>
            <nav className="footer-navigation">
                <ul className="footer-list">
                <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/curiosidades'>
                        <li>Curiosidades</li>                
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                </ul>
            </nav>
            <span>©2022 Todos os direitos reservados <br /> Desenvolvido por Reinaldo Alves</span>
        </footer>
    )
}

export default Footer