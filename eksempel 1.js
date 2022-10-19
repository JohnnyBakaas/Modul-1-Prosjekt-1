const card = document.getElementById('card')

const contentOfHTML = []

const bodyNr = new Array();
const headNr = new Array();
const legsNr = new Array();

var headPosition = 0
var bodyPosition = 0
var legPosition = 0

const loadPictures = () => {

    bodyNr[0] = new Image();
    bodyNr[0].src = 'img/body1.png';
    
    bodyNr[1] = new Image();
    bodyNr[1].src = 'img/body2.png';
    
    bodyNr[2] = new Image();
    bodyNr[2].src = 'img/body3.png';
    
    bodyNr[3] = new Image();
    bodyNr[3].src = 'img/body4.png';
    
    headNr[0] = new Image();
    headNr[0].src = 'img/head1.png';
    
    headNr[1] = new Image();
    headNr[1].src = 'img/head2.png';
    
    headNr[2] = new Image();
    headNr[2].src = 'img/head3.png';
    
    headNr[3] = new Image();
    headNr[3].src = 'img/head4.png';
    
    legsNr[0] = new Image();
    legsNr[0].src = 'img/legs1.png';
    
    legsNr[1] = new Image();
    legsNr[1].src = 'img/legs2.png';
    
    legsNr[2] = new Image();
    legsNr[2].src = 'img/legs3.png';
    
    legsNr[3] = new Image();
    legsNr[3].src = 'img/legs4.png';
    
}

const noLayout = () => {
    card.classList = '';
}

const horizontalLayout = () => {
    noLayout();
    card.classList.add('horizontal');
}

const verticalLayout = () => {
    noLayout();
    card.classList.add('vertical');
}

const gridLayout = () => {
    noLayout();
    card.classList.add('grid');
}

document.getElementById('no-layout').addEventListener("click", noLayout);

document.getElementById('vertical-layout').addEventListener("click", verticalLayout);

document.getElementById('horizontal-layout').addEventListener("click", horizontalLayout);

document.getElementById('grid-layout').addEventListener("click", gridLayout);

const startUp = () => {
    getHTML()
    removeHTML()
    loadPictures()
}

const getHTML = () => {
    contentOfHTML.push(document.getElementById('green-card').innerHTML);
    contentOfHTML.push(document.getElementById('blue-card').innerHTML);
    contentOfHTML.push(document.getElementById('red-card').innerHTML);
    contentOfHTML.push(document.getElementById('yellow-card').innerHTML);
    contentOfHTML.push(document.getElementById('dark-card').innerHTML);
}

const removeHTML = () => {
    document.getElementById('green-card').innerHTML = '';
    document.getElementById('blue-card').innerHTML = '';
    document.getElementById('red-card').innerHTML = '';
    document.getElementById('yellow-card').innerHTML = '';
    document.getElementById('dark-card').innerHTML = '';
}

document.onload = startUp()

const showGreen = () => {
    removeHTML()
    document.getElementById('green-card').innerHTML = contentOfHTML[0];
}

const showBlue = () => {
    removeHTML()
    document.getElementById('blue-card').innerHTML = contentOfHTML[1];
}

const showRed = () => {
    removeHTML()
    document.getElementById('red-card').innerHTML = contentOfHTML[2];
}

const showYellow = () => {
    removeHTML()
    document.getElementById('yellow-card').innerHTML = contentOfHTML[3];
}

const showDark = () => {
    removeHTML()
    document.getElementById('dark-card').innerHTML = contentOfHTML[4];

    document.getElementById('head-right').addEventListener("click", headRight)
    document.getElementById('head-left').addEventListener("click", headLeft)

    document.getElementById('body-right').addEventListener("click", bodyRight)
    document.getElementById('bodt-left').addEventListener("click", bodyLeft)

    document.getElementById('leg-right').addEventListener("click", legRight)
    document.getElementById('leg-left').addEventListener("click", legLeft)
}

document.getElementById('green-card-button').addEventListener("click", showGreen)

document.getElementById('blue-card-button').addEventListener("click", showBlue)

document.getElementById('red-card-button').addEventListener("click", showRed)

document.getElementById('yellow-card-button').addEventListener("click", showYellow)

document.getElementById('dark-card-button').addEventListener("click", showDark)

// hode kropp og ben starter nedover

const rightArrowImageHead = () => {
    if(headPosition == 3) {
        headPosition = 0
    } else {
        headPosition++
    }
}

const leftArrowImageHead = () => {
    if(headPosition == 0) {
        headPosition = 3
    } else {
        headPosition -= 1
    }
}

const headRight = () => {
    rightArrowImageHead()
    document.getElementById('the-head').src = headNr[headPosition].src;
}

const headLeft = () => {
    leftArrowImageHead()
    document.getElementById('the-head').src = headNr[headPosition].src;
}



const rightArrowImageBody = () => {
    if(bodyPosition == 3) {
        bodyPosition = 0
    } else {
        bodyPosition++
    }
}

const leftArrowImageBody = () => {
    if(bodyPosition == 0) {
        bodyPosition = 3
    } else {
        bodyPosition -= 1
    }
}

const bodyRight = () => {
    rightArrowImageBody()
    document.getElementById('the-body').src = bodyNr[bodyPosition].src;
}

const bodyLeft = () => {
    leftArrowImageBody()
    document.getElementById('the-body').src = bodyNr[bodyPosition].src;
}




const rightArrowImageLeg = () => {
    if(legPosition == 3) {
        legPosition = 0
    } else {
        legPosition++
    }
}

const leftArrowImageLeg = () => {
    if(legPosition == 0) {
        legPosition = 3
    } else {
        legPosition -= 1
    }
}

const legRight = () => {
    rightArrowImageLeg()
    document.getElementById('the-leg').src = legsNr[legPosition].src;
}

const legLeft = () => {
    leftArrowImageLeg()
    document.getElementById('the-leg').src = legsNr[legPosition].src;
}