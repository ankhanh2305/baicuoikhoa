let nutdangnhap = document.getElementById('nutdangnhap')
nutdangnhap.addEventListener('click', function() {
    validateForm()
    logIn()
})

function validateForm (){
    var tdndnp = document.getElementById('tendangnhapdnp').value
    if (tdndnp === ""){
        alert('Chưa nhập tên đăng nhập');
        return false;
    } 
    var mkdnp = document.getElementById('matkhaudnp').value
    if (mkdnp === ""  ){
        alert('Chưa nhập mật khẩu');
        return false;
    } 
}
function logIn() {
    var tdndnp = document.getElementById('tendangnhapdnp').value
    var mkdnp = document.getElementById('matkhaudnp').value
    
    let data = JSON.parse(localStorage.getItem('userData'))
    data.forEach(user => {
        if (user.username === tdndnp && user.password === mkdnp) {
            alert('Bạn đã đăng nhập thành công')
            close()
            open('index3.html')
            
            return true
        }else{
            alert('Sai thông tin đăng nhập')
            return false
        }
    });
}