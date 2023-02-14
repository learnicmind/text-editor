function makeBold(){
    document.getElementById('text-area').style.fontWeight = "bold";
}
function makeItalic(){
    document.getElementById('text-area').style.fontStyle = "italic";
}
function makeUnderline(){
    document.getElementById('text-area').style.textDecoration = "underline";
}

function makeLeft(){
    document.getElementById('text-area').style.textAlign = "left";
}
function makeCenter(){
    document.getElementById('text-area').style.textAlign = "center";
}
function makeRight(){
    document.getElementById('text-area').style.textAlign = "right";
}

function changeFontSize(){
    const fontSize = document.getElementById('fontSize').value;
    document.getElementById('text-area').style.fontSize = fontSize + 'px';
}

function changeFontColor() {
    const fontColor = document.getElementById('fontColor').value;
    document.getElementById('text-area').style.color = fontColor;
}