// Cursor

// const cursorDot = document.querySelector('[data-cursor-dot]');

// window.addEventListener('mousemove', function (e) {

//     cursorDot.style.transition = 'all 0.2s ease';
 
//     const posX = e.clientX;
//     const posY = e.clientY;

//     cursorDot.style.left = `${posX}px`;
//     cursorDot.style.top = `${posY}px`;

//     // If it is on a button or a link, add focus to cursor NOT THE CLASS

//     const target = e.target;

//     if (target.matches('button, a')) {
//         cursorDot.style.background = '#00000000';
//         cursorDot.style.width = '30px';
//         cursorDot.style.height = '30px';
//         cursorDot.style.border = '3px solid #ffffff';

//     } else {
//         cursorDot.style.background = '#ffffff';
//         cursorDot.style.width = '10px';
//         cursorDot.style.height = '10px';
//         cursorDot.style.border = '1px solid #ffffff71';
//     }
    
// });

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })