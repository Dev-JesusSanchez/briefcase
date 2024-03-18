// USAR MODO ESTRICTO

"use strict"

// Crear constantes y variables

const firstname = document.getElementById('firstname')
const secondname = document.getElementById('secondname')
const iconMore = document.querySelector('.conoceme__arrow i')
const conMore = document.querySelector('.conoceme__option')
let mediaQuery = window.matchMedia('(max-width: 600px)')

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

iconMore.addEventListener('click', toggleMore);

if (mediaQuery.matches) {
    iconMore.addEventListener('click', toggleMore);
} else {
    iconMore.addEventListener('mouseover', toggleMore);
    conMore.addEventListener('mouseleave', toggleMore);
}


const hoverNames = (element, nuevo, ant) =>{
    element.textContent = nuevo
    element.addEventListener('mouseout', ()=> {element.textContent = ant})
}

firstname.addEventListener('mouseover', ()=>hoverNames(firstname, 'Conocimientos', 'Jesús'))

secondname.addEventListener('mouseover', ()=>hoverNames(secondname, 'Experimentos', 'Sánchez'))

// APARTADO CONOCIMIETOS

document.getElementById('language-html').textContent = '<HTML />';

const wordsSQL = ['SELECT', 'SQL', 'INTO TO', 'UPDATE', 'AS', 'DELETE', 'UNION']

const numAleatorio = arr => {
    let num = Math.floor(Math.random() * arr.length);
    return num
}

document.getElementById('language-sql').addEventListener('click', ()=> {
    let numGen = numAleatorio(wordsSQL)
    document.getElementById('language-sql').textContent = wordsSQL[numGen]
})

const wordGit = document.getElementById('language-git')

const animationsGit = (nameanimation, text) => {
    wordGit.style.animationName = nameanimation
    wordGit.style.animationDuration = '1s'
    wordGit.style.animationDirection = 'alternate'
    wordGit.style.animationTimingFunction = 'ease-in-out'
    wordGit.style.animationIterationCount = 'infinite'
    wordGit.textContent = text
}

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

const optionsNumbers = document.getElementsByClassName('option-number');

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
let numGenerado;

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

    console.log(numInsertInt)
    console.log(numGenerado)

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