// ici j'utilise la bibliothèque javascript Jquery
// $ est un raccourci pour jquery

// on crée une fonction qui fait que si le scroll y est supérieur a 10px alors la class Sticky s'ajoute a la classe navbar
// en revanche si nous ne scrollons pas alors la class sticky est retiré de la classe navbar
$(document).ready(function(){
    // script pour le scroll de la nav bar
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrollupbtn').addClass("show");
        }else{
            $('.scrollupbtn').removeClass("show");
        }
    });

    // slide up script
    // script de baculement vers le haut
    $('.scrollupbtn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // toggle menu script 
    $('.menuBtn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menuBtn i').toggleClass("active");
    });

    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
       
     });

})


// script pour l'animation au scroll


const barAnime = document.querySelector('.skillbar');

window.addEventListener('scroll', () =>
{
    const scrollTop = document.scrollingElement.scrollTop;

    if(scrollTop > 500)
    {
        barAnime.classList.add('.skillper')
    }
});

// script pour le bouton dark mode
// script pour les couleurs du dark mode

const body = document.querySelector('.presentation');
const bodyU = document.querySelector('.experience');
const bodyE = document.querySelector('.competences');
const bodyN = document.querySelector('.navbar');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('activus')
    body.classList.toggle('activus')
    bodyU.classList.toggle('activus')
    bodyE.classList.toggle('activus')
    bodyN.classList.toggle('activus')
}


