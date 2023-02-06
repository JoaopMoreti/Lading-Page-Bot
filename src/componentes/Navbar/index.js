import './Navbar.css'
import {ImMenu} from 'react-icons/im'

const Navbar = () => {
  return (
    <header className='navbar'>
      <div>
        <nav>
          <input type="checkbox" id='check'/>
          <label for='check' className='checkbtn'>
            <ImMenu/>
          </label>
          <label className='logolabel'> <img className='logo' src={"/img/logo.png"}/>  </label>
          <ul>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Sobre nós</a></li>
            <li><a href='#'>Info</a></li>
            <li><a href='#'>Contato</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
export default Navbar