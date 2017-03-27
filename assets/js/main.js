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
  }


}


console.log(document.getElementById('musica').duration);
