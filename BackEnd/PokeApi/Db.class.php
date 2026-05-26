<?php

class Db {

    private $host;
    private $porta;
    private $usudb;
    private $nomedb;
    private $senhadb;
    private $conexao;
    private $tabela;

    function __construct(
        $host="127.0.0.1",
        $porta="3306",
        $usudb="root",
        $nomedb="pokedex",
        $senhadb="root"
    ){
        $this->host = $host;
        $this->porta = $porta;
        $this->nomedb = $nomedb;
        $this->usudb = $usudb;
        $this->senhadb = $senhadb;
    }

    public function conectar(){

        $dados = "mysql:host=".$this->host;
        $dados .= ";port=".$this->porta;
        $dados .= ";dbname=".$this->nomedb;

        try{
            $this->conexao = new PDO($dados, $this->usudb, $this->senhadb);
        }catch(PDOException $e){
            die("erro conexão");
        }
    }

    public function setTabela($tabela){
        $this->tabela = $tabela;
    }

    public function gravar($dados){

        $campos = implode(",", array_keys($dados));
        $valores = implode("','", array_values($dados));

        $sql = "INSERT INTO ".$this->tabela." (".$campos.") VALUES ('".$valores."')";

        return $this->conexao->query($sql);
    }

    public function consultar($campos="*", $where=null){

        if($where){
            $sql = "SELECT ".$campos." FROM ".$this->tabela." WHERE ".$where;
        }else{
            $sql = "SELECT ".$campos." FROM ".$this->tabela;
        }

        $res = $this->conexao->query($sql);

        $dados = [];

        if($res){
            while($row = $res->fetch(PDO::FETCH_ASSOC)){
                $dados[] = $row;
            }
        }

        return $dados;
    }

    public function excluir($where){

        $sql = "DELETE FROM ".$this->tabela." WHERE ".$where;

        return $this->conexao->query($sql);
    }

    public function alterar($where, $dados){

        $valores = [];

        foreach($dados as $key => $value){
            $valores[] = $key."='".$value."'";
        }

        $valores = implode(",", $valores);

        $sql = "UPDATE ".$this->tabela." SET ".$valores." WHERE ".$where;

        return $this->conexao->query($sql);
    }
}
?>