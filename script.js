const colors = ['black', 'black', 'white', 'blue', 'green', 'red', 'purple']; // Burası böyle kalsın değiştirmeyin.
let currentColorIndex = 0;

document.getElementById('start-test').addEventListener('click', startTest);

function startTest() {
    document.documentElement.requestFullscreen();
    currentColorIndex = 0;
    
    document.getElementById('info-box').style.display = 'none';
    
    showColor();
}

function showColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    document.getElementById('container').style.display = 'none';

    document.body.addEventListener('click', changeColor);
}

function changeColor() {
    currentColorIndex++;

    if (currentColorIndex < colors.length) {
        document.body.style.backgroundColor = colors[currentColorIndex];
    } else {
        showEndOptions();
    }
}
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
    }
});

function showEndOptions() {
    document.body.removeEventListener('click', changeColor);

    document.body.style.backgroundColor = '#121212';
    document.getElementById('container').style.display = 'flex';
    
    document.getElementById('start-test').style.display = 'none';
    
    const endButtons = document.createElement('div');
    endButtons.id = 'end-buttons';
    endButtons.innerHTML = `
        <button onclick="restartTest()">Teste Devam Et</button>
        <button onclick="closeTest()">Testi Bitir</button>
    `;
    endButtons.style.marginTop = '20px';
    document.getElementById('test-box').appendChild(endButtons);
}

function restartTest() {
    document.getElementById('end-buttons').remove();
    startTest();
}

function closeTest() {
    document.getElementById('end-buttons').remove();
    document.exitFullscreen();
    document.body.style.backgroundColor = '#121212';
    document.getElementById('container').style.display = 'flex';
    
    document.getElementById('start-test').style.display = 'inline-block';
    
    document.getElementById('info-box').style.display = 'block';
    
    currentColorIndex = 0;
}
