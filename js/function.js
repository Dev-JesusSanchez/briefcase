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