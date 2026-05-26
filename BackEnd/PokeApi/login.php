<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once "Db.class.php";

$db = new Db();
$db->conectar();
$db->setTabela("usuarios");

$dados = json_decode(file_get_contents("php://input"), true);

$email = $dados["email"];
$senha = md5($dados["senha"]);

$res = $db->consultar("*", "email = '$email' AND senha = '$senha'");

if(count($res) > 0){

    echo json_encode([
        "success" => true,
        "usuario" => $res[0]
    ]);

}else{

    echo json_encode(["success" => false]);

}

?>