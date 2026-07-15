/* ===========================
   CREATE LABS
=========================== */

// Animação ao rolar

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".service, .project-card, .advantage, .plan, .contact-card"

).forEach(el => observer.observe(el));



// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// Header transparente

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});



// Contador

const counters = document.querySelectorAll(".hero-stats h2");

const speed = 200;

counters.forEach(counter=>{

    const update=()=>{

        const target = counter.innerText.replace(/\D/g,'');

        let count = +counter.getAttribute("data-count") || 0;

        const increment = target/speed;

        if(count < target){

            count += increment;

            counter.setAttribute("data-count",count);

            counter.innerText=Math.ceil(count)+counter.innerText.replace(/[0-9]/g,'');

            setTimeout(update,10);

        }else{

            counter.innerText=counter.innerText;

        }

    }

    update();

});

/* ===========================
BOTÃO TOPO
=========================== */

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});