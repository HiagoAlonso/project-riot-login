const inputs = document.querySelectorAll('.input')

const handlefocus = ({ target }) =>{ //Uma variada é definida com a função anônima. E pegará o elemento emissor de dentro do evento emitido.
    const span = target.previousElementSibling //Seleciona o elemento filho anterior ao elemento que emitiu o evento.
    span.classList.add('span-active')
}

const handlefocusOut = ({ target }) =>{

    if(target.value === ""){ //Caso não tenha nenhum conteúdo, ele remove a classe.
        const span = target.previousElementSibling
        span.classList.remove('span-active')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handlefocus)) //Para cada input ele vai criar um EventListener, no evento Focus, e vai chamar a função Handlefocus.
inputs.forEach((input) => input.addEventListener('blur', handlefocusOut))
