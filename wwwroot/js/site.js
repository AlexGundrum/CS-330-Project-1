// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const aura = document.getElementById('cursor-aura');

document.addEventListener('mousemove', (e) => {
    aura.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});