<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
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

$nome = $dados["nome"];
$email = $dados["email"];
$senha = md5($dados["senha"]);

$verifica = $db->consultar("*", "email = '$email'");

if(count($verifica) > 0){

    echo json_encode(["success" => false]);

}else{

    $db->gravar([
        "nome" => $nome,
        "email" => $email,
        "senha" => $senha
    ]);

    echo json_encode(["success" => true]);

}

?>