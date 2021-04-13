let nutdangki = document.getElementById('nutdangki')
nutdangki.addEventListener('click',function validateForm (){
var tdndki = document.getElementById('tendangnhapdki')
if (tdndki === ""){
    alert('Tên đăng nhập không được để trống');
    return false;
} 
var mkdki = document.getElementById('matkhaudki')
if (mkdki === ""){
    alert('Mật khẩu không được để trống');
    return false;
} else {
    console.log(mkdki)
}
 alert('Bạn đã đăng kí thành công')
 return true
})

let nutdangnhap = document.getElementById('nutdangnhap')
nutdangnhap.addEventListener('click',function validateForm (){
var tdndnp = document.getElementById('tendangnhapdnp')
if (tdndnp != tdndki){
    alert('Tên đăng nhập không tồn tại');
    return false;
} else {
    
}
var mkdnp = document.getElementById('matkhaudnp')
if (mkdnp != mkdki){
    alert('Mật khẩu sai');
    return false;
} 
 alert('Bạn đã đăng nhập thành công')
 return true
})

