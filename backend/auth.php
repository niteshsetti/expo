<?php
session_start();
include '../backend/db.php';
if(isset($_POST["email"]))
{
    $email=$_POST["email"];
    $status=0;
    $sql="insert into expostatus(Email,Status)values('$email','$status')";
    $execute=mysqli_query($connection,$sql);
    if($execute)
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
if(isset($_POST["email_check"]))
{
    $email_check=$_POST["email_check"];
    $sql="select *from expostatus where Email='$email_check'";
    $execute=mysqli_query($connection,$sql);
    @$fetch=mysqli_fetch_array($execute);
    @$get_email=$fetch['Email'];
    if($get_email == $email_check)
    {
        $_SESSION["email"]=$email_check;
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
if(isset($_POST["hidden"]))
{
    $email_check=$_POST["hidden"];
    $status=1;
    $update="update expostatus set Status='$status' where Email='$email_check'";
    $exe=mysqli_query($connection,$update);
    if($exe)
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
?>