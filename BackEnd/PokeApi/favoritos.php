<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if($_SERVER["REQUEST_METHOD"] == "OPTIONS"){
    http_response_code(200);
    exit;
}

require_once "Db.class.php";

$db = new Db();
$db->conectar();
$db->setTabela("favoritos");

$method = $_SERVER["REQUEST_METHOD"];

if($method == "GET"){

    $id_usuario = $_GET["id_usuario"] ?? null;

    if(!$id_usuario){
        echo json_encode([]);
        exit;
    }

    $favoritos = $db->consultar("*", "id_usuario = $id_usuario");

    echo json_encode($favoritos);
    exit;
}

if($method == "POST"){

    $dados = json_decode(file_get_contents("php://input"), true);

    $db->gravar([
        "id_usuario" => $dados["id_usuario"],
        "pokemon_id" => $dados["pokemon_id"],
        "nome" => $dados["nome"],
        "imagem" => $dados["imagem"],
        "tipo" => $dados["tipo"],
        "descricao" => $dados["descricao"]
    ]);

    echo json_encode([
        "success" => true
    ]);

    exit;
}

if($method == "PUT"){

    $dados = json_decode(file_get_contents("php://input"), true);

    $db->alterar( "id = ".$dados["id"], ["descricao" => $dados["descricao"]]);

    echo json_encode(["success" => true]);

    exit;
}

if($method == "DELETE"){

    $dados = json_decode(file_get_contents("php://input"), true);

    $id = $dados["id"] ?? null;

    if(!$id){

        echo json_encode(["success" => false]);

        exit;
    }

    $db->excluir("id = $id");
    echo json_encode(["success" => true]);
    exit;
}

?>