<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Page</title>
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <link rel="stylesheet" href="../css/style.css">
</head>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js" integrity="sha512-8pbzenDolL1l5OPSsoURCx9TEdMFTaeFipASVrMYKhuYtly+k3tcsQYliOEKTmuB1t7yuzAiVo+yd7SJz+ijFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../middleware/register.js"></script>
<script src="../middleware/email.js"></script>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<style>
    .login-card {
        height: 35em;
    }

    .login-card-img {
        border-radius: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
</style>

<body>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
            <div class="card login-card">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <img src="../images/startup.jpg" alt="login" class="login-card-img">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <div class="brand-wrapper">
                                <img src="../images/logo.png" alt="logo" class="logo">
                            </div>
                            <p class="login-card-description">Register to Expo</p>
                            <form autocomplete="off" id="form">
                                <div class="form-group">
                                    <input type="email" id="email" class="form-control" placeholder="Enter Your Email">
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" id="password" class="form-control" placeholder="New Password">
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" id="cpassword" class="form-control" placeholder="Confirm Password">
                                </div>
                                <input name="login" id="registers" class="btn btn-block login-btn mb-4 btn btn-success" type="button" value="Register-Expo" style="background-color:#FF8C00;border:none;" onclick="register()">
                            </form>
                            <p class="login-card-footer-text">Don't have an account? <a href="index.php" class="text-reset">Login to Expo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>