<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo="hello@carlososoriosandoval.com";
    $subject="New message from website";
    $headers="From: ".$email;
    $txt="You received a message from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: ../index.html")
}

?>
