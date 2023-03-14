
const container  = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const clear = document.querySelector('#clear');
const colorPicker = document.querySelector('#colorPicker');


gridSize.addEventListener('click', ()=>{
    const size = prompt('Enter a number (1-100');
    if(size>0 && size<=100){
        for(let i=0;i<(size*size);i++){
            const div = document.createElement('div');
            div.classList.add('a');
            container.appendChild(div);
        }
        
        const divA = document.querySelectorAll('.a');
        
        container.style.cssText = `grid-template-columns: repeat(auto-fill, calc(100%/${size})); grid-template-rows: repeat(auto-fill, calc(100%/${size}));`;
        
        
        for(let i=0;i<divA.length;i++){
            divA[i].setAttribute('onmouseover','color(this)');
        }
        alert('Grid Created! Hover over the box to start Sketching!');
    }
    else{
        alert('Invalid number. Should be between 1-100');
    }

});

clear.addEventListener('click',()=>{
    const divA = document.querySelectorAll('.a');
    for(let i=0;i<divA.length;i++){
        divA[i].style.cssText='background-color:none;';
    }
})

function color(e){
    e.style.cssText='background-color:black;';
}

