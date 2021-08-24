import React, {createContext, useState } from 'react';

// Crear el Context

export const CategoriasContext = createContext();

// Provider, donde se encuentran las funciones y el State.

const CategoriasProvider = (props) => {

    // Crear el STATE del Context

    const [test, guardarTest] = useState('hola');

    return (
        <CategoriasContext.Provider
        value={{test, guardarTest}}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;