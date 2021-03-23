<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$navn = "";
$age = "";
$when = "";
$terapaut = "";
$email = "";
$tlf = "";
$content = "";

if( isset($_POST["navn"]) ) {
    $navn = $_POST[0]["navn"];
    // if not exit navn is req 
}

if( isset($_POST["content"]) ) {
    $age = $_POST[0]["age"];
}

if( isset($_POST["content"]) ) {
    $when = $_POST[0]["when"];
}

if( isset($_POST["content"]) ) {
    $terapaut = $_POST[0]["terapaut"];
}

if( isset($_POST["email"]) ) {
    $email = $_POST[0]["email"];
}

if( isset($_POST["tlf"]) ) {
    $tlf = $_POST[0]["tlf"];
}

if( isset($_POST["content"]) ) {
    $content = $_POST[0]["content"];
}


// php mailer instance
$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';

// server
$mail->isSMTP();
$mail->SMTPDebug = 0; // sett til 2 for å få error
$mail->Host = "mail.innlandethelseogfysioterapi.no";
// $mail->Port = 465;
$mail->Port = 587;
// $mail->SMTPSecure = 'ssl';
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;

//$mail->SMTPSecure = false;
//$mail->SMTPAutoTLS = false;

// authentication
$mail->Username = 'pasienterfaring@innlandethelseogfysioterapi.no';
$mail->Password = '*o=oh8~ll]sO';

// $mail->Username and this must match, otherwise "forgery"
$mail->setFrom("pasienterfaring@innlandethelseogfysioterapi.no");

// the address contact form data gets sent to
$mail->addAddress("robin.vigdal.bekkevold@gmail.com");


// if ($mail->addReplyTo($email)) {
    $mail->Subject = "Pasienterfaring - " . $navn;
    $mail->msgHTML("Navn: " . $navn . "<br>Email: " . $email . "<br>Alder: " . $age . "<br>Terapaut: " . $terapaut . "<br>Når: " . $when . "<br><br>" . $content);
    $mail->AltBody = "Navn: " . $navn . "\nEmail: " . $email . "\nAlder: " . $age . "\nTerapaut: " . $terapaut . "\nNår: " . $when .  "\n\n" . $content;

    if (!$mail->send()) {
        $msg =  "3";
        // header('Location: https://skaugogchristoffersen.no/kontakt.html?response='.$msg);
        echo json_encode(['error' => 'Kunne ikke sende. Prøv igjen senere.']);
        exit;
    } else {
        // // php mailer instance
        // $mailConfirm = new PHPMailer;
        
        // $mailConfirm->CharSet = 'UTF-8';
        // $mailConfirm->Encoding = 'base64';

        // // server
        // $mailConfirm->isSMTP();
        // $mailConfirm->SMTPDebug = 0;  // sett til 2 for å få error
        // $mailConfirm->Host = "mail.skaugogchristoffersen.no";
        // $mailConfirm->Port = 465;
        // $mailConfirm->SMTPSecure = 'ssl';
        // $mailConfirm->SMTPAuth = true;

        // // authentication
        // $mailConfirm->Username = 'kontaktskjema@skaugogchristoffersen.no';
        // $mailConfirm->Password = 'kontaktskjemaamundknut';

        // // $mailConfirm->Username and this must match, otherwise "forgery"
        // $mailConfirm->setFrom("kontaktskjema@skaugogchristoffersen.no");

        // // the address contact form data gets sent to
        // $mailConfirm->addAddress($email);

        // $mailConfirm->Subject = "Skaug og Christoffersen";
        // $mailConfirm->msgHTML("Takk for din forespørsel. Vi tar kontakt så fort som mulig.<br>Vennlig hilsen Skaug og Christoffersen. <br><br> Informasjonen vi har mottatt: <br> Navn: " . $navn . "<br>Email: " . $email ."<br>Tlf: " . $tlf . "<br><br>" . $content);
        // $mailConfirm->AltBody = "Takk for din forespørsel. Vi tar kontakt så fort som mulig.\nVennlig hilsen Skaug og Christoffersen. \n\n Informasjonen vi har mottatt: \n Navn: " . $navn . "\nEmail: " . $email . "\nTlf: " . $tlf . "\n\n" . $content;

        // if (!$mailConfirm->send()) {
        //     $msg = "1";
        //     header('Location: https://skaugogchristoffersen.no/kontakt.html?response='.$msg);
        //     exit;
        // }
 

        // $msg = "1"; 
        // header('Location: https://skaugogchristoffersen.no/kontakt.html?response='.$msg);

        echo json_encode(['success' => 'Sending vellykket. Takk for din pasienterfaring.']);
        exit;
    }
// }
// else {
//     $msg = "2";
//     // header('Location: https://skaugogchristoffersen.no/kontakt.html?response='.$msg);
//     exit;
// }
