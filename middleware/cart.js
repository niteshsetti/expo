const carts =(fetchid)=>{
var hid= document.getElementById("hidden").value;
if(na.includes(fetchid))
{
    Swal.fire({
        position: 'top-center',
        icon: 'warning',
        title: 'Item Already In Cart !!',
        showConfirmButton: false,
        timer: 1500
    });
}
else{
na.push(fetchid);
var cart_array={
    "cart":na
 }
 db.collection("users").doc(hid).update(cart_array).then(()=>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Added to Cart Successfully !!',
        showConfirmButton: false,
        timer: 1500
    });
 });
}
}