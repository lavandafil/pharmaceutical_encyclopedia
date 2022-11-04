let auth_cont = document.getElementById('auth_container');
let reg_cont = document.getElementById('reg_container');

function regShow(){
    auth_cont.style.display = 'none';
    reg_cont.style.display = 'block';
}
function goBack(){
    auth_cont.style.display = 'block';
    reg_cont.style.display = 'none';
}