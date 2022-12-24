  // Get a reference to the keyboard keys
  const keys = document.querySelectorAll('.key');

  // Get a reference to the PIN input field
  const pinField = document.querySelector('input[name="pin"]');

  // Get a reference to the music play button
  const musicButton = document.querySelector('.music-button');

  var enter = document.getElementById('enter');
  var createPin = document.getElementById('create-button');

  var message = document.getElementById('message');

  var buttonPressed = false;
  var pin = null;
  
 // Create an array of audio files
 const audioFiles = [
   'audio/A5.mp3',
   'audio/Ab5.mp3',
   'audio/B5.mp3',
   'audio/Bb5.mp3',
   'audio/C5.mp3',
   'audio/D5.mp3',
   'audio/Db5.mp3',
   'audio/E5.mp3',
   'audio/Eb5.mp3',
   'audio/F5.mp3',
   'audio/G5.mp3',
   'audio/Gb5.mp3',
 ];

 const noteMap = {
  'audio/A5.mp3' : 1,
  'audio/Ab5.mp3': 2,
  'audio/B5.mp3' : 3,
  'audio/Bb5.mp3' : 4,
  'audio/C5.mp3' : 5,
  'audio/D5.mp3' : 6,
  'audio/Db5.mp3' : 7,
  'audio/E5.mp3' : 8 ,
  'audio/Eb5.mp3' : 9,
  'audio/F5.mp3' : 10,
  'audio/G5.mp3' : 11,
  'audio/Gb5.mp3' : 12,
 }

 /*
 var filesNum = [];

 for (let i = 0; i < audioFiles.length; i++) {
  filesNum[i] = [audioFiles[i],i];
  
 }
console.log(filesNum);
 */

   // Define the notes to play
   const notes = [
    audioFiles[0], // Note 1
    audioFiles[2], // Note 3
    audioFiles[4], // Note 5
    audioFiles[5], // Note 6
    audioFiles[7], // Note 8
    audioFiles[9], // Note 10
    audioFiles[11], // Note 12
  ];

  // Define the tempo (in beats per minute)
  const tempo = 120;

  // Calculate the delay between notes (in milliseconds)
  const delay = (60 / tempo) * 1000;

  // Add a click event listener to each key
  keys.forEach((key, index) => {
    key.addEventListener('click', () => {
      console.log(audioFiles[index]);
      // Play the corresponding audio file
      new Audio(audioFiles[index]).play();

      // If the key is a number, add it to the PIN input field
      if (!isNaN(key.textContent)) {
        pinField.value += key.textContent;

        if(buttonPressed){
          pin += key.textContent;
        }
      
      }
    });
  });

  // Add a click event listener to the music play button
  musicButton.addEventListener('click', () => {
    // Play the notes
    let i = 0;
    const playNote = setInterval(() => {
      if (i >= notes.length) {
        clearInterval(playNote);
      } else {
        new Audio(notes[i]).play();
        i++;
      }
    }, delay);
  });



  createPin.addEventListener('click', setPin );

  var pin;
  function setPin() {

    buttonPressed = !buttonPressed; 

    pin = pinField.value;

    if(buttonPressed){

      createPin.innerHTML = "Submit";
      message.innerHTML = "create your pin";
    
    }else{
      open = true;
      message.innerHTML = "create your pin!";
      
    }

  }



  enter.addEventListener('click', () => {

    if(pin == pinField.value && pin != null){
      console.log("pin true ");
    }else{
      console.log("pin false");
    }
    
  });


  /*
  if(pinField.value == '12345'){
    console.log("okay");
  }
 
  enter.addEventListener('click', event => {
    // Prevent the form from submitting
    event.preventDefault();
    var password = null;

    if(open){
      password = pinField.value;
      open = false;
    }
    
    // Log the password to the console
    console.log(password);
  });

  */
 
  function pinValue(music) {
    let count = 0;
    music.forEach(note => {
      //console.log(note)
      count += noteMap[note];
    });

    return count;
  }

  /*
  switch (note) {
    case 'audio/A5.mp3':
      return 1;
      break;
    case 'audio/Ab5.mp3':
      return 2;
      break;
    case 'audio/B5.mp3':
      return 3;
      break;
    case 'audio/Bb5.mp3':
      return 4;
      break;
    case 'audio/C5.mp3':
      return 5;
      break;
    case 'audio/D5.mp3':
      return 6;
      break;
    case 'audio/Db5.mp3':
      return 7;
      break;
    case 'audio/E5.mp3':
      return 8;
      break;
    case 'audio/Eb5.mp3':
      return 9;
      break;
    case 'audio/F5.mp3':
      return 0;
      break;      
    default:
      break;
  }
  */