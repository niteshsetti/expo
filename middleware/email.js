function sendEmail(user_mail) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "nitesh.setti2001@gmail.com",
        Password: "Nitesh965@settiphp",
        To: user_mail,
        From: "nitesh.setti2001@gmail.com",
        Subject: "Welcome Project Expo",
        Body: "Thanks for registering Project-Expo.Start By exploring Project's for your FinalYear or Upload your Idea with this Website.",
    })
        .then(function (message) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Mail Send Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(message);

        });


}