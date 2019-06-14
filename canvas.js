/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

console.log('Test');
var strokeWidth = 5;
var kleur = 'white';
var achtergrondKleur = 'white';

// Het veld waar je in werkt
window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    //    canvas.boxSizing = window.borderBox;

    //variables
    let painting = true;

    function startPosition(ding) {
        painting = true;
        draw(ding);
        console.log('touchstart gaat nu aan')
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
        console.log('touchend gaat nu aan')
    }

    function draw(ding) {
        console.log('touchmove gaat nu aan')
        if (painting) return;
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '';

        ctx.lineTo(ding.pageX, ding.pageY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(ding.pageX, ding.pageY);
    }

    //        canvas.addEventListener('mouseup', startPosition);
    //        canvas.addEventListener('touchstart', startPosition);
    //        canvas.addEventListener('mousedown', finishedPosition);
    //        canvas.addEventListener('touchend', finishedPosition);
    //        canvas.addEventListener('mousemove', draw);
    //        canvas.addEventListener('touchmove', draw);

    canvas.addEventListener('mousedown', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', startPosition);
    document.addEventListener('mouseup', startPosition);
    canvas.addEventListener('contextmenu', startPosition);

    canvas.addEventListener('touchstart', startPosition, false);
    canvas.addEventListener('touchmove', draw, false);
    canvas.addEventListener('touchend', finishedPosition, false);

    function borderReset() {
        document.getElementsByClassName('kleurrood')[0].style.border = 'none';
        document.getElementsByClassName('kleuroranje')[0].style.border = 'none';
        document.getElementsByClassName('kleurgeel')[0].style.border = 'none';
        document.getElementsByClassName('kleurgroen')[0].style.border = 'none';
        document.getElementsByClassName('kleurblauw')[0].style.border = 'none';
        document.getElementsByClassName('kleurpaars')[0].style.border = 'none';
        document.getElementsByClassName('kleurbruin')[0].style.border = 'none';
        document.getElementsByClassName('kleurgrijs')[0].style.border = 'none';
        document.getElementsByClassName('kleurzwart')[0].style.border = 'none';
        document.getElementsByClassName('kleurwit')[0].style.border = 'none';
    }

    function kleurRood() {
        kleur = '#E63B3B';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurrood')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurrood')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurrood')[0].style.transition = '0.7s';

        console.log('Ik ben nu Rood');
    }

    function kleurOranje() {
        kleur = '#FFA907';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleuroranje')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleuroranje')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleuroranje')[0].style.transition = '0.7s';

        console.log('Ik ben nu Oranje');
    }

    function kleurGeel() {
        kleur = '#FFC917';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurgeel')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurgeel')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurgeel')[0].style.transition = '0.7s';

        console.log('Ik ben nu Geel');
    }

    function kleurGroen() {
        kleur = '#40F571';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurgroen')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurgroen')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurgroen')[0].style.transition = '0.7s';

        console.log('Ik ben nu Groen');
    }

    function kleurBlauw() {
        kleur = '#0063D3';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurblauw')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurblauw')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurblauw')[0].style.transition = '0.7s';

        console.log('Ik ben nu Blauw');
    }

    function kleurPaars() {
        kleur = '#BA31F7';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurpaars')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurpaars')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurpaars')[0].style.transition = '0.7s';

        console.log('Ik ben nu Paars');
    }

    function kleurBruin() {
        kleur = '#A07959';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurbruin')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurbruin')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurbruin')[0].style.transition = '0.7s';

        console.log('Ik ben nu Bruin');
    }

    function kleurGrijs() {
        kleur = '#C3C3C3';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurgrijs')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurgrijs')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurgrijs')[0].style.transition = '0.7s';

        console.log('Ik ben nu Grijs');
    }

    function kleurZwart() {
        kleur = 'black';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurzwart')[0].style.border = 'solid 5px white';
        document.getElementsByClassName('kleurzwart')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurzwart')[0].style.transition = '0.7s';

        console.log('Ik ben nu Zwart');
    }

    function kleurWit() {
        kleur = 'white';
        ctx.strokeStyle = kleur;
        borderReset();

        document.getElementsByClassName('kleurwit')[0].style.border = 'solid 5px #C3C3C3';
        document.getElementsByClassName('kleurwit')[0].style.boxSizing = 'border-box';
        document.getElementsByClassName('kleurwit')[0].style.transition = '0.7s';

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
    //    document.getElementsByClassName('kleurzwart')[0].addEventListener('mouseover', kleurZwart);
    document.getElementsByClassName('kleurzwart')[0].addEventListener('click', kleurZwart);
    document.getElementsByClassName('kleurwit')[0].addEventListener('click', kleurWit);

    // pennen diktes
    function pendun() {
        strokeWidth = 5;
        document.getElementsByClassName('pen1')[0].style.bottom = '0px';
        document.getElementsByClassName('pen1')[0].style.transition = '0.7s';

        document.getElementsByClassName('pen2')[0].style.bottom = '-20px';
        document.getElementsByClassName('pen2')[0].style.transition = '0.7s';
        console.log('pendikte is nu 5');
    }

    function pendik() {
        strokeWidth = 10;
        document.getElementsByClassName('pen2')[0].style.bottom = '0px';
        document.getElementsByClassName('pen2')[0].style.transition = '0.7s';

        document.getElementsByClassName('pen1')[0].style.bottom = '-20px';
        document.getElementsByClassName('pen1')[0].style.transition = '0.7s';
        console.log('pendikte is nu 10');
    }

    function emmer() {
        achtergrondKleur = kleur;
        document.getElementById('canvas').style.backgroundColor = kleur;
        console.log('vullen');
    }

    function gum() {
        strokeWidth = 10;
        console.log(achtergrondKleur);
        kleur = achtergrondKleur;
        ctx.strokeStyle = kleur;
        console.log(kleur);

        console.log('gum actief');
    }

    document.getElementsByClassName('pen1')[0].addEventListener('click', pendun);
    document.getElementsByClassName('pen2')[0].addEventListener('click', pendik);
    document.getElementsByClassName('emmer')[0].addEventListener('click', emmer);
    document.getElementsByClassName('gum')[0].addEventListener('click', gum);

    // herstarten van de canvas
    function herstarten() {
        window.location.reload();
    }

    document.getElementsByClassName('reset')[0].addEventListener('click', herstarten);

});
//
//
////    //niet nodig
////    ctx.strokeStyle = 'green';
////    ctx.lineWidth = 5;
////    ctx.strokeRect(100, 50, 200, 200);
////    
////    //niet nodig
////    ctx.beginPath();
////    ctx.moveTo(100, 100);
////    ctx.lineTo(200, 100);
////    ctx.lineTo(200, 150);
////    ctx.closePath();
////    ctx.stroke();
//
////window.addEventListener('resize,');
