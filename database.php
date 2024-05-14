<?php
$host="localhost";
$user="root";
$password="";
$dbName="my_db";
$conn= new mysqli($host,$user,$password,$dbName);
if($conn-> connect_error){
    echo "Connection failed";
}
else{
    echo "connection successfully.";
}
?>