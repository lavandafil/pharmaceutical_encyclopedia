let auth_cont = document.getElementById('auth_container');
let reg_cont = document.getElementById('reg_container');
let pass_t = document.getElementById('pass_trouble');
let form_p = document.getElementById('form_prob');
let form_res = document.getElementById('form_reset');
let last_et = document.getElementById('last_et');
let name = document.getElementById('name_field');
let pass_first = document.getElementById('pass_first');
let pass_second = document.getElementById('pass_second');
let showpass = document.getElementById('show_pass');
let pass_field = document.getElementById('pass_field');

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
function showPass(){
    if(showpass.className === 'fa-regular fa-eye eye'){
        showpass.className = 'fa-regular fa-eye-slash eye'
        pass_field.type = 'text';
    }
    else{
        showpass.className = 'fa-regular fa-eye eye';
        pass_field.type = 'password';
    }
}

function checkValid(){
let regex = RegExp('^[а-яА-ЯёЁ0-9\\s]+$ ');
}
function check(){
    let intput = name.value.replace(/[A-Za-z0-9]+/g, '');
    console.log(intput);
    name.value = intput;
}