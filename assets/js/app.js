var spotlight = document.getElementById("spotlight");
window.addEventListener("mousemove", (e)=>{
  spotlight.style.backgroundImage =
    "radial-gradient(circle at " +e.clientX +"px " +e.clientY +"px, transparent 50px, rgba(0,0,0,0.8) 60px)";
  e.clientX, e.clientY;
});
