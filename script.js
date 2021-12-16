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

    if(scrollTop > 300)
    {
        barAnime.classList.add('.skillper::before')
    }
     else (scrollTop < 300 )
    {
        barAnime.classList.removeClass('.skillper::before')
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


//horloge digital
//ici je fais une fonction qui permet d'avoir l'heure et un calendrier via l'horloge local de l'ordinateur

function updateClock(){
    //ici je déclare mes variables
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";
//toutes les variables précedentes sont reliées au unités de temps et date de l'ordinateur 
// ici je fais des conditions pour indiquer que si l'heure est supérieur ou égale a 12 alors on m'affiche PM 
        if(hou >= 12){
          pe = "PM";
        }
        //si hou == 0 alors hou = 12 PM
        if(hou == 0){
          hou = 12;
        }

        //si hou supérieur a 12 amprs hou = hou - 12 donc par exemple au lieu de 13h il sera 1PM (type heure US)
        if(hou > 12){
          hou = hou - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        //mes variables pour indiqué les jours mois dans le texte

        var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        var week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  //la fonction initClock s'enclenche dans le html dans la balise body dès le lancement de la page en faisant <body onload"initiClock()">
  function initClock(){
    updateClock();
    //ici on indique que dans la page la fonction sera répété dans un interval , ici l'interval est entre la fonction updateClock et 1
    window.setInterval("updateClock()", 1);
  }