<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
function generateerror($message,$inform){
    http_response_code(400);
    $error = new stdClass();
    $error->error = $message;
    $error->inform = $inform;
    return json_encode($error);
}
function linkgenerated($link){
    //create http post request to adminctflvl5:1380/api containing json {"link": $link}
    $data = array('url' => $link);
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents('http://adminctflvl5:1380/lookat', false, $context);

}
if(isset($_POST["operation"])&&isset($_POST["data"])){
    $host="dbctflvl5";
    $username="root";
    $password="ctflvl5";
    $db = "root";
    $conn = new mysqli($host,$username,$password,$db);
    if($conn->connect_error){
        die(generateerror("DB error",true));
    }
    $sql="CREATE TABLE if not exists`root`.`links` (`code` TEXT NOT NULL , `link` TEXT NOT NULL ) ENGINE = InnoDB;";
    if($conn->query($sql)){
        try {
            $op = intval($_POST["operation"]);
        }
        catch (Exception $e) {
            die(generateerror("Invalid operation",true));
        }
        if(($op!==1&&$op!==2)||!is_string($_POST["data"]))
            if($op!==1&&$op!==2)
                die(generateerror("Invalid operation",false));
            else
                die(generateerror("Invalid data",false));
        else{
            switch ($op) {
                case 1:
                    $link = $conn->real_escape_string($_POST["data"]);
                    #generate random 6 char code
                    $code = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 6);
                    #ensure that code is uniqe
                    $sql = "SELECT * FROM `links` WHERE `code` = '$code'";
                    $result = $conn->query($sql);
                    while ($result->num_rows > 0) {
                        $code = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 6);
                        $sql = "SELECT * FROM `links` WHERE `code` = '$code'";
                        $result = $conn->query($sql);
                    }
                    #insert data to database
                    $sql = "INSERT INTO `links` (`code`,`link`) VALUES ('$code','$link')";
                    $conn->query($sql);
                    $response = new stdClass();
                    $response->code = $code;
                    linkgenerated($code);
                    echo(json_encode($response));
                    break;
                case 2:
                    $code = $conn->real_escape_string($_POST["data"]);
                    $sql = "SELECT * FROM `links` WHERE `code` = '$code'";
                    $result = $conn->query($sql);
                    if($result->num_rows > 0){
                        $row = $result->fetch_assoc();
                        $response = new stdClass();
                        $response->link = $row["link"];
                        echo(json_encode($response));
                    }
                    else{
                        die(generateerror("Invalid code",true));
                    }
                    break;
            }
            }


        }
    else
        die(generateerror("Table creation error",true));
}
else
    die(generateerror("Invalid request",false));

