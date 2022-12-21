const bars = document.getElementById("list");
const close = document.getElementById("close");
const sections = document.getElementById("sections");
const main = document.getElementById('home');
const body = document.getElementById('body');


if(body.offsetWidth <= 599){
    bars.addEventListener("click", () => {
        sections.style.display = "block";
        bars.style.display = "none";
        close.style.display = "block";
      });
      
      close.addEventListener("click", closing)
      
      function closing(){
          sections.style.display ='none';
          bars.style.display = 'block';
          close.style.display = 'none';
      }
      sections.addEventListener('click', closing)
      main.addEventListener('click', closing)
}