(function() {
    const iconoRefresh = document.getElementById('icono-refresh');
    const testimoniosOcultos = document.getElementById('testimonios-ocultos');

    iconoRefresh.addEventListener("click", cargarTestimonios);

    function cargarTestimonios() {
        iconoRefresh.classList.add("active");
        setTimeout(() => {
            testimoniosOcultos.classList.remove("oculto");
            testimoniosOcultos.classList.add("activo");
            iconoRefresh.classList.add("ocultar");
        }, 2000);
        
    }
})()