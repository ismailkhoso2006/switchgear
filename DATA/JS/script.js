const headerSection = document.querySelector('.block-01');
const footerSection = document.getElementById('footerSection');
function showFooter() {
    footerSection.classList.add('show');
}
function hideFooter() {
    footerSection.classList.remove('show');
}
headerSection.addEventListener('mouseover', showFooter);
headerSection.addEventListener('mouseout', hideFooter);


const headerSection2 = document.querySelector('.block-2');
const footerSection2 = document.getElementById('footerSection2');
function showFooter2() {
    footerSection2.classList.add('show2');
}
function hideFooter2() {
    footerSection2.classList.remove('show2');
}
headerSection2.addEventListener('mouseover', showFooter2);
headerSection2.addEventListener('mouseout', hideFooter2);


const headerSection8 = document.querySelector('.block-8');
const footerSection8 = document.getElementById('footerSection8');
function showFooter8() {
    footerSection8.classList.add('show8');
}
function hideFooter8() {
    footerSection8.classList.remove('show8');
}
headerSection8.addEventListener('mouseover', showFooter8);
headerSection8.addEventListener('mouseout', hideFooter8);

const headerSection11 = document.querySelector('.block-11');
const footerSection11 = document.getElementById('footerSection11');
function showFooter11() {
    footerSection11.classList.add('show11');
}
function hideFooter11() {
    footerSection11.classList.remove('show11');
}
headerSection11.addEventListener('mouseover', showFooter11);
headerSection11.addEventListener('mouseout', hideFooter11);

const headerSection19 = document.querySelector('.block-19');
const footerSection19 = document.getElementById('footerSection19');
function showFooter19() {
    footerSection19.classList.add('show19');
}
function hideFooter19() {
    footerSection19.classList.remove('show19');
}
headerSection19.addEventListener('mouseover', showFooter19);
headerSection19.addEventListener('mouseout', hideFooter19);





function addOpacClass() {
const targets = document.querySelectorAll('.target');
targets.forEach(target => target.classList.add('opac'));
}

function removeOpacClass() {
const targets = document.querySelectorAll('.target');
targets.forEach(target => target.classList.remove('opac'));
}


document.getElementById('hover01').addEventListener('mouseenter', addOpacClass);
document.getElementById('hover01').addEventListener('mouseleave', removeOpacClass);



function addOpacClass2() {
const targets = document.querySelectorAll('.target2');
targets.forEach(target => target.classList.add('opac2'));
}

function removeOpacClass2() {
const targets = document.querySelectorAll('.target2');
targets.forEach(target => target.classList.remove('opac2'));
}

document.querySelector('#b2').addEventListener('mouseenter', addOpacClass2);
document.querySelector('#b2').addEventListener('mouseleave', removeOpacClass2);




function addOpacClass8() {
const targets = document.querySelectorAll('.target8');
targets.forEach(target => target.classList.add('opac8'));
}

function removeOpacClass8() {
const targets = document.querySelectorAll('.target8');
targets.forEach(target => target.classList.remove('opac8'));
}

document.querySelector('#b8').addEventListener('mouseenter', addOpacClass8);
document.querySelector('#b8').addEventListener('mouseleave', removeOpacClass8);


function addOpacClass11() {
const targets = document.querySelectorAll('.target11');
targets.forEach(target => target.classList.add('opac11'));
}

function removeOpacClass11() {
const targets = document.querySelectorAll('.target11');
targets.forEach(target => target.classList.remove('opac11'));
}

document.querySelector('#b11').addEventListener('mouseenter', addOpacClass11);
document.querySelector('#b11').addEventListener('mouseleave', removeOpacClass11);


function addOpacClass19() {
const targets = document.querySelectorAll('.target19');
targets.forEach(target => target.classList.add('opac19'));
}

function removeOpacClass19() {
const targets = document.querySelectorAll('.target19');
targets.forEach(target => target.classList.remove('opac19'));
}

document.querySelector('#b19').addEventListener('mouseenter', addOpacClass19);
document.querySelector('#b19').addEventListener('mouseleave', removeOpacClass19);

