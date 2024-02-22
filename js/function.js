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