## Fitnessapp  
# Timer  
1. Give timer a preparation period of like 5 seconds before it starts?   
2. Decide whether or not the user should be allowed to alter the timers' values while it's running (i.e. put a couple more sets, or increase rest time).    
    - Currently you can alter it, but not with presets.
# Calculator   
1. Calorie calculator, like kcal per body weight and then user inputs body weight and kcal per bodyweight and gets total daily intake recommendation   
2. same for protein    

## DyslexiaApp  
1. Text to speech  
http://stephenwalther.com/archive/2015/01/05/using-html5-speech-recognition-and-text-to-speech?utm_content=buffer12492&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer  
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API  
    - äänivalinta, ääneen luku, volyymi CHECK
    - tahti, pitch slider
    - volyymin/tahdin/pitch muutos toimii ainoastaan silloin, kun aloitetaan alusta
2. Font change  
    - Hyviä fontteja jostain??
3. You should be able to only show the row you're reading in the text area  
    - only works with single row, cant get it to work reasonably with say 3
4. Speech to text  
http://stephenwalther.com/archive/2015/01/05/using-html5-speech-recognition-and-text-to-speech?utm_content=buffer12492&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer  
    - tunnistus, kenttään kirjoitus Check
    - Tekstiä voi kirjoittaa vain isoissa chunkeissa ja kursori siirtyy tekstin loppuun aina lisäyksen jälkeen
        - dispatchien ja state updatejen sijaan muutettaisiin textareaa refin kautta, jotta ei state updateja?
        - ref.current.value = tekstiä
        - ref.current.style['muuttuja'] = arvo
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API  
5. Image to text 
https://towardsdatascience.com/image-to-text-ocr-with-tesseract-js-3540b420e0e7  
    - tunnistus, kenttään kirjoitus
6. Save text on computer  
7. Toolbars should be hide-able    
8. Css-asettelu  
    - väripaletti https://coolors.co/ffcdb2-ffb4a2-e5989b-b5838d-6d6875
9. Text-settings should be saved locally
10. Reader-settings should be saved locally
