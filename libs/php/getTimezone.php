<?php

	$executionStartTime = microtime(true) / 1000;
//http://api.geonames.org/timezoneJSON?formatted=true&lat=47.01&lng=10.2&username=vrunda&style=full
$url = 'http://api.geonames.org/timezoneJSON?formatted=true&lat='. $_REQUEST['lat'] . '&lng=' . $_REQUEST['lon']. '&username=vrunda&style=full';
	//$url='https://restcountries.eu/rest/v2/alpha?codes='. $_REQUEST['iso_code3'] ;
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);
    
	$result=curl_exec($ch);
    
	curl_close($ch);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $decode;
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>