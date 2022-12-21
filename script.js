const bars = document.getElementById("list");
const close = document.getElementById("close");
const sections = document.getElementById("sections");
const main = document.getElementById('home');
const body = document.getElementById('body');
const videoChefWeb = document.getElementById('video-chef-web');
const videoCirujanoWeb = document.getElementById('video-cirujano-web')
const videoChefSafari = document.getElementById('video-chef-safari');
const videoCirujanoSafari = document.getElementById('video-cirujano-safari');


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

if(platform.name == 'Safari' || platform.name == 'Chrome Mobile'){
    videoChefWeb.style.display = 'none';
    videoCirujanoWeb.style.display = 'none';

    videoChefSafari.style.display = 'block';
    videoCirujanoSafari.style.display = 'block';
}else if (platform.name == 'Firefox'){
    videoChefWeb.style.display = 'block';
    videoCirujanoWeb.style.display = 'block';

    videoChefSafari.style.display = 'none';
    videoCirujanoSafari.style.display = 'none';
}