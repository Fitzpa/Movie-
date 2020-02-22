import React, { useState, useRef, useEffect } from 'react';
import * as Tone from 'tone';

const Tones = () => {
  const [freq, setFreq] = useState();
  const [oscType, setOscType] = useState();
  const [modType, setModType] = useState();

  //   useEffect(() => {
  //     setFreq(frequency.value);
  //   }, [frequency.value]);
  //   useEffect(() => {
  //     setFreq(frequency.value);
  //   }, [oscType.option.value]);

  const synth = new Tone.MembraneSynth().toMaster();

  function playSynth() {
    synth.triggerAttackRelease('C2', '8n');
  }
  //   var fmOsc = new Tone.FMOscillator('Ab3', 'sine', 'square').toMaster();
  var fmOsc = new Tone.FMOscillator(freq, oscType, modType).toMaster();
  //   fmOsc.connect(env);
  //   env.toMaster();
  function playFMSynth() {
    fmOsc.start();
    // env.triggerAttack();
  }
  function stopFMSynth() {
    fmOsc.stop();
    // env.triggerAttack();
  }
  var env = new Tone.AmplitudeEnvelope();
  console.log('freq: ', freq);
  console.log('osc: ', oscType);
  console.log('mod: ', modType);
  return (
    <section className="section">
      <div>
        <button onClick={playSynth}>Kick</button>
      </div>
      <div className="fm-synth">
        <div className="synth-builder">
          <input
            type="number"
            name="frequency"
            id="frequency"
            placeholder="Frequency"
            onChange={event => setFreq(event.target.value)}
          />
          <select
            name="oscType"
            id="oscType"
            onChange={event => setOscType(event.target.value)}
          >
            <option value="sine">sine</option>
            <option value="triangle">triangle</option>
            <option value="square">square</option>
            <option value="saw">saw</option>
          </select>
          <select
            name="modType"
            id="modType"
            onChange={event => setModType(event.target.value)}
          >
            <option value="sine">sine</option>
            <option value="triangle">triangle</option>
            <option value="square">square</option>
            <option value="saw">saw</option>
          </select>
        </div>
        <div className="play-pause">
          <button
            onClick={() => {
              console.log('play fm');
              playFMSynth();
            }}
          >
            FM
          </button>
          <button
            onClick={() => {
              console.log('stop fm');
              stopFMSynth();
            }}
          >
            FM STOP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tones;
