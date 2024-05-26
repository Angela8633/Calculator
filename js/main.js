document.addEventListener('DOMContentLoaded', function() {
    var pantalla = document.querySelector('.pantalla');
    var botones = document.querySelectorAll('.btn');
    var historialList = document.querySelector('.historial');
    var borrarHistorialBtn = document.querySelector('.borrar-historial');

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var valor = this.textContent;

            switch(valor) {
                case '=':
                    var resultado = eval(pantalla.textContent);
                    pantalla.textContent = resultado;
                    guardarOperacionEnHistorial(pantalla.textContent);
                    break;
                case 'C':
                    pantalla.textContent = '0';
                    localStorage.removeItem('lastOperation');
                    break;
                case '←':
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    break;
                default:
                    if (pantalla.textContent === '0') {
                        pantalla.textContent = valor;
                    } else {
                        pantalla.textContent += valor;
                    }
                    break;
            }
        });
    });

    function guardarOperacionEnHistorial(operacion) {
        var nuevaOperacion = document.createElement('li');
        nuevaOperacion.textContent = operacion;
        historialList.appendChild(nuevaOperacion);
    }

    function borrarHistorial() {
        historialList.innerHTML = '';
        pantalla.textContent = '0';
    }

    var ultimaOperacion = localStorage.getItem('lastOperation');
    if (ultimaOperacion) {
        pantalla.textContent = ultimaOperacion;
    }

    borrarHistorialBtn.addEventListener('click', borrarHistorial);
});




    
    