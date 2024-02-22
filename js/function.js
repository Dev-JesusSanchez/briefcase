"use strict"

const firstname = document.getElementById('firstname')
const secondname = document.getElementById('secondname')

const hoverNames = (element, nuevo, ant) =>{
    element.textContent = nuevo
    element.addEventListener('mouseout', ()=> {element.textContent = ant})
}

firstname.addEventListener('mouseover', ()=>hoverNames(firstname, 'Conocimientos', 'Jesús'))

secondname.addEventListener('mouseover', ()=>hoverNames(secondname, 'Experimentos', 'Sánchez'))