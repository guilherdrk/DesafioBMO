//Menu Mobile Hamburger
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const app = document.querySelector('#app');
const corpo = document.querySelector('body');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
    corpo.classList.toggle('over');

});

// Pop-Up Login
const popUp = document.querySelector('.popup'); 
const closeBtn = document.querySelector('.close-btn');
const signBtn = document.querySelector('.form-element button');
const loginBtn = document.querySelector('#show-login');


loginBtn.addEventListener('click', () =>{
    popUp.classList.add('active');
    // corpo.classList.toggle('over');
})

closeBtn.addEventListener('click', () =>{
    popUp.classList.remove('active');

})
signBtn.addEventListener('click', () =>{
    popUp.classList.remove('active');
    
})





const form = document.querySelector("#formulario");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#Email");
const telInput = document.querySelector("#telefone");

const popupErro = document.querySelector(".popup-erro");
const btnFecharErro = document.querySelector(".close-erro")
const btnFechar = document.querySelector(".close")

const popUpEnviado = document.querySelector(".popup-enviado");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    //Validações:

    //verificando se o(s) campo(s) estão sendo preenchidos 
    if(nameInput.value === "" || emailInput.value === "" || telInput.value === ""){
        // alert("[ERRO!!!] Por favor, preencha todos os campo(s) corretamente");
        popupErro.classList.add('active');
        corpo.classList.add('over');
        
        btnFecharErro.addEventListener('click', ()=>{
            popupErro.classList.remove('active');
            corpo.classList.remove('over');
        });
        return;
    }else{
    // Se todos os campos estiverem corretamente preenchidos, envie o form
        // alert("Entraremos em contato!!!");
        popUpEnviado.classList.add('active');
        corpo.classList.add('over');    
        
        btnFechar.addEventListener('click', ()=>{
            popUpEnviado.classList.remove('active');
            corpo.classList.remove('over');
        })
        form.submit();
    }

   ;
})









