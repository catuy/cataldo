// Global variables
let isRunning = false;
let currentPattern = 0;

// Visual parameters driven by audio
let beatIntensity = 0;
let currentFreq = 0;
let lineCount = 10;
let lineSpacing = 50;
let lineWeight = 1;
let lineOffset = 0;
let thickLineWeight = 1;
let thinLineWeight = 1;

// Movement parameters
let movingLines = [];
let scrollOffset = 0;

// Color inversion
let inverted = false;
let bgColor;
let fgColor;
let darkBlue;

// Audio components
let synth;
let noiseSynth;
let fmSynth;
let amSynth;
let pluck;
let osc1, osc2, osc3; // Oscillators
let filter;
let reverb;
let feedback;
let autoFilter;

// Generative parameters
let currentScale = [];
let noteIndex = 0;
let rhythmPattern = [];
let density = 0.5;
let currentOctave = 6;

// Tone.js loops
let mainLoop;
let melodicLoop;
let textureLoop;
let oscLoop;
let bpmLoop;

// Musical scales (Ikeda style - chromatic/atonal/data-driven)
const scales = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // chromatic
  [0, 2, 4, 7, 9], // pentatonic
  [0, 1, 3, 6, 8], // atonal
  [0, 3, 5, 7, 10], // minor pentatonic
  [0, 2, 3, 5, 7, 8, 10] // natural minor
];

// p5.js setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  // Initialize colors
  darkBlue = color('#001AFF');
  bgColor = darkBlue;
  fgColor = color(255);

  // Initialize generative parameters
  generateNewScale();
  generateRhythmPattern();

  // Initialize line weights - start with extreme contrast
  thickLineWeight = 30;
  thinLineWeight = 1;
  lineWeight = 2;

  // Setup UI
  document.getElementById('startBtn').addEventListener('click', startSequence);
  document.getElementById('stopBtn').addEventListener('click', stopSequence);
}

// Generate new musical scale
function generateNewScale() {
  currentScale = random(scales);
  noteIndex = 0;
}

// Generate rhythm pattern
function generateRhythmPattern() {
  rhythmPattern = [];
  let len = floor(random(4, 9));
  for (let i = 0; i < len; i++) {
    rhythmPattern.push(random(1) > 0.6);
  }
}

// p5.js draw loop
function draw() {
  background(bgColor);

  if (isRunning) {
    // Decay parameters
    beatIntensity *= 0.85;

    // Hide UI
    document.getElementById('info').style.display = 'none';

    // Update scroll offset for animated patterns
    scrollOffset += map(Tone.Transport.bpm.value, 60, 200, 0.5, 3);

    // Draw based on current pattern
    switch(currentPattern % 16) {
      case 0:
        drawSingleHorizontals();
        break;
      case 1:
        drawSingleVerticals();
        break;
      case 2:
        drawThickThinHorizontals();
        break;
      case 3:
        drawThickThinVerticals();
        break;
      case 4:
        drawRepeatingHorizontals();
        break;
      case 5:
        drawRepeatingVerticals();
        break;
      case 6:
        drawAlternatingWeights();
        break;
      case 7:
        drawSparseLines();
        break;
      case 8:
        drawDenseLines();
        break;
      case 9:
        drawMovingVerticals();
        break;
      case 10:
        drawExpandingHorizontals();
        break;
      case 11:
        drawScrollingLines();
        break;
      case 12:
        drawBouncingHorizontals();
        break;
      case 13:
        drawWavingVerticals();
        break;
      case 14:
        drawRisingLines();
        break;
      case 15:
        drawConvergingLines();
        break;
    }
  } else {
    // Show UI when not running
    document.getElementById('info').style.display = 'block';
    drawIdlePattern();
  }
}

// Mouse click handler - stop/restart
function mousePressed() {
  if (isRunning) {
    stopSequence();
  } else {
    startSequence();
  }
}

// Pattern 1: Single horizontals - very sparse
function drawSingleHorizontals() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 2, 8));
  let spacing = height / (numLines + 1);

  for (let i = 1; i <= numLines; i++) {
    // Alternate between very thick and thin for contrast
    let w = i % 2 === 0 ? map(beatIntensity, 0, 1, 5, 30) : thinLineWeight;
    strokeWeight(w);
    let y = i * spacing;
    line(0, y, width, y);
  }
}

// Pattern 2: Single verticals - very sparse
function drawSingleVerticals() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 2, 8));
  let spacing = width / (numLines + 1);

  for (let i = 1; i <= numLines; i++) {
    let w = map(beatIntensity, 0, 1, 1, 12);
    strokeWeight(w);
    let x = i * spacing;
    line(x, 0, x, height);
  }
}

// Pattern 3: Thick-thin horizontals alternating
function drawThickThinHorizontals() {
  stroke(fgColor);

  let numLines = floor(map(currentFreq, 100, 2000, 4, 16));
  let spacing = height / numLines;

  for (let i = 0; i < numLines; i++) {
    let y = i * spacing;
    // Alternate thick and thin
    if (i % 2 === 0) {
      strokeWeight(thickLineWeight);
    } else {
      strokeWeight(thinLineWeight);
    }
    line(0, y, width, y);
  }
}

// Pattern 4: Thick-thin verticals alternating
function drawThickThinVerticals() {
  stroke(fgColor);

  let numLines = floor(map(currentFreq, 100, 2000, 4, 16));
  let spacing = width / numLines;

  for (let i = 0; i < numLines; i++) {
    let x = i * spacing;
    // Alternate thick and thin
    if (i % 2 === 0) {
      strokeWeight(thickLineWeight);
    } else {
      strokeWeight(thinLineWeight);
    }
    line(x, 0, x, height);
  }
}

// Pattern 5: Repeating horizontals (groups of 3) with extreme weights
function drawRepeatingHorizontals() {
  stroke(fgColor);

  let groupSpacing = height / 5;
  let innerSpacing = map(beatIntensity, 0, 1, 5, 15);

  for (let group = 0; group < 5; group++) {
    let y = group * groupSpacing + groupSpacing / 2;

    for (let i = -1; i <= 1; i++) {
      // Center line very thick, outer lines very thin
      strokeWeight(i === 0 ? thickLineWeight * 1.5 : thinLineWeight);
      line(0, y + i * innerSpacing, width, y + i * innerSpacing);
    }
  }
}

// Pattern 6: Repeating verticals (groups of 3)
function drawRepeatingVerticals() {
  stroke(fgColor);

  let groupSpacing = width / 5;
  let innerSpacing = 8;

  for (let group = 0; group < 5; group++) {
    let x = group * groupSpacing + groupSpacing / 2;

    for (let i = -1; i <= 1; i++) {
      strokeWeight(i === 0 ? thickLineWeight : thinLineWeight);
      line(x + i * innerSpacing, 0, x + i * innerSpacing, height);
    }
  }
}

// Pattern 7: Alternating weights (extreme contrast pattern)
function drawAlternatingWeights() {
  stroke(fgColor);

  let spacing = map(density, 0, 1, 25, 70);
  let numLines = floor(height / spacing);
  // Extreme contrast pattern: thin-thin-THICK-thin-VERY_THICK
  let pattern = [
    thinLineWeight,
    thinLineWeight,
    thickLineWeight,
    thinLineWeight,
    thickLineWeight * 2,
    thinLineWeight,
    thinLineWeight,
    thickLineWeight
  ];

  for (let i = 0; i < numLines; i++) {
    let y = i * spacing;
    let w = pattern[i % pattern.length];
    strokeWeight(w);
    line(0, y, width, y);
  }
}

// Pattern 8: Sparse lines - minimal with extreme weights
function drawSparseLines() {
  stroke(fgColor);

  // Just 3-5 lines
  let numLines = floor(map(density, 0, 1, 3, 5));

  for (let i = 0; i < numLines; i++) {
    let y = (i + 1) * height / (numLines + 1);
    // Alternate between very thick and medium
    let w = i % 2 === 0 ? map(beatIntensity, 0, 1, 10, 40) : map(beatIntensity, 0, 1, 2, 8);
    strokeWeight(w);
    line(0, y, width, y);
  }
}

// Pattern 9: Dense lines - many thin lines with extreme thick accents
function drawDenseLines() {
  stroke(fgColor);

  let spacing = map(currentFreq, 100, 2000, 3, 15);
  let numLines = floor(height / spacing);

  for (let i = 0; i < numLines; i++) {
    let y = i * spacing;
    // Most thin, occasional very thick for extreme contrast
    let w = random(1) < 0.9 ? thinLineWeight : thickLineWeight * 2;
    strokeWeight(w);
    line(0, y, width, y);
  }
}

// Pattern 10: Moving verticals - lines move from right to left and change size
function drawMovingVerticals() {
  stroke(fgColor);

  // Initialize moving lines if needed
  if (movingLines.length === 0 || frameCount % 30 === 0) {
    movingLines = [];
    let numLines = floor(map(density, 0, 1, 5, 15));
    for (let i = 0; i < numLines; i++) {
      movingLines.push({
        x: random(width, width + 500),
        speed: random(2, 8),
        weight: random([thinLineWeight, thickLineWeight, thickLineWeight * 1.5]),
        phase: random(TWO_PI)
      });
    }
  }

  // Update and draw moving lines
  for (let line of movingLines) {
    // Move left - speed influenced by BPM
    let speedMultiplier = map(Tone.Transport.bpm.value, 60, 200, 0.5, 2);
    line.x -= line.speed * speedMultiplier;

    // Reset when off screen
    if (line.x < -50) {
      line.x = width + random(50, 200);
      line.weight = random([thinLineWeight, thickLineWeight, thickLineWeight * 2]);
      line.speed = random(2, 8);
    }

    // Oscillating weight
    let w = line.weight * (1 + sin(frameCount * 0.05 + line.phase) * 0.3);
    strokeWeight(w);
    line(line.x, 0, line.x, height);
  }
}

// Pattern 11: Expanding horizontals - lines that pulse in width
function drawExpandingHorizontals() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 4, 10));
  let spacing = height / (numLines + 1);

  for (let i = 1; i <= numLines; i++) {
    let y = i * spacing;

    // Pulsing weight based on time and position - influenced by BPM
    let pulseSpeed = map(Tone.Transport.bpm.value, 60, 200, 0.02, 0.06);
    let pulsePhase = (frameCount * pulseSpeed + i * 0.5);
    let basePulse = sin(pulsePhase);
    let w = map(basePulse, -1, 1, thinLineWeight, thickLineWeight * 2);

    // Additional beat response
    w += beatIntensity * 10;

    strokeWeight(w);
    line(0, y, width, y);
  }
}

// Pattern 12: Scrolling lines - horizontal lines that move up/down
function drawScrollingLines() {
  stroke(fgColor);

  let spacing = 30;
  let numLines = floor(height / spacing) + 2;
  let offset = scrollOffset % spacing;

  for (let i = -1; i < numLines; i++) {
    let y = i * spacing - offset;

    // Alternating weights
    let w = (i + floor(scrollOffset / spacing)) % 3 === 0 ? thickLineWeight : thinLineWeight;
    strokeWeight(w);

    if (y >= 0 && y <= height) {
      line(0, y, width, y);
    }
  }
}

// Pattern 13: Bouncing horizontals - lines move up and down
function drawBouncingHorizontals() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 5, 12));

  for (let i = 0; i < numLines; i++) {
    // Each line bounces independently
    let baseY = (i + 1) * height / (numLines + 1);
    let bounceAmount = sin(frameCount * 0.05 + i * 0.8) * 40;
    let y = baseY + bounceAmount;

    // Weight based on position
    let w = abs(bounceAmount) > 20 ? thickLineWeight : thinLineWeight;
    strokeWeight(w);

    line(0, y, width, y);
  }
}

// Pattern 14: Waving verticals - vertical lines that wave
function drawWavingVerticals() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 8, 20));
  let spacing = width / numLines;

  for (let i = 0; i < numLines; i++) {
    let x = i * spacing;

    // Create waving effect
    let waveOffset = sin(frameCount * 0.03 + i * 0.3) * 15;

    // Alternating weights
    let w = i % 2 === 0 ? thickLineWeight : thinLineWeight;
    strokeWeight(w);

    // Draw wavy vertical line with segments
    for (let y = 0; y < height; y += 20) {
      let x1 = x + sin((y + frameCount) * 0.02 + i * 0.3) * waveOffset;
      let x2 = x + sin((y + 20 + frameCount) * 0.02 + i * 0.3) * waveOffset;
      line(x1, y, x2, min(y + 20, height));
    }
  }
}

// Pattern 15: Rising lines - lines that rise from bottom
function drawRisingLines() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 6, 15));

  for (let i = 0; i < numLines; i++) {
    // Each line rises at different rate
    let risePhase = (frameCount * 0.02 + i * 0.5) % (height + 100);
    let y = height - risePhase;

    // Only draw if visible
    if (y >= -10 && y <= height + 10) {
      // Weight changes as it rises
      let progress = risePhase / height;
      let w = map(sin(progress * PI), 0, 1, thinLineWeight, thickLineWeight * 2);
      strokeWeight(w);

      line(0, y, width, y);
    }
  }
}

// Pattern 16: Converging lines - lines move toward center
function drawConvergingLines() {
  stroke(fgColor);

  let numLines = floor(map(density, 0, 1, 4, 10));

  for (let i = 0; i < numLines; i++) {
    let progress = (sin(frameCount * 0.04 + i * 0.5) + 1) / 2; // 0 to 1

    // Converge toward center
    let centerY = height / 2;
    let startY = i < numLines / 2 ? 0 : height;
    let y = lerp(startY, centerY, progress);

    // Weight based on convergence
    let w = map(progress, 0, 1, thinLineWeight, thickLineWeight * 1.5);
    strokeWeight(w);

    line(0, y, width, y);
  }
}


// Idle pattern
function drawIdlePattern() {
  stroke(fgColor);
  strokeWeight(1);

  // Just center crosshair
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  // Four corner marks
  let markSize = 20;
  line(0, 0, markSize, 0);
  line(0, 0, 0, markSize);
  line(width - markSize, 0, width, 0);
  line(width, 0, width, markSize);
  line(0, height, markSize, height);
  line(0, height - markSize, 0, height);
  line(width - markSize, height, width, height);
  line(width, height - markSize, width, height);
}

// Initialize audio components
function initAudio() {
  // Effects chain
  autoFilter = new Tone.AutoFilter({
    frequency: '8n',
    type: 'sine',
    depth: 0.6,
    baseFrequency: 200,
    octaves: 2.6,
    filter: {
      type: 'lowpass',
      rolloff: -12,
      Q: 1
    }
  });

  feedback = new Tone.FeedbackDelay({
    delayTime: '16n',
    feedback: 0.4,
    wet: 0.3
  });

  reverb = new Tone.Reverb({
    decay: 3,
    wet: 0.5
  }).connect(feedback);

  filter = new Tone.Filter({
    frequency: 2500,
    type: 'highpass',
    rolloff: -24
  }).connect(reverb);

  filter.toDestination();

  // Synths - varied timbres
  synth = new Tone.MembraneSynth({
    pitchDecay: 0.008,
    octaves: 4,
    envelope: {
      attack: 0.0005,
      decay: 0.2,
      sustain: 0
    }
  }).connect(filter);

  fmSynth = new Tone.FMSynth({
    harmonicity: random([3, 5, 8, 12]),
    modulationIndex: random(8, 20),
    envelope: {
      attack: 0.001,
      decay: 0.3,
      sustain: 0
    },
    modulation: {
      type: random(['square', 'sawtooth', 'triangle'])
    },
    modulationEnvelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0
    }
  }).connect(autoFilter);

  autoFilter.connect(reverb);

  amSynth = new Tone.AMSynth({
    harmonicity: random([2, 3, 4, 5]),
    envelope: {
      attack: 0.002,
      decay: 0.3,
      sustain: 0
    },
    modulation: {
      type: 'square'
    },
    modulationEnvelope: {
      attack: 0.001,
      decay: 0.15,
      sustain: 0
    }
  }).connect(filter);

  pluck = new Tone.PluckSynth({
    attackNoise: random(1, 3),
    dampening: random(1000, 4000),
    resonance: 0.95
  }).connect(reverb);

  noiseSynth = new Tone.NoiseSynth({
    noise: { type: random(['white', 'pink', 'brown']) },
    envelope: {
      attack: 0.001,
      decay: random(0.03, 0.1),
      sustain: 0
    }
  }).connect(filter);

  // Oscillators - continuous drones
  osc1 = new Tone.Oscillator({
    frequency: 0,
    type: 'sine',
    volume: -20
  }).connect(reverb);

  osc2 = new Tone.Oscillator({
    frequency: 0,
    type: 'triangle',
    volume: -24
  }).connect(filter);

  osc3 = new Tone.Oscillator({
    frequency: 0,
    type: 'square',
    volume: -28
  }).connect(autoFilter);
}

// Helper: MIDI note to frequency
function midiToFreq(midi) {
  return Tone.Frequency(midi, 'midi').toFrequency();
}

// Setup sequencer
function setupSequencer() {
  // Clean up existing loops if any
  if (mainLoop) mainLoop.dispose();
  if (melodicLoop) melodicLoop.dispose();
  if (textureLoop) textureLoop.dispose();
  if (oscLoop) oscLoop.dispose();
  if (bpmLoop) bpmLoop.dispose();

  // Random BPM between 100-180
  Tone.Transport.bpm.value = floor(random(100, 181));

  // Start oscillators
  osc1.start();
  osc2.start();
  osc3.start();
  autoFilter.start();

  let stepCount = 0;
  let oscStep = 0;

  // Main rhythmic loop - probabilistic triggers
  mainLoop = new Tone.Loop((time) => {
    let step = stepCount % rhythmPattern.length;

    // Probabilistic triggering based on rhythm pattern
    if (rhythmPattern[step] && random(1) < density) {
      // Random synth selection with more variety
      let synthChoice = random(1);
      let octave = floor(random(currentOctave - 1, currentOctave + 2));
      let note = currentScale[floor(random(currentScale.length))];
      let freq = midiToFreq(octave * 12 + note);

      if (synthChoice < 0.25) {
        synth.triggerAttackRelease(freq, '32n', time);
      } else if (synthChoice < 0.45) {
        noiseSynth.triggerAttackRelease('32n', time);
      } else if (synthChoice < 0.65) {
        fmSynth.triggerAttackRelease(freq, '16n', time);
      } else if (synthChoice < 0.85) {
        amSynth.triggerAttackRelease(freq, '8n', time);
      } else {
        pluck.triggerAttackRelease(freq, time);
      }

      // Visual feedback
      Tone.Draw.schedule(() => {
        beatIntensity = random(0.6, 1);
        currentFreq = freq;
        lineWeight = map(freq, 100, 2000, 1, 3);
        lineOffset = random(50, 200);

        // Occasionally change pattern on strong beats for rhythm
        if (random(1) < 0.1) {
          currentPattern++;
          movingLines = [];
        }
      }, time);
    }

    stepCount++;

    // Every 16 steps, change parameters
    if (stepCount % 16 === 0) {
      density = random(0.2, 0.9);
      Tone.Draw.schedule(() => {
        // Update line weights - extreme contrasts
        thickLineWeight = random([5, 8, 12, 15, 20, 25, 30, 40, 50]);
        thinLineWeight = random([1, 1, 1, 1, 2]);
        lineSpacing = random(10, 100);
      }, time);
    }

    // Every 8 steps, maybe quick color flash
    if (stepCount % 8 === 0 && random(1) < 0.15) {
      Tone.Draw.schedule(() => {
        inverted = !inverted;
        bgColor = inverted ? color(255) : darkBlue;
        fgColor = inverted ? darkBlue : color(255);
      }, time);
    }

    // Every 32 steps, maybe change octave range
    if (stepCount % 32 === 0 && random(1) < 0.5) {
      currentOctave = floor(random(5, 8));
    }
  }, '16n');

  // Melodic/textural loop - varied timings
  let melodicStep = 0;
  melodicLoop = new Tone.Loop((time) => {
    // Variable probability
    if (random(1) < random(0.2, 0.6)) {
      let octave = floor(random(6, 10));
      let noteIdx = melodicStep % currentScale.length;
      let note = currentScale[noteIdx];
      let freq = midiToFreq(octave * 12 + note);

      // More synth choices
      let choice = random(1);
      if (choice < 0.3) {
        amSynth.triggerAttackRelease(freq, random(['8n', '16n', '4n']), time);
      } else if (choice < 0.6) {
        pluck.triggerAttackRelease(freq, time);
      } else if (choice < 0.8) {
        fmSynth.triggerAttackRelease(freq, random(['16n', '32n']), time);
      } else {
        synth.triggerAttackRelease(freq, '64n', time);
      }

      // Visual feedback
      Tone.Draw.schedule(() => {
        lineCount = floor(map(freq, 200, 4000, 8, 50));
      }, time);
    }

    melodicStep++;
  }, random(['4n', '8n', '2n']));

  // Oscillator modulation loop
  oscLoop = new Tone.Loop((time) => {
    oscStep++;

    // Change oscillator frequencies
    let baseNote = currentScale[oscStep % currentScale.length];
    let baseFreq = midiToFreq(floor(random(2, 5)) * 12 + baseNote);

    osc1.frequency.rampTo(baseFreq, 2);
    osc2.frequency.rampTo(baseFreq * random([1, 1.5, 2, 3]), 3);
    osc3.frequency.rampTo(baseFreq * random([0.5, 0.75, 1.25, 2.5]), 4);

    // Sometimes turn oscillators on/off
    Tone.Draw.schedule(() => {
      if (random(1) < 0.3) {
        osc1.volume.value = random(1) < 0.5 ? -20 : -Infinity;
      }
      if (random(1) < 0.3) {
        osc2.volume.value = random(1) < 0.5 ? -24 : -Infinity;
      }
      if (random(1) < 0.3) {
        osc3.volume.value = random(1) < 0.5 ? -28 : -Infinity;
      }
    }, time);
  }, random(['1m', '2m', '4m']));

  // Texture/evolution loop - changes patterns and colors
  textureLoop = new Tone.Loop((time) => {
    // Regenerate musical material
    Tone.Draw.schedule(() => {
      generateNewScale();
      generateRhythmPattern();
      currentPattern++;

      // Change BPM dynamically - dramatic shifts
      let newBPM = random([
        random(80, 100),   // slow
        random(120, 140),  // medium
        random(160, 200)   // fast
      ]);
      Tone.Transport.bpm.rampTo(newBPM, random(2, 8)); // Smooth transition

      // Update status
      document.getElementById('statusText').textContent = 'running | bpm: ' + floor(newBPM);

      // Color inversion - more frequent for rhythm
      if (random(1) < 0.7) {
        inverted = !inverted;
        bgColor = inverted ? color(255) : darkBlue;
        fgColor = inverted ? darkBlue : color(255);
      }

      // Reset line weights on pattern change - extreme contrasts
      thickLineWeight = random([5, 8, 12, 15, 20, 25, 30, 40, 50]);
      thinLineWeight = random([1, 1, 1, 1, 2]);
      lineWeight = random([1, 2, 3]);

      // Reset moving lines array for new pattern
      movingLines = [];
    }, time);

    // Occasional noise burst
    if (random(1) < 0.4) {
      noiseSynth.triggerAttackRelease(random(['8n', '16n', '4n']), time);

      Tone.Draw.schedule(() => {
        beatIntensity = 1;
      }, time);
    }

    // Sometimes change autoFilter settings
    if (random(1) < 0.5) {
      autoFilter.frequency.value = random(['4n', '8n', '16n', '2n']);
      autoFilter.depth.value = random(0.3, 0.9);
    }
  }, random(['15s', '20s', '30s', '45s'])); // Faster, more rhythmic changes

  // BPM variation loop - subtle changes more frequently
  bpmLoop = new Tone.Loop((time) => {
    // Small BPM variations
    if (random(1) < 0.4) {
      let currentBPM = Tone.Transport.bpm.value;
      let variation = random(-15, 15);
      let newBPM = constrain(currentBPM + variation, 60, 200);
      Tone.Transport.bpm.rampTo(newBPM, random(4, 12));
    }
  }, random(['8m', '16m']));

  // Start loops
  mainLoop.start(0);
  melodicLoop.start(random(['0', '4n', '8n'])); // Random offset
  textureLoop.start('1m'); // Start after 1 bar
  oscLoop.start('2m'); // Start after 2 bars
  bpmLoop.start('4m'); // Start after 4 bars
}

// Start sequence
async function startSequence() {
  if (!isRunning) {
    await Tone.start();

    // Initialize audio if needed
    if (!synth) {
      initAudio();
    }

    // Always recreate sequencer to avoid timing conflicts
    setupSequencer();

    // Start transport
    Tone.Transport.start();
    isRunning = true;

    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('statusText').textContent = 'running | bpm: ' + floor(Tone.Transport.bpm.value);
  }
}

// Stop sequence
function stopSequence() {
  if (isRunning) {
    // Stop transport
    Tone.Transport.stop();

    // Stop oscillators
    if (osc1) osc1.stop();
    if (osc2) osc2.stop();
    if (osc3) osc3.stop();
    if (autoFilter) autoFilter.stop();

    // Stop and dispose loops
    if (mainLoop) {
      mainLoop.stop();
      mainLoop.dispose();
      mainLoop = null;
    }
    if (melodicLoop) {
      melodicLoop.stop();
      melodicLoop.dispose();
      melodicLoop = null;
    }
    if (textureLoop) {
      textureLoop.stop();
      textureLoop.dispose();
      textureLoop = null;
    }
    if (oscLoop) {
      oscLoop.stop();
      oscLoop.dispose();
      oscLoop = null;
    }
    if (bpmLoop) {
      bpmLoop.stop();
      bpmLoop.dispose();
      bpmLoop = null;
    }

    isRunning = false;
    currentPattern = 0;

    // Reset visual params
    beatIntensity = 0;
    density = 0.5;
    inverted = false;
    bgColor = darkBlue;
    fgColor = color(255);
    thickLineWeight = 30;
    thinLineWeight = 1;
    lineWeight = 2;
    scrollOffset = 0;
    movingLines = [];

    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('statusText').textContent = 'idle';
  }
}

// Window resize handler
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
