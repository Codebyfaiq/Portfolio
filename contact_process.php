<?php
include 'config.php';

$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get all values
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);
    
    // ========== NAME VALIDATION ==========
    if (empty($name)) {
        $errors[] = "Name is required";
    } elseif (!preg_match("/^[A-Za-z\s]+$/", $name)) {
        $errors[] = "Name must contain only letters and spaces";
    } elseif (strlen($name) < 2) {
        $errors[] = "Name must be at least 2 characters";
    }
    
    // ========== EMAIL VALIDATION ==========
    if (empty($email)) {
        $errors[] = "Email address is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Enter a valid email address";
    }
    
    // ========== PHONE VALIDATION ==========
    if (empty($phone)) {
        $errors[] = "Phone number is required";
    } elseif (!preg_match("/^[0-9+\-\s()]{7,20}$/", $phone)) {
        $errors[] = "Enter a valid phone number (digits, +, -, spaces only)";
    } else {
        $phoneClean = preg_replace("/[^0-9]/", "", $phone);
        if (strlen($phoneClean) < 10) {
            $errors[] = "Phone number must have at least 10 digits";
        } elseif (strlen($phoneClean) > 15) {
            $errors[] = "Phone number cannot exceed 15 digits";
        }
    }
    
    // ========== SUBJECT VALIDATION ==========
    if (empty($subject)) {
        $errors[] = "Subject is required";
    } elseif (strlen($subject) < 3) {
        $errors[] = "Subject must be at least 3 characters";
    }
    
    // ========== MESSAGE VALIDATION ==========
    if (empty($message)) {
        $errors[] = "Message is required";
    } elseif (strlen($message) < 10) {
        $errors[] = "Message must be at least 10 characters";
    }
    
    // ========== IF NO ERRORS, SAVE TO DATABASE ==========
    if (empty($errors)) {
        $name = mysqli_real_escape_string($conn, $name);
        $email = mysqli_real_escape_string($conn, $email);
        $phone = mysqli_real_escape_string($conn, $phone);
        $subject = mysqli_real_escape_string($conn, $subject);
        $message = mysqli_real_escape_string($conn, $message);
        
        $sql = "INSERT INTO contacts (name, email, phone, subject, message) 
                VALUES ('$name', '$email', '$phone', '$subject', '$message')";
        
        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('✅ Message sent successfully!'); window.location.href='index.php';</script>";
        } else {
            echo "<script>alert('❌ Database Error: " . mysqli_error($conn) . "'); window.location.href='index.php';</script>";
        }
    } else {
        $errorMessage = implode("\\n• ", $errors);
        echo "<script>alert('⚠️ Please check the following:\\n• " . $errorMessage . "'); window.location.href='index.php';</script>";
    }
}
?>