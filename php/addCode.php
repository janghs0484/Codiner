<?php
	$myfile = fopen("../data/codesData.txt", "a");

	$uri= $_SERVER['REQUEST_URI'];

	$dataInUrl = explode('?', $uri)[1];

	$dataBlock = explode('&', $uri);

	$title = explode('=', $dataBlock[0])[1];
	$contents = explode('=', $dataBlock[1])[1];
	$codeNum = explode('=', $dataBlock[2])[1];
	$discription = substr($contents, 0, 30);

	fwrite($f, iconv( 'EUC-KR' ,'UTF-8' ,$txt_main) );

	fwrite($myfile, '│');
	fwrite($myfile, $title);
	fwrite($myfile, '│');
	fwrite($myfile, $codeNum);
	fwrite($myfile, '│');
	fwrite($myfile, $contents);
	fwrite($myfile, '│');
	fwrite($myfile, $discription);

	fclose($myfile);
	
	echo("<script>location.href='../logined_home.html';</script>");
?>