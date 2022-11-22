<?php
    // Permite requisições de qualquer lugar ( Angular/Ionic )
    header("Access-Control-Allow-Origin: *");

    // Arquivo de conexão com banco de dados
    include 'conexao.php';
    
    $nome               = $_GET['nome'];
    $cpf                = $_GET['cpf'];
    $data_nascimento    = $_GET['data_nascimento'];
    $celular            = $_GET['celular'];
    $email              = $_GET['email']; 
    $senha              = $_GET['senha'];

    // Instrução SQL para Inserir
    $sql = "INSERT INTO usuario 
        (id_usuario,nome,cpf,data_nasc,celular,email,senha) 
        VALUES 
        (1,'{$nome}','{$cpf}','{$data_nascimento}','{$celular}','{$email}','{$senha}');
    ";

    // Executa a instrução no banco de dados
    $exec = $conexao->exec($sql);