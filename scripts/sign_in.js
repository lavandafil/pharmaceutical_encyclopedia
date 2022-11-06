let auth_cont = document.getElementById('auth_container');
let reg_cont = document.getElementById('reg_container');
let pass_t = document.getElementById('pass_trouble');
let form_p = document.getElementById('form_prob');
let form_res = document.getElementById('form_reset');
let last_et = document.getElementById('last_et');

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
    form_res.style.display = 'block';
}
function showLast(){
    pass_t.style.height = '290px';
    form_res.style.display = 'none';
    last_et.style.display = 'block';
}