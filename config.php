
<?php
// Live InfinityFree Database Connection
$host = "sql302.infinityfree.com";        // 
$user = "if0_42331908";                  // 
$password = "XaUyImTtnQbIW"; // 
$database = "if0_42331908_portfolio_db"; // 

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>