let inp = document.querySelector('#password1');
let ey = document.querySelector('#eyes i');
ey.onclick = function(){
    if(ey.classList.replace("bi-eye-slash","bi-eye-fill")){
     inp.type = "text"
    }else{
        ey.classList.replace("bi-eye-fill","bi-eye-slash")
        inp.type = "password"
    }
}

function validate(){
    let passw = document.getElementById('password1');
    let chr = document.getElementById('char');
    let ent = document.getElementById('enter');
    let eye = document.getElementById('eyes');
    let psw =   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/;
    

    if (passw.value.match(psw)){
        eye.style.color = 'blue'
        chr.style.color = 'grey'
        ent.style.color = 'blue'
        passw.style.borderBottom = '3px solid blue'
        chr.textContent = 'Your password passed! Password rules are not meant to be broken!'
        chr.style.paddingRight = '100px'
    }else{
        chr.style.color = 'red'
        ent.style.color = 'red'
        passw.style.borderBottom = '3px solid red'
        eye.style.color = 'red'
        
    }
   
}

