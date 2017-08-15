var env, triOsc, t;
var keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ",".",",","'","?"];
var upperKeys = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var notes = [84,70,86,62,60,83,65,76,79,75,63,74,81,91,67,89,78,88,64,72,69,82,71,80,77,73,55,48,52,57,94];

function setup() {
  //background(50,50,50);
  //var h2 = createElement('textarea','rows="4" cols="50"')
  //var cnv = createCanvas(100, 100);
  //textAlign(CENTER);
  //text('click to play', width/2, height/2);
  
  env = new p5.Env();
  env.setADSR(0.001, 0.2, 0.2, 0.4);
  env.setRange(1, 0);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();

  
}

function keyTyped() {
triOsc.freq(midiToFreq(49))
for(var i = 0; i < keys.length; i++) {
    if (key == keys[i]|| key == upperKeys[i]) {
       triOsc.freq(midiToFreq(notes[i]));        
        } 
  }
  env.play();
  }

  function keyPressed(){
      if(keyCode === BACKSPACE || keyCode === DELETE){
        triOsc.freq(midiToFreq(49))
        env.play();
      }
    }