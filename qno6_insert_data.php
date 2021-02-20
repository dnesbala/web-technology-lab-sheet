<!-- Create a form which contains text box for name and email, selection list for country. Create a server side script to store the data from the form into database. -->

<?php
if (!empty($_POST)) {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "lab6";

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
        die("Connection failed " . mysqli_connect_errno());
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $country = $_POST['country'];

    $sql = "INSERT INTO person_info(name, email, country) VALUES('$name', '$email', '$country')";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo "Data inserted successfully.";
    } else {
        echo "Data not inserted" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Person Info</title>
</head>

<body>
    <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
        </div>
        <div>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
        </div>
        <div>

            <label for="country">Country</label>
            <select id="country" name="country">
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="others">Others</option>
            </select>
        </div>
        <input type="submit">
    </form>
</body>

</html>