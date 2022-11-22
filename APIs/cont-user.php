<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
   


        $sql = "SELECT * FROM contracts where status=1";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {

    
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $contracts = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $contracts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($contracts);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO contracts(id, contractName, officerName, employeeNumber, startdate,enddate,totalCost,companyName , companyLocation, companyEmployeeName,companyNumber) VALUES(null, :contractName, :officerName, :employeeNumber, :startdate, :enddate, :totalCost,:companyName, :companyLocation ,:companyEmployeeName ,:companyNumber)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':contractName', $user->contractName);
        $stmt->bindParam(':officerName', $user->officerName);
        $stmt->bindParam(':employeeNumber', $user->employeeNumber);
        $stmt->bindParam(':startdate', $user->startdate);
        $stmt->bindParam(':enddate', $user->enddate);
        $stmt->bindParam(':totalCost', $user->totalCost);
        $stmt->bindParam(':companyName', $user->companyName);
        $stmt->bindParam(':companyLocation', $user->companyLocation);
        $stmt->bindParam(':companyEmployeeName', $user->companyEmployeeName);
        $stmt->bindParam(':companyNumber', $user->companyNumber);
        

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

  

        case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE contracts SET   startdate =:startdate, enddate =:enddate ,  status =:status WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':startdate', $user->startdate);
            $stmt->bindParam(':enddate', $user->enddate);
            $stmt->bindParam(':status', $user->status);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM contracts WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;













    case "DELETE":
        $sql = "DELETE FROM users WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}