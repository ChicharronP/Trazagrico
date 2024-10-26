$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos
        var nombre = $('#nombre_agricultor').val();
        var telefono = $('#telefono').val();
        var correo = $('#correo').val();
        var ubicacion = $('#ubicacion').val();

        // Validaciones simples
        if (!nombre || !telefono || !correo || !ubicacion) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Aquí se simula el envío de la solicitud
        $.ajax({
            url: 'registrar_agricultor.php', // Archivo PHP que maneja el registro
            method: 'POST',
            data: {
                nombre: nombre,
                telefono: telefono,
                correo: correo,
                ubicacion: ubicacion
            },
            success: function(response) {
                // Manejo de la respuesta del servidor
                if (response === 'success') {
                    alert('Solicitud enviada con éxito. Espera la validación del administrador.');
                    $('#registrationForm')[0].reset(); // Reiniciar el formulario
                } else {
                    alert('Ocurrió un error al enviar la solicitud.');
                }
            },
            error: function() {
                alert('Ocurrió un error en el servidor. Intenta más tarde.');
            }
        });
    });
});