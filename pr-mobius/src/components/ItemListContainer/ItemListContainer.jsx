import React from 'react';
import 'ItemListContainer.css';

const ItemListContainer = ({ bienvenida }) => {
    return (
        <div class="container">
            <h1>{bienvenida}</h1>
            {/* Aquí se mostrarán los productos en el futuro */}
        </div>
    );
};

export default ItemListContainer;