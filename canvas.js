/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

console.log('Test');



// Het veld waar je in werkt
window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    //variables
    let painting = true;
    
    function startPosition(ding) {
        painting = true;
        draw(ding);
    }
    
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    
    function draw(ding) {
        if (painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '';
        
        
        document.getElementsByClassName('kleurblauw').onclick = function() {
   ctx.strokeStyle = 'blue';
        }
        
        ctx.lineTo(ding.clientX, ding.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(ding.clientX, ding.clientY);
        
        

        //document.getElementsByClassName("kleurblauw")[0].onclick = kleurBlauw();
    }
    
    canvas.addEventListener('mouseup', startPosition);
    canvas.addEventListener('mousedown', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    
    function kleurBlauw() {
        //document.getElementById('canvas').ctx.strokeStyle = 'blue';
//        document.getElementsByClassName('kleurblauw')[0].style.display = 'none';
        ctx.strokeStyle = 'blue';
        console.log('Ik ben nu blauw');
    }
    
    document.getElementsByClassName('kleurblauw')[0].addEventListener('click', kleurBlauw);
});



//    //niet nodig
//    ctx.strokeStyle = 'green';
//    ctx.lineWidth = 5;
//    ctx.strokeRect(100, 50, 200, 200);
//    
//    //niet nodig
//    ctx.beginPath();
//    ctx.moveTo(100, 100);
//    ctx.lineTo(200, 100);
//    ctx.lineTo(200, 150);
//    ctx.closePath();
//    ctx.stroke();

//window.addEventListener('resize,');
