<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    exit;
}

require_once "Db.class.php";

$db = new Db();
$db->conectar();
$db->setTabela("usuarios");

$id = $_GET["id"];

$res = $db->consultar("*", "id = $id");

echo json_encode($res[0]);

?>