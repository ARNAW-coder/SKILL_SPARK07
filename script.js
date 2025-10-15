let btn1 = document.querySelectorAll(".btn1")
let home = document.querySelector(".home")
let about = document.querySelector(".about")
let contact = document.querySelector(".contact")
let zone = document.querySelector(".zone")

about.addEventListener("click",()=>{
    
      window.location.href = "job.html";
})
contact.addEventListener("click",()=>{
     window.location.href = 'courses.html';
})
btn1.forEach(e=>{
e.addEventListener("click",()=>{
    e.style.backgroundColor="#c1d69bff";
       e.style.borderRadius="25px";
    setTimeout(() => {
         e.style="none";
    }, 100);
      
})
})
let login = document.querySelector(".login");
login.addEventListener('click',()=>{
    login.style.backgroundColor="#DCAE96";
setTimeout(() => {
    login.style.backgroundColor="#f1b08c";
}, 100);
     window.location.href = 'signup.html';

})

let main = document.querySelector("main");
let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click",()=>{
    
    
   const isOpen = sidebar.classList.toggle("open");

   if(isOpen){
    hamburger.src="cross.svg";
    main.style.opacity="20%";

   }
   else{
    hamburger.src="hamburger.svg";
    main.style.opacity="100%";

   }
   
   
})






