<?php
if ( empty(session_id()) )
	session_start();
 
$_SESSION['debug'] = __file__;
$_SESSION['index'] = isset($_SESSION['index']) ? $_SESSION['index']++: 1;
var_dump($_SESSION['debug'],$_SESSION['index']);
?>