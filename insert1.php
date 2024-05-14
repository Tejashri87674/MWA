<?php
include "database.php";
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST["password"];
    $query=mysqli_query($connection,"INSERT INTO user(name,email,password) VALUES('$name','$email','$password')");
    if($query){
        header("location:ass4.php");
        echo "Data Inserted";
    }
    else{
        echo "error";
    }
}
?>