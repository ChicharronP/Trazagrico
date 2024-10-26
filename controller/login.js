$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos
        var email = $('#email').val();
        var password = $('#password').val();

        // Expresiones regulares para validar email y contraseña
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida formato de correo electrónico
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Al menos 8 caracteres, una letra y un número

        var isValid = true; // Variable para verificar si todo es válido

        // Validar campo de email
        if (!emailRegex.test(email)) {
            $('#email').css('border-color', 'red'); // Cambiar borde a rojo si es inválido
            isValid = false;
        } else {
            $('#email').css('border-color', ''); // Restaurar color si es válido
        }

        // Validar campo de contraseña
        if (!passwordRegex.test(password)) {
            $('#password').css('border-color', 'red'); // Cambiar borde a rojo si es inválido
            isValid = false;
        } else {
            $('#password').css('border-color', ''); // Restaurar color si es válido
        }

        // Si ambos campos son válidos, ejecutar el AJAX
        if (isValid) {
            // Aquí iría una llamada AJAX para enviar los datos al servidor (usando PHP, por ejemplo)
            $.ajax({
                url: 'login.php', // Archivo PHP que maneja el proceso de autenticación
                method: 'POST',
                data: {
                    email: email,
                    password: password
                },
                success: function(response) {
                    // Manejo de la respuesta del servidor
                    if (response === 'success') {
                        alert('Inicio de sesión exitoso');
                        window.location.href = 'dashboard.html'; // Redirigir a la página de dashboard
                    } else {
                        alert('Correo o contraseña incorrectos.');
                    }
                },
                error: function() {
                    alert('Ocurrió un error en el servidor. Intenta más tarde.');
                }
            });
        } else {
            alert('Por favor, revisa los campos en rojo.');
        }
    });

    // Limpiar borde rojo al escribir en los campos
    $('#email, #password').on('input', function() {
        $(this).css('border-color', ''); // Eliminar el borde rojo al modificar el campo
    });
});
