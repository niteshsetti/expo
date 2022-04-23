const loginbutton = () => {
    var login_email = document.getElementById('eemail').value;
    var login_password = document.getElementById('epassword').value;
    var email_pattern = /^\w+[a-zA-Z0-9\.-]+@([a-z])+(\.[a-z]{2,3})+$/g;
    if (login_email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Field is Required',
            confirmButtonColor: '#FF8C00',
        })
    }
    else if (login_password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Field is Required',
            confirmButtonColor: '#FF8C00',
        })
    }
    else if (email_pattern.test(login_email) == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email Address Found',
            confirmButtonColor: '#FF8C00',
        })
    }
    else {
        if (email_check.includes(login_email)) {
            var get_index = email_check.indexOf(login_email);
            var get_pass_fb = pass_check[get_index];
            var get_doc_id=docs_check[get_index];
            var convert_md5 = md5(login_password);
            if (get_pass_fb === convert_md5) {
                sessionStorage.setItem("email",login_email);
                sessionStorage.setItem("Doc",get_doc_id);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Expo Login Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                $.ajax({
                    url:"../backend/auth.php",
                    method:"post",
                    async:false,
                    data:{
                        "email_check":login_email
                    },
                    success:function(data)
                    {
                        console.log(data);
                    }
                });
                setTimeout(function () {
                    window.location.replace('../Dashboard/template/index.html');
                },2000);
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Password',
                    confirmButtonColor: '#FF8C00',
                })
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email Address Not-Found',
                confirmButtonColor: '#FF8C00',
            })
        }
    }
}