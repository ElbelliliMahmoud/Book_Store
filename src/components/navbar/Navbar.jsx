import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaBook,FaUser,FaShoppingCart,FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="book__navbar">
      <div className="book__navbar-heading">
        <Link to="/"><h1> <FaBook color="#fff" size={27} /> Bookly</h1></Link>
      </div>
      <div className="book__navbar-links">
        <div className="book__navbar-menu_desktop">
          <ul className="book__navbar-menu__list">
            <li className='p__opensans'><Link to="/"> Home</Link></li>
            <li className='p__opensans'><Link to="/book"> Book List</Link></li>
            <li className='p__opensans'><Link to="/about"> About</Link></li>
            <li className='p__opensans'><Link to="/contact"> Contact</Link></li>
          </ul>
        </div>
        <div className="book__navbar-icons">
          <Link to=""><FaHeart color="#fff" size={27} /> </Link>
          <Link to="/favorites"><FaShoppingCart color="#fff" size={27} /> </Link>
          <Link to="/signin"><FaUser color="#fff" size={27} /> </Link>
        </div>
        <div className="book__navbar-menu_mobile">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu ? (
            <div className="book__navbar-menu_container scale-up-center">
              <div className="book__navbar-menu-container_links">
                <ul className="book__navbar-menu__list" onClick={() => setToggleMenu(false)}>
                  <li className='p__opensans'><Link to="/"> Home</Link></li>
                  <li className='p__opensans'><Link to="/book"> Book List</Link></li>
                  <li className='p__opensans'><Link to="/about"> About</Link></li>
                  <li className='p__opensans'><Link to="/contact"> Contact</Link></li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
};

export default Navbar