
            <?php

            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Headers: *");
            header("Access-Control-Allow-Methods: *");
            
            include 'DbConnect.php';
            $objDb = new DbConnect;
            $conn = $objDb->connect();
            
            $method = $_SERVER['REQUEST_METHOD'];
            switch($method) {
               
            
                    
                case "POST":
                    $user = json_decode( file_get_contents('php://input') );
                    $email= $user->email;
                    $pass=$user->password;
                    $sql ="SELECT * FROM users WHERE email  ='$email' AND pass='$pass'";
                    $stmt = $conn->prepare($sql);
                    $response=$stmt->execute();
        
                 
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($users);
                    break;
            
             
            }