<?php
    $name = $_POST['name'];
	$sname = $_POST['sname'];
	$phone = $_POST['phone'];
    //$email = $_POST['email'];
    

	$to = "spacetemple@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	
	$subject = "Заявка з сайту";

	
	$msg="
    Имя: $name /n
	Фамилия: $sname /n
    
    Телефон: $phone /n";
    
   
	
    mail($to, $subject, $msg, "From:Грайлик");

?>


