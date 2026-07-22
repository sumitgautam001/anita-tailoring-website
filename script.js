const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / height) * 100;

document.getElementById("progress-bar").style.width =
progress + "%";

});
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("active-nav");

}else{

header.classList.remove("active-nav");

}

});
// Hero Animation

gsap.from(".hero-text h1",{

    y:-100,

    opacity:0,

    duration:1

});

gsap.from(".hero-text h2",{

    x:-100,

    opacity:0,

    duration:1,

    delay:.4

});

gsap.from(".hero-text p",{

    y:50,

    opacity:0,

    duration:1,

    delay:.8

});

gsap.from(".hero-text .btn",{

    scale:0,

    opacity:0,

    duration:.8,

    delay:1.2

});

gsap.from(".hero-image img",{

    x:150,

    opacity:0,

    duration:1.5,

    delay:.5

});
const form = document.getElementById("bookingForm");



form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();

    if(name=="" || phone=="" || service=="" || date==""){
        alert("Please fill all required fields.");
        return;
    }

    if(!/^[0-9]{10}$/.test(phone)){
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    const whatsappNumber="918595395561"; // Replace with your WhatsApp number


    const text=`Hello Anita Tailoring Studio,

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}

Requirements:
${message}`;

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
    );

});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 25);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const menu = document.querySelector(".menu");

const nav = document.querySelector(".nav-links");


menu.onclick = () => {

    nav.classList.toggle("active");

};

// Gallery Popup

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.getElementById("lightbox-img");


galleryImages.forEach(img => {


    img.onclick = function(){

        lightbox.style.display="flex";

        lightboxImg.src=this.src;

    }


});


lightbox.onclick=function(){

    lightbox.style.display="none";

};
