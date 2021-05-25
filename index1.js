

// đăng kí
localStorage.setItem('userData', JSON.stringify([]));

let nutdangki = document.getElementById('nutdangki')
nutdangki.addEventListener('click',function validateForm (){
    let username = document.getElementById('tendangnhapdki').value
if (username === ""){
    alert('Tên đăng nhập không được để trống');
    return false;
} else {
    
}

let password = document.getElementById('matkhaudki').value
if (password === ""){
    alert('Mật khẩu không được để trống');
    return false;
} else {
    
}
 alert('Bạn đã đăng kí thành công')
 // đưa lên Local Storage
let data = JSON.parse(localStorage.getItem('userData'))
let user = {
    username: username,
    password: password
}
data.push(user)
localStorage.userData = JSON.stringify(data)
console.log(JSON.parse(localStorage.getItem('userData')))
 return true

})





