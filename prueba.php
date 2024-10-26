<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
</head>
<body>
    <h1>Datos de la Base de Datos</h1>
    <?php
    include 'conexion.php';

    // Consulta a la base de datos
    $sql = "SELECT * FROM clientes";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        // Salida de cada fila
        while($fila = $resultado->fetch_assoc()) {
            echo "id: " . $fila["ClienteID"] . " - Nombre: " . $fila["nombre"] . "- Apellido: " .  $fila["apellido"] . "- Correo: " . $fila["email"] . "<br> <br>";
        }
    } else {
        echo "0 resultados";
    }
    $conn->close();
    ?>
</body>
</html>
