<?php

// Email message
$Name = $_POST[ 'name' ];
$Message = $_POST[ 'message' ];

$ToEmail = 'pevbog@gmail.com';
$Subjects = 'Message ' . 'no-reply';
$Body = '<div style="text-align: center; background-color: black; color: white; padding: 25px;">'.
        '<h1>From:  <span style="color: rgb(4, 224, 162);">' . $Name . '</span></h1>' .
        '<h2>Message: </h2>' .
        '<p style="font-size: 18px; color: rgb(4, 224, 162);">' . $Message . '</p>' .
        '<a href="warrior4web.com" style="color: rgb(247, 44, 138); margin-top: 50px; text-align: center;">warrior4web.com</a>' .
    '</div>';

//Email headers
$Headers = "MIME-Version: 1.0" . "\r\n";
$Headers .= "Content-Type:text/html;charset=UTF-8" ."\r\n";
// Additional headers
$Headers .= "From: " . "$Name" . "\r\n";

mail( $ToEmail, $Subjects, $Body, $Headers )

?>