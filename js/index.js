
const fields = document.querySelectorAll(".textb input");
const btn = document.querySelector(".btn");

/* fonction qui vérifie si les champs du formulaire ne sont pas vides et change le bouton*/
function check() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value != "") {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    } 
}

/* ecouteur évenement sur chaque champs qui déclenche la fonction check */
for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("keyup", check);
}

/* écouteur d'événements pour rendre lisible les password */
document.querySelector(".show-password").addEventListener("click" , 
function(){
    if(this.classList[2] == "fa-eye-slash"){
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        for (let i = 1; i < fields.length; i++) {
            fields[i].type = "text";
        }
    }else {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        for (let i = 1; i < fields.length; i++) {
            fields[i].type = "password";
        }
    }
}
)