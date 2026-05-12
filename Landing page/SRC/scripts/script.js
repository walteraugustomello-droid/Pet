 const formElemento = document.querySelector('.form');
 const inputsElementos =document.querySelectorAll("input");
 const textareaElemento = document.querySelector("textarea");

 formElemento.addEventListener('submit', function(event) {
        event.preventDefault();

 let valores = [];

 inputsElementos.forEach(function(input) {
    valores.push(input.value);
    //console.log(input.value);
    });
    valores.push(textareaElemento.value);
});