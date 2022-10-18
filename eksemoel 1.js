const card = document.getElementById('card')

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

