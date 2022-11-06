let auth_cont = document.getElementById('auth_container');
let reg_cont = document.getElementById('reg_container');
let pass_t = document.getElementById('pass_trouble');
let form_p = document.getElementById('form_prob');

function regShow(){
    auth_cont.style.display = 'none';
    reg_cont.style.display = 'block';
}
function goBack(){
    auth_cont.style.display = 'block';
    reg_cont.style.display = 'none';
}
function toBack(){
    pass_t.style.display = 'none';
    auth_cont.style.display = 'block';
}
function forgetPass(){
    pass_t.style.display = 'block';
    auth_cont.style.display = 'none';
}
function continueReset(){
    form_p.style.display = 'none';
}