var audio = document.getElementById("musica");

function controles(option){
  switch (option) {
    case 1: //play
      audio.play()
      break;
    case 2: //pause
      audio.pause()
      break;
    case 3: // + volume
      if (audio.volume <1){
        audio.volume+=0.1;
        console.log(audio.volume);
      }else{
        alert("VOLUMEN MAXIMOOOOOO!!!")
      }
      break;
    case 4: //- volume
    if (audio.volume >= 0.1){
      audio.volume-=0.1;
      console.log(audio.volume);
    }else{
      alert("VOLUMEN MINIMO!!!")
    }
    case 5: // stop
      //audio.load()
      audio.currentTime =0;
      controles(2);
      break;
    case 6: // adelantar 5 segundos
      audio.currentTime+=5;
      break;
    case 7: //retrasar 5 segundos
      audio.currentTime-=5;
      break;
  }


}


  audio.addEventListener("timeupdate", function(){
    var curTime = audio.currentTime;
    var duration = audio.duration;

    var percentaje = (curTime*100)/duration;

    console.log(percentaje+"%");
    document.getElementById('bar0').style.width = (percentaje+"%");
  })
