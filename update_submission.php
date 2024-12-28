<?php
// Database connection details
$server = "sql304.infinityfree.com";
$username = "epiz_29531614";
$password = "fgXAvJrcgVDcBw";
$database = "epiz_29531614_scounter";

// Connect to the database
$conn = new mysqli($server, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Update the submissions count
$sql = "UPDATE submissions SET count = count + 1 WHERE id = 1"; // Assuming a table named `submissions` and an entry with `id = 1`

if ($conn->query($sql) === TRUE) {
    // Retrieve the updated count
    $result = $conn->query("SELECT count FROM submissions WHERE id = 1");
    $row = $result->fetch_assoc();
    echo json_encode(["success" => true, "count" => $row['count']]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>
