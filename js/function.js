// USAR MODO ESTRICTO

"use strict"

// Crear constantes y variables

const firstname = document.getElementById('firstname')
const secondname = document.getElementById('secondname')
const iconMore = document.querySelector('.conoceme__arrow i')
const conMore = document.querySelector('.conoceme__option')
let mediaQuery = window.matchMedia('(max-width: 600px)')
const wordGit = document.getElementById('language-git')
const optionsNumbers = document.getElementsByClassName('option-number');
const inputSearchBook = document.querySelector('.search-book');
const buttonBuscar = document.querySelector('.button-search');
const relojHours = document.getElementById('reloj-hour')
const relojMinutes = document.getElementById('reloj-minutes')
const relojSeconds = document.getElementById('reloj-seconds')
let numGenerado;

const wordsSQL = ['SELECT', 'SQL', 'INTO TO', 'UPDATE', 'AS', 'DELETE', 'UNION']

// CREAR FUNCIONES

const toggleMore = () => {
    if (conMore.style.display === 'none' || !conMore.style.display) {
        conMore.style.display = 'flex';
        iconMore.style.transform = 'rotate(180deg)';
        iconMore.style.transition = 'transform 500ms ease';
    } else {
        conMore.style.display = 'none';
        iconMore.style.transform = 'rotate(0)';
        iconMore.style.transition = 'transform 500ms ease';
    }
};

const numAleatorio = arr => {
    let num = Math.floor(Math.random() * arr.length);
    return num
}

const hoverNames = (element, nuevo, ant) =>{
    element.textContent = nuevo
    element.addEventListener('mouseout', ()=> {element.textContent = ant})
}

const animationsGit = (nameanimation, text) => {
    wordGit.style.animationName = nameanimation
    wordGit.style.animationDuration = '1s'
    wordGit.style.animationDirection = 'alternate'
    wordGit.style.animationTimingFunction = 'ease-in-out'
    wordGit.style.animationIterationCount = 'infinite'
    wordGit.textContent = text
}

const createOptions = cant => {
    const contFather = document.getElementById('numbers-posibles');
    const fragment = document.createDocumentFragment();

    contFather.innerHTML = '';

    cant = parseInt(cant)

    for (let i = 1; i <= cant; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        fragment.appendChild(option);
    }

    contFather.appendChild(fragment);
};

const generateNumber = num => Math.floor(Math.random()*num);

iconMore.addEventListener('click', toggleMore);

if (mediaQuery.matches) {
    iconMore.addEventListener('click', toggleMore);
} else {
    iconMore.addEventListener('mouseover', toggleMore);
    conMore.addEventListener('mouseleave', toggleMore);
}

firstname.addEventListener('mouseover', ()=>hoverNames(firstname, 'Conocimientos', 'Jesús'))

secondname.addEventListener('mouseover', ()=>hoverNames(secondname, 'Experimentos', 'Sánchez'))

// APARTADO CONOCIMIETOS

document.getElementById('language-html').textContent = '<HTML />';

document.getElementById('language-sql').addEventListener('click', ()=> {
    let numGen = numAleatorio(wordsSQL)
    document.getElementById('language-sql').textContent = wordsSQL[numGen]
})

wordGit.addEventListener('click', ()=>{
    let versions = [
        ['rebotar', 'Versión 1'],
        ['aparecer', 'Versión 2'],
        ['desplazar', 'Versión 3'],
        ['arcoiris', 'Versión 4'],
        ['null', 'GIT']
    ]
    let numAl = numAleatorio(versions)
    animationsGit(versions[numAl][0], versions[numAl][1])
})

// Exp find-number

for(let i = 0; i < optionsNumbers.length; i++) {
    optionsNumbers[i].addEventListener('click', e=>{
        let cantidaOpt = e.target.textContent;
        createOptions(cantidaOpt)
        numGenerado = generateNumber(cantidaOpt)
    })
}

document.getElementById('send-number').addEventListener('click', ()=> {
    const numInsert = document.getElementById('numbers-posibles').value;
    let numInsertInt = parseInt(numInsert);

    if (numInsertInt > numGenerado) {
        swal("Reinténtalo", `El número ${numInsertInt} es mayor al número generado`, "info");
    }else if (numInsertInt < numGenerado) {
        swal("Reinténtalo", `El número ${numInsertInt} es menor al número generado`, "info");
    }else if (numInsertInt == numGenerado) {
        swal("Correcto", `El número ${numInsertInt} coincide con el generado`, "success");
    }else if (!numInsertInt) {
        swal("Oh!", `No has seleccionado ningún número`, "warning");
    }else {
        swal("Error", 'Ha ocurrido un error no contemplado', "warning");
    }
})

document.getElementById('reload-number').addEventListener('click', ()=>{
    const contNumbers = document.getElementById('numbers-posibles')
    contNumbers.innerHTML = '';
    const optionBase = document.createElement('option')
    optionBase.textContent = 'Selecciona un número límite';
    contNumbers.appendChild(optionBase)
})

// BUSCAR LIBROS

buttonBuscar.addEventListener('click', (event) => {
    event.preventDefault();

    let url = `https://www.google.com/search?q=${inputSearchBook.value}+filetype%3Apdf&oq=${inputSearchBook.value}+filetype%3Apdf&gs_lcrp=EgZjaHJvbWUyBggAEEUYQDIGCAEQRRg5MgYIAhAAGEAyBggDEAAYQDIGCAQQABhA0gEKMTIwMTY1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8`;
    
    window.open(url, '_blank');

    inputSearchBook.value = '';
});

inputSearchBook.addEventListener('keydown', tecla => {
    if(tecla.keyCode === 13) {
        buttonBuscar.click(); 
    }
});

// RELOJ

const addZero = num => {
    const cantNum = num.toString().length;
    let numReturn;

    if(cantNum < 2) {
        numReturn = `0${num}`;
        return numReturn;
    }else {
        return num
    }
}

setInterval(()=>{
    const time = new Date;

    const hourAddZero = addZero(time.getHours())
    const minutesAddZero = addZero(time.getMinutes())
    const secondsAddZero = addZero(time.getSeconds())

    relojHours.textContent = hourAddZero + ':';
    relojMinutes.textContent = minutesAddZero + ':';
    relojSeconds.textContent = secondsAddZero;
}, 1000)

// ENVIAR CORREO

const asunt = document.getElementById('asunto');
const msg = document.getElementById('mensaje');

const submitMail = document.querySelector('.submit-mail')

submitMail.addEventListener('click', e =>{
    e.preventDefault()

    const asuntRequest = asunt.value;
    const msgRequest = msg.value;

    window.location.href = `mailto:jesusprogramador3@gmail.com?subject=${asuntRequest}&body=${msgRequest}`;

    asunt.value = '';
    msg.value = '';
})

// INTERACCIÓN DEL FOOTER

const elementoInicio = document.querySelector('.inicio');
const elementoFooterButton = document.querySelector('.footer-button');

const opciones = {
  root: null, 
  rootMargin: '0px',
  threshold: 0.5 
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elementoFooterButton.style.display = 'none';
    } else {
      elementoFooterButton.style.display = 'inline';
    }
  });
}, opciones);

observer.observe(elementoInicio);