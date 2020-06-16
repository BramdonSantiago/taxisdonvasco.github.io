(function() {
    const menuHamburguesa = document.getElementById('menu-movil');
    const botonCerrarMenuNavegacion = document.getElementById('cerrar-menu-navegacion');
    const MenuNavegacion = document.getElementById('menu-navegacion');
    
    menuHamburguesa.addEventListener("click", abrirMenuNavegacion);
    botonCerrarMenuNavegacion.addEventListener("click", cerrarMenuNavegacion);

    function abrirMenuNavegacion() {
        MenuNavegacion.classList.add("abrir");
    }

    function cerrarMenuNavegacion() {
        MenuNavegacion.classList.remove("abrir");
    }
})()