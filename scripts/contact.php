<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactphone']) && !empty($_POST['contactaddress'])) {
  $to = 'dallasconcrete@yahoo.com,fugu0713@gmail.com,sterling.baldwin@gmail.com';
  $body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\nPhone: {$_POST['contactphone']}\nAddress: {$_POST['contactaddress']}\nReference: {$_POST['contactreference']}\nMessage: {$_POST['contactmessage']}\nContactTime: {$_POST['contacttime']}";
  mail($to, "New Dallasconcrete.com Form Submission", $body, "From: {$_POST['dallasconcrete@yahoo.com']}");
  }
}
?>