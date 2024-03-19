const colorBox = document.getElementById("color-box");
const btn = document.getElementById("change-color-btn");

const hex = '0123456789ABCDEF';



btn.addEventListener('click', () => {
    let color = '#';
    for(let i = 0; i < 6; i++){
       color += hex.charAt(Math.floor(Math.random() * 16))
       console.log(color)
       colorBox.style.backgroundColor = color;
    }

})