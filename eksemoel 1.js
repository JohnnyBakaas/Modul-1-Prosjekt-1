const card = document.getElementById('card')

const contentOfHTML = []

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
    for (var i = 0; i < 5; i++) {
        console.log(contentOfHTML[i])
    }
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
}

document.getElementById('green-card-button').addEventListener("click", showGreen)

document.getElementById('blue-card-button').addEventListener("click", showBlue)

document.getElementById('red-card-button').addEventListener("click", showRed)

document.getElementById('yellow-card-button').addEventListener("click", showYellow)

document.getElementById('dark-card-button').addEventListener("click", showDark)

