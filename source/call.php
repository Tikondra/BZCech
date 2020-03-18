<?php
$to      = 'info@bzcekh.ru, makarovt_t@mail.ru, tikondra47@gmail.com';//
$subject = 'Новая заявка с сайта Бизнес ЦЕХ';
$phone = $_POST['phone'];
$headers = 'From: info@bzcekh.ru' . "\r\n" .
    'Reply-To: info@bzcekh.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (isset($_POST['name']))     $message  = "Имя: {$_POST['name']}\r\n";
if (isset($_POST['phone']))    $message .= "Телефон: {$_POST['phone']}\r\n";
if (isset($_POST['callback'])) $message .= "Способ связи: {$_POST['callback']}\r\n";
if (isset($_POST['mail']))     $message .= "Почта: {$_POST['mail']}\r\n";
if (isset($_POST['tel']))      $message .= "Телефон мессенджера: {$_POST['tel']}\r\n";
if (isset($_POST['telegram'])) $message .= "Телеграм: {$_POST['telegram']}\r\n";
if (isset($_POST['type']))     $message .= "Тип сайта: {$_POST['type']}\r\n";
if (isset($_POST['style']))    $message .= "Есть ли свой стиль: {$_POST['style']}\r\n";
if (isset($_POST['lvl']))      $message .= "Сложность дизайна: {$_POST['lvl']}\r\n";
if (isset($_POST['info']))     $message .= "Дополнительная информация: {$_POST['info']}\r\n";

mail($to, $subject, $message, $headers);

?>
