
const fields = document.querySelectorAll(".textb input");
const btn = document.querySelector(".btn");
const password = document.querySelectorAll(".show-password");

function check() {
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value != "") {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    } 
}

for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener("keyup", check);
}


document.querySelector(".show-password").addEventListener("click" , 
function(){
    if(this.classList[2] == "fa-eye-slash"){
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        fields[1].type = "text";
    }else {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        fields[1].type = "password";
    }
}
)