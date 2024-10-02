<?php
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = "password1"; // Your MySQL password
$dbname = "estoredb"; // The name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
