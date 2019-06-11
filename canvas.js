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


        document.getElementsByClassName('kleurblauw').onclick = function () {
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

    function kleurRood() {
        ctx.strokeStyle = '#E63B3B';
        console.log('Ik ben nu Rood');
    }
    
    function kleurOranje() {
        ctx.strokeStyle = '#FFA907';
        console.log('Ik ben nu Oranje');
    }
    
    function kleurGeel() {
        ctx.strokeStyle = '#FFC917';
        console.log('Ik ben nu Geel');
    }
    
    function kleurGroen() {
        ctx.strokeStyle = '#40F571';
        console.log('Ik ben nu Groen');
    }
    
     function kleurBlauw() {
        ctx.strokeStyle = '#0063D3';
        console.log('Ik ben nu Blauw');
    }

     function kleurPaars() {
        ctx.strokeStyle = '#BA31F7';
        console.log('Ik ben nu Paars');
    }
    
     function kleurBruin() {
        ctx.strokeStyle = '#A07959';
        console.log('Ik ben nu Bruin');
    }
    
     function kleurGrijs() {
        ctx.strokeStyle = '#C3C3C3';
        console.log('Ik ben nu Grijs');
    }
    
    function kleurZwart() {
        ctx.strokeStyle = 'black';
        console.log('Ik ben nu Zwart');
    }
    
    function kleurWit() {
        ctx.strokeStyle = 'white';
        console.log('Ik ben nu Wit');
    }

    document.getElementsByClassName('kleurrood')[0].addEventListener('click', kleurRood);
    document.getElementsByClassName('kleuroranje')[0].addEventListener('click', kleurOranje);
    document.getElementsByClassName('kleurgeel')[0].addEventListener('click', kleurGeel);
    document.getElementsByClassName('kleurgroen')[0].addEventListener('click', kleurGroen);
    document.getElementsByClassName('kleurblauw')[0].addEventListener('click', kleurBlauw);
    document.getElementsByClassName('kleurpaars')[0].addEventListener('click', kleurPaars);
    document.getElementsByClassName('kleurbruin')[0].addEventListener('click', kleurBruin);
    document.getElementsByClassName('kleurgrijs')[0].addEventListener('click', kleurGrijs);
    document.getElementsByClassName('kleurzwart')[0].addEventListener('click', kleurZwart);
    document.getElementsByClassName('kleurwit')[0].addEventListener('click', kleurWit);

    function herstarten() {
        window.location.reload();
    }
    
    document.getElementsByClassName('reset')[0].addEventListener('click', herstarten);


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
