<?php
$servidor = "127.0.0.1"; // o tu dirección de servidor
$usuario = "root"; // usuario de la base de datos
$contraseña = "1234"; // contraseña de la base de datos
$baseDeDatos = "discoteca"; // nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contraseña, $baseDeDatos);

// Comprobar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");

echo "Conectado exitosamente";
?>
