<?php
header('Content-Type: application/json');
require_once 'config.php';
// require_once 'db.php'; // Habilitar si se desea guardar en BD

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtener datos del JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validación y sanitización simple
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos los campos son obligatorios']);
    exit;
}

// Lógica de envío de email (opcional) o inserción en BD
// Ejemplo de respuesta exitosa
echo json_encode(['success' => true, 'message' => '¡Mensaje recibido! Nos contactaremos pronto.']);
?>
