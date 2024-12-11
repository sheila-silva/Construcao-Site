
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
/*const jobSelect = document.querySelector("#job"); */
const messageTextarea = document.querySelector("#message");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if (nameInput.value === "") {

        alert("Por favor, preencha seu nome");
        return;
    }

    //verifica se a mensagem está preenchida 
    if (messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

    //verifica se o e-mail está preenchido e se é válido.
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("por favor, preencha o seu e-mail");
        return;
    }


    //se todos os campos estiverem corretamente preenchidos, envie o form.
    form.submit ();

});

// função que valida e-mail 
function isEmailValid(email) {

        //uma regex para validar e-mail 
        const emailRegex = new RegExp (
            /^[a-zA-Z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/ 
        );

        if(emailRegex.test(email)){
            return true;
        }

        return false;


}
