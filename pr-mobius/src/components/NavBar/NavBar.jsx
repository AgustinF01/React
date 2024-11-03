import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import 'Navbar.css';

const NavBar = () => {
    return (
        <nav class="nav">
            <div class='logo'>Mi Tienda</div>
            <ul class="navLinks">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;