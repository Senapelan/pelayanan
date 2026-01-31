function openMenu(){
  document.getElementById("mobileMenu").classList.add("active");
  document.querySelector(".menu-overlay").classList.add("active");
}

function closeMenu(){
  document.getElementById("mobileMenu").classList.remove("active");
  document.querySelector(".menu-overlay").classList.remove("active");
}

/* klik luar = tutup menu */
document.addEventListener("click", function(e){
  const menu = document.getElementById("mobileMenu");
  const btn  = document.querySelector(".menu-btn");

  if(
    menu.classList.contains("active") &&
    !menu.contains(e.target) &&
    !btn.contains(e.target)
  ){
    closeMenu();
  }
});

function toggleSub(id){
  const sub = document.getElementById(id);

  document.querySelectorAll(".submenu").forEach(el=>{
    if(el !== sub){
      el.style.display = "none";
    }
  });

  sub.style.display = sub.style.display === "block" ? "none" : "block";
}

/* header scroll */
window.addEventListener("scroll",()=>{
  document.getE
