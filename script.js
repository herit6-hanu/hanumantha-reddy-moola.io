const menu=document.getElementById("menu");
const nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const theme=document.getElementById("theme");
if(localStorage.getItem("theme")==="light") document.body.classList.add("light");
theme.onclick=()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
  theme.textContent=document.body.classList.contains("light")?"☀":"☾";
};
theme.textContent=document.body.classList.contains("light")?"☀":"☾";

document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
