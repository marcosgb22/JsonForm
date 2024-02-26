<?php

// Establecer encabezados para permitir el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Simular una base de datos de productos
$products = array(
    array("id" => 1, "name" => "Producto 1", "price" => 10),
    array("id" => 2, "name" => "Producto 2", "price" => 20),
    array("id" => 3, "name" => "Producto 3", "price" => 30)
);

// Devolver la respuesta en formato JSON
echo json_encode($products);