import { Link } from 'react-router-dom'
import './styles.css'
import Logo from '../../assets/logo.jpg'

function Header() {

    return (
        <header>
            <img id='logo' src={Logo} alt='logo' />
            <nav>
                <ul>
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
        </header>
    )
}

export default Header