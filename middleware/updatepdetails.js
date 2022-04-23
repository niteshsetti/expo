const update=()=>{
    var fname=document.getElementById("ufirstname").value;
    var lname=document.getElementById("ulastname").value;
    var gen=document.getElementById("ugender").value;
    var dob=document.getElementById("udob").value;
    var redgno=document.getElementById("uredgno").value;
    var dep=document.getElementById("udep").value;
    var by=document.getElementById("uby").value;
    var sec=document.getElementById("usec").value;
    var ad1=document.getElementById("uad1").value;
    var state=document.getElementById("ustate").value;
    var ad2=document.getElementById("uad2").value;
    var zip=document.getElementById("uzip").value;
    var city=document.getElementById("ucity").value;
    var coun=document.getElementById("ucoun").value;
    var key=document.getElementById("hide").value;
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
                title: 'Data Updated Successfully !!',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function(){
                window.location.replace('basic_elements.php');
            },2000);
        }).catch((error)=>{
            console.log(error);
        });
    }

}