<?php
// Configuración de errores para producción
error_reporting(0);
ini_set('display_errors', 0);

// Configuración de la Base de Datos
define('DB_HOST', 'localhost');
define('DB_USER', 'nombre_usuario'); // Reemplazar
define('DB_PASS', 'password_secreto'); // Reemplazar
define('DB_NAME', 'nombre_db'); // Reemplazar

// Headers de CORS (Ajustar en producción)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}
?>
