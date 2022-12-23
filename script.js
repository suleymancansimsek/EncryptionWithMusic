  // Get a reference to the keyboard keys
  const keys = document.querySelectorAll('.key');

  // Get a reference to the PIN input field
  const pinField = document.querySelector('input[name="pin"]');

  // Get a reference to the music play button
  const musicButton = document.querySelector('.music-button');

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
      // Play the corresponding audio file
      new Audio(audioFiles[index]).play();

      // If the key is a number, add it to the PIN input field
      if (!isNaN(key.textContent)) {
        pinField.value += key.textContent;
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