const submit=()=>{
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var gen=document.getElementById("gender").value;
    var dob=document.getElementById("dob").value;
    var redgno=document.getElementById("redgno").value;
    var dep=document.getElementById("dep").value;
    var by=document.getElementById("by").value;
    var sec=document.getElementById("sec").value;
    var ad1=document.getElementById("ad1").value;
    var state=document.getElementById("state").value;
    var ad2=document.getElementById("ad2").value;
    var zip=document.getElementById("zip").value;
    var city=document.getElementById("city").value;
    var coun=document.getElementById("coun").value;
    var key=document.getElementById("hide").value;
    var hidden=document.getElementById("hidden").value;
    if(fname=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Firstname',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(lname=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Lastname',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(gen=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Gender',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(dob=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required DOB',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(redgno=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Redgno',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(dep=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Department',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(by=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Bachelor Year',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(sec=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Section',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(ad1=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Address',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(state=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required State',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(zip=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Zipcode',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(city=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required City',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if(coun=="")
    {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Required Country',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else{
        var details_obj={
            "Firstname":fname,
            "Lastname":lname,
            "Gender":gen,
            "Dob":dob,
            "Redgno":redgno,
            "Department":dep,
            "BachelorYear":by,
            "Section":sec,
            "Ad1":ad1,
            "State":state,
            "Ad2":ad2,
            "Zipcode":zip,
            "city":city,
            "country":coun,
            "status":1
        }
        db.collection("users").doc(key).update(details_obj).then((DocRef)=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Data Stored Successfully !!',
                showConfirmButton: false,
                timer: 1500
            })
            $.ajax({
                url:"../../../../backend/auth.php",
                method:"post",
                async:false,
                data:{
                    "hidden":hidden
                },
                success:function(data)
                {
                    console.log(data);
                }
            });
            setTimeout(function(){
                window.location.replace('basic_elements.php');
            },2000);
        }).catch((error)=>{
            console.log(error);
        });
    }

}