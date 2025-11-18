<?php
if(isset($_POST['submit'])) {
    $to = "yourgmail@gmail.com";  // Replace with your Gmail
    $subject = "New Contact Form Message";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message sent!";
    } else {
        echo "Error sending message.";
    }
}
?>
