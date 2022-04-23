var email_check = [];
var pass_check = [];
var docs_check=[];
const firebaseConfig = {
    apiKey: "AIzaSyCx99e55n6FeG8mzZLL9urLRaHCDhjJwBM",
    authDomain: "expo-9b1e0.firebaseapp.com",
    projectId: "expo-9b1e0",
    storageBucket: "expo-9b1e0.appspot.com",
    messagingSenderId: "1029813946781",
    appId: "1:1029813946781:web:cba3bc5003561e77d50774",
    measurementId: "G-YYBGPKHR7W",
    databaseURL: "https://expo-9b1e0-default-rtdb.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        email_check.push(doc.data().Email);
        pass_check.push(doc.data().Password);
        docs_check.push(doc.id);
    });
});
const register = () => {
    console.log(docs_check);
    var status = "absent";
    var pass_status = "absent";
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var emailpattern = /^\w+[a-zA-Z0-9\.-]+@([a-z])+(\.[a-z]{2,3})+$/g;
    if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Field is Required',
            confirmButtonColor: '#FF8C00',
        })
    }
    else if (password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Field is Required',
            confirmButtonColor: '#FF8C00',
        })
    }
    else if (cpassword == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Confirm Your Password',
            confirmButtonColor: '#FF8C00',
        })
    }
    else if (emailpattern.test(email) == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email Address Found',
            confirmButtonColor: '#FF8C00',
        })
    }
    else {
        for (var i = 0; i < email_check.length; i++) {
            var email_iterate = email_check[i];
            var pass_iterate = pass_check[i];
            if (email_iterate == email) {
                status = "present";
                break;
            }
            if (pass_iterate == md5(password)) {
                pass_status = "present";
                break;
            }
        }
        if (status == "present") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email Already Exists !!',
                confirmButtonColor: '#FF8C00',
            })
        }
        else if (pass_status == "present") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Try with Another Password',
                confirmButtonColor: '#FF8C00',
            })
        }
        else {
            if (password == cpassword) {
                var data_obj = { Email: email, Password: md5(password) };
                db.collection("users").add(data_obj).then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Expo Registration Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    sendEmail(email);
                    setTimeout(function () {
                        location.replace("../frontend/index.php");
                    }, 4000);
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
                $.ajax({
                    url:"../backend/auth.php",
                    method:"post",
                    async:false,
                    data:{
                        "email":email
                    },
                    success:function(data)
                    {
                        console.log(data);
                    }
                });
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password Do not Match',
                    confirmButtonColor: '#FF8C00',
                })
            }
        }
    }
}
