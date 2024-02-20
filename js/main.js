const containerModal = document.querySelector('.container-modal')
const modal = document.querySelector('.modal')
const buttonModal = document.querySelector('.button-modal')
const insertRespuesta = document.querySelector('.respuesta')
const insertResultado = document.querySelector('.resultado')
const form = document.querySelector('.form-item')

const createModal = (respuesta, resultado) => {
    containerModal.classList.add('mostrar-container-modal')
    modal.classList.add('mostrar-modal')
    insertRespuesta.textContent = respuesta
    insertResultado.textContent = resultado
    
}


buttonModal.addEventListener('click', () => {
    containerModal.classList.toggle('mostrar-container-modal')
    modal.classList.toggle('mostrar-modal')
})



form.addEventListener('submit', (event) => {
    event.preventDefault()
    let numero1 = parseFloat(document.querySelector('#numero1').value)
    let numero2 = parseFloat(document.querySelector('#numero2').value)
    let respuesta, resultado
    let operacion = document.querySelector('#operacion').value


    if (operacion === 'sumar') {
        resultado = numero1 + numero2
        respuesta = `el resultado de la suma es:`
        createModal(respuesta, resultado)
    }
    else if(operacion === 'restar'){
        resultado = numero1 - numero2
        respuesta = `el resultado de la resta es:`
        createModal(respuesta, resultado)

    }
    else if(operacion === 'multiplicar'){
        resultado = numero1 * numero2
        respuesta = `el resultado de la multiplicacion es:`
        createModal(respuesta, resultado)

    }
    else if(operacion === 'dividir'){
        resultado = numero1 / numero2
        respuesta = `el resulatado de la division es:`
        createModal(respuesta, resultado)
    }

})


