var musica = document.querySelector('audio');

//Eventos

 document.querySelector('.playbtn').addEventListener('click', tocarMusica);

 document.querySelector('.pausebtn'). addEventListener('click', pauseMusica);   

 document.querySelector('.stopbtn'). addEventListener('click', pararMusica);

 musica.addEventListener('timeupdate', atualizarBarra);

 var duracaoMusica = document.querySelector('.fim');
 duracaoMusica.textContent = segundosParaMinutos (Math.floor(musica.duration)); 
 
  //funções  
    
 function tocarMusica(){
    musica.play();
}


function pauseMusica(){
    musica.pause();
}


function pararMusica(){
    musica.pause();
    musica.currentTime = 0;

}

function atualizarBarra(){
   var barra = document.querySelector('progress');
   barra.style.width = (musica.currentTime / musica.duration)* 100 + '%';
   var tempoDecorrido = document.querySelector('.inicio');
   tempoDecorrido.textContent = segundosParaMinutos (Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    var campoMinuto = Math.floor(segundos / 60);
    var campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0 ' + campoSegundos 
    } 
    return campoMinuto+':'+campoSegundos;
       
    
}