function controles(option){
  switch (option) {
    case 1: //play
      document.getElementById('musica').play()
      break;
    case 2: //pause
      document.getElementById('musica').pause()
      break;
    case 3: // + volume
      document.getElementById('musica').volume+=0.1;
      console.log(document.getElementById('musica').volume);
      break;
    case 4: //- volume
      document.getElementById('musica').volume-=0.1
      console.log(document.getElementById('musica').volume);
      break;
    case 5: // stop
      document.getElementById('musica').load()
      break;
    case 6: // adelantar 5 segundos
      document.getElementById('musica').currentTime+=5;
      break;
    case 7: //retrasar 5 segundos
      document.getElementById('musica').currentTime-=5;
      break;
  }


}


  document.getElementById('musica').addEventListener("timeupdate", function(){
    var curTime = document.getElementById('musica').currentTime;
    var duration = document.getElementById('musica').duration;

    var percentaje = (curTime*100)/duration;

    console.log(percentaje+"%");
    document.getElementById('bar0').style.width = (percentaje+"%");
  })
