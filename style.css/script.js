<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<title>O Grito na Taça</title>


<style>

/* =========================================================
   RESET
========================================================= */

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}


/* =========================================================
   BODY
========================================================= */

body{

  background:
  linear-gradient(
    145deg,
    #080c13,
    #182235
  );

  color:#eef4ff;

  font-family:
  Arial,
  "Segoe UI",
  sans-serif;

  min-height:100vh;

  padding:25px 15px;

}


/* =========================================================
   TÍTULO
========================================================= */

h1{

  text-align:center;

  font-size:2.4rem;

  font-weight:400;

  color:#dce9ff;

  margin-bottom:8px;

}


.subhead{

  text-align:center;

  color:#8fa3c7;

  margin-bottom:25px;

}


/* =========================================================
   PAINEL PRINCIPAL
========================================================= */

.panel{

  max-width:1200px;

  margin:auto;

  background:#121a28ee;

  border:1px solid #334155;

  border-radius:28px;

  padding:25px;

}


/* =========================================================
   ABAS
========================================================= */

.tabs{

  display:flex;

  gap:8px;

  background:#09121e;

  padding:6px;

  border-radius:40px;

  margin-bottom:25px;

}


.tab{

  flex:1;

  padding:15px;

  border:0;

  border-radius:30px;

  background:transparent;

  color:#8ca4c8;

  cursor:pointer;

  font-weight:bold;

  font-size:1rem;

  transition:.2s;

}


.tab:hover{

  background:#182a43;

}


.tab.active{

  background:#29405f;

  color:white;

}


/* =========================================================
   CONTEÚDO DAS ABAS
========================================================= */

.content{

  display:none;

}


.content.active{

  display:block;

}


/* =========================================================
   GRID
========================================================= */

.grid{

  display:grid;

  grid-template-columns:
  360px 1fr;

  gap:20px;

}


/* =========================================================
   CARDS
========================================================= */

.card{

  background:#0d1420;

  border:1px solid #26334a;

  border-radius:23px;

  padding:20px;

  margin-bottom:18px;

}


.title{

  color:#7797d4;

  font-size:.8rem;

  letter-spacing:2px;

  margin-bottom:15px;

}


/* =========================================================
   FREQUÊNCIA
========================================================= */

.hz{

  background:#09121e;

  border:2px solid #304b73;

  border-radius:20px;

  text-align:center;

  padding:20px;

}


.hz-value{

  color:#64d8ff;

  font-size:4rem;

  font-weight:800;

  line-height:1;

}


.hz-value.found{

  color:#ffb86b;

  text-shadow:
  0 0 25px #ffb86b;

}


.hz-label{

  color:#61799f;

  font-size:.7rem;

  letter-spacing:2px;

  margin-top:10px;

}


.live{

  color:#50fa7b;

  font-size:.75rem;

  margin-top:8px;

  letter-spacing:1px;

}


/* =========================================================
   TIMER DA TAÇA
========================================================= */

.timer{

  text-align:center;

  margin:18px 0;

  color:#ffb86b;

}


.timer-number{

  font-size:3rem;

  font-weight:bold;

}


.timer-label{

  font-size:.7rem;

  letter-spacing:2px;

  color:#7088aa;

}


/* =========================================================
   NÍVEL DO MICROFONE
========================================================= */

.level{

  height:9px;

  background:#182438;

  border-radius:10px;

  margin:15px 0;

  overflow:hidden;

}


.level-fill{

  height:100%;

  width:0;

  background:
  linear-gradient(
    90deg,
    #64d8ff,
    #50fa7b
  );

  transition:.08s;

}


/* =========================================================
   STATUS
========================================================= */

.status{

  background:#101a28;

  border-radius:30px;

  padding:12px;

  text-align:center;

  color:#8ca9e0;

  margin:15px 0;

  min-height:43px;

  display:flex;

  justify-content:center;

  align-items:center;

}


/* =========================================================
   BOTÕES
========================================================= */

.btn{

  width:100%;

  padding:14px;

  border-radius:30px;

  border:1px solid #49658f;

  background:#1d2b42;

  color:#d4e4ff;

  cursor:pointer;

  font-weight:bold;

  margin-top:8px;

  transition:.2s;

}


.btn:hover{

  background:#2b4265;

}


.btn:active{

  transform:scale(.98);

}


.btn.secondary{

  background:transparent;

}


/* =========================================================
   CANVAS
========================================================= */

canvas{

  width:100%;

  height:420px;

  background:#080d15;

  border-radius:20px;

  display:block;

}


/* =========================================================
   NOTAS
========================================================= */

.note{

  background:#0f1c2e;

  border:1px solid #2a4060;

  padding:12px;

  border-radius:15px;

  color:#8ca4c8;

  line-height:1.5;

  font-size:.85rem;

}


/* =========================================================
   ALVO
========================================================= */

.target{

  display:flex;

  align-items:center;

  gap:10px;

  flex-wrap:wrap;

}


.target-value{

  color:#ffb86b;

  font-size:2.5rem;

  font-weight:bold;

}


input[type=number]{

  width:110px;

  background:#101a28;

  border:1px solid #405675;

  color:#ffb86b;

  padding:10px;

  border-radius:10px;

  font-weight:bold;

  font-size:1rem;

  text-align:center;

}


/* =========================================================
   ENERGIA
========================================================= */

.energy{

  height:14px;

  background:#0b111c;

  border-radius:20px;

  overflow:hidden;

  margin-top:15px;

}


.energy-fill{

  width:0;

  height:100%;

  background:
  linear-gradient(
    90deg,
    #ffb86b,
    #ff4d6d
  );

  transition:.1s;

}


.energy-info{

  display:flex;

  justify-content:space-between;

  margin-top:7px;

  color:#7890b0;

  font-size:.85rem;

}


/* =========================================================
   MENSAGEM DE QUEBRA
========================================================= */

.crack{

  text-align:center;

  font-size:1.4rem;

  font-weight:bold;

  margin-top:15px;

  min-height:30px;

  transition:.2s;

}


/* =========================================================
   SALVO
========================================================= */

.saved{

  color:#50fa7b;

  text-align:center;

  margin-top:10px;

  font-weight:bold;

}


/* =========================================================
   LIVE BOX
========================================================= */

.live-box{

  display:flex;

  justify-content:space-between;

  align-items:center;

  background:#101a28;

  border-radius:15px;

  padding:12px;

  margin-top:15px;

}


.live-box span:first-child{

  color:#7890b0;

}


.live-box span:last-child{

  color:#64d8ff;

  font-size:1.3rem;

  font-weight:bold;

}


/* =========================================================
   TEMPO MÉDIO
========================================================= */

.resonance-time{

  background:#101a28;

  border:1px solid #304766;

  border-radius:18px;

  padding:16px;

  margin-top:18px;

  text-align:center;

}


.resonance-time-title{

  color:#7890b0;

  font-size:.75rem;

  letter-spacing:2px;

}


.resonance-time-value{

  color:#ffb86b;

  font-size:2rem;

  font-weight:bold;

  margin-top:6px;

}


.resonance-time-description{

  color:#607895;

  font-size:.75rem;

  margin-top:5px;

  line-height:1.4;

}


/* =========================================================
   CRONÔMETRO DE RESSONÂNCIA
========================================================= */

.break-timer{

  margin-top:15px;

  background:#09121e;

  border-radius:18px;

  padding:15px;

  text-align:center;

}


.break-timer-label{

  color:#7890b0;

  font-size:.7rem;

  letter-spacing:2px;

}


#resonanceTimer{

  color:#64d8ff;

  font-size:2.2rem;

  font-weight:bold;

  margin:5px 0 12px;

}


.break-progress{

  width:100%;

  height:9px;

  background:#182438;

  border-radius:20px;

  overflow:hidden;

}


.break-progress-fill{

  width:0%;

  height:100%;

  background:
  linear-gradient(
    90deg,
    #64d8ff,
    #50fa7b,
    #ffb86b,
    #ff4d6d
  );

  transition:.05s linear;

}


/* =========================================================
   RESPONSIVIDADE
========================================================= */

@media(max-width:800px){

  .grid{

    grid-template-columns:1fr;

  }


  .hz-value{

    font-size:3rem;

  }


  canvas{

    height:300px;

  }

}


@media(max-width:500px){

  body{

    padding:12px 8px;

  }


  .panel{

    padding:12px;

    border-radius:20px;

  }


  h1{

    font-size:1.8rem;

  }


  .tabs{

    flex-direction:column;

    border-radius:20px;

  }


  .tab{

    border-radius:15px;

  }

}

</style>

</head>


<body>


<h1>
  ⚡ O GRITO NA TAÇA ⚡
</h1>


<div class="subhead">

  Descobrir Hz da Taça · Medir Hz da Voz · Ressonância

</div>


<div class="panel">


<!-- =====================================================
     ABAS
===================================================== -->

<div class="tabs">

  <button
    class="tab active"
    data-tab="glass">

    🍷 Descobrir Hz da Taça

  </button>


  <button
    class="tab"
    data-tab="voice">

    🎤 Medir Hz da Voz

  </button>

</div>


<!-- =====================================================
     ABA TAÇA
===================================================== -->

<div
  class="content active"
  id="glass">


<div class="grid">


<!-- =====================================================
     PAINEL ESQUERDO
===================================================== -->

<div>


<div class="card">


<div class="title">

  🔬 DETECÇÃO DA FREQUÊNCIA DA TAÇA

</div>


<div class="hz">


<div
  class="hz-value"
  id="glassHz">

  ---

</div>


<div class="hz-label">

  FREQUÊNCIA DA TAÇA

</div>


<div class="live">

  ● FREQUÊNCIA DEFINITIVA APÓS A MEDIÇÃO

</div>


</div>


<div class="timer">


<div
  class="timer-number"
  id="timer">

  5.0

</div>


<div class="timer-label">

  SEGUNDOS DE DETECÇÃO

</div>


</div>


<div class="level">

  <div
    class="level-fill"
    id="glassLevel">
  </div>

</div>


<div
  class="status"
  id="glassStatus">

  Ative o microfone para começar

</div>


<button
  class="btn"
  id="micBtn">

  🎤 Ativar microfone

</button>


<button
  class="btn secondary"
  id="newScan">

  ↻ Nova medição

</button>


<div
  class="saved"
  id="savedInfo">
</div>


</div>


<!-- =====================================================
     COMO FUNCIONA
===================================================== -->

<div class="card">


<div class="title">

  📊 COMO FUNCIONA

</div>


<div class="note">

  Ative o microfone e toque na borda da taça.

  <br><br>

  O sistema acompanha as frequências
  durante <strong>5 segundos</strong>.

  <br><br>

  Ao terminar, o programa escolhe a
  frequência de maior magnitude encontrada
  como frequência da taça.

  <br><br>

  Essa frequência fica <strong>fixa</strong>
  e será utilizada como alvo na segunda aba.

</div>


</div>


</div>


<!-- =====================================================
     GRÁFICO
===================================================== -->

<div>


<canvas
  id="glassCanvas"
  width="900"
  height="420">
</canvas>


<div
  class="card"
  style="margin-top:15px">


<div class="title">

  📈 FREQUÊNCIA EM TEMPO REAL

</div>


<div class="live-box">

<span>

  Frequência atual detectada

</span>


<span id="glassLiveHz">

  ---

</span>

</div>


<div class="title"
  style="margin-top:20px">

  📊 PICOS DETECTADOS

</div>


<div id="peaks">

  Nenhum pico detectado.

</div>


</div>


</div>


</div>


</div>


<!-- =====================================================
     ABA VOZ
===================================================== -->

<div
  class="content"
  id="voice">


<div class="grid">


<!-- =====================================================
     PAINEL ESQUERDO
===================================================== -->

<div>


<!-- =====================================================
     MEDIDOR DE VOZ
===================================================== -->

<div class="card">


<div class="title">

  🎤 MEDIDOR DE FREQUÊNCIA DA VOZ

</div>


<div class="hz">


<div
  class="hz-value"
  id="voiceHz">

  ---

</div>


<div class="hz-label">

  FREQUÊNCIA DA SUA VOZ

</div>


<div class="live">

  ● LEITURA EM TEMPO REAL

</div>


</div>


<div class="level">

  <div
    class="level-fill"
    id="voiceLevel">
  </div>

</div>


<div
  class="status"
  id="voiceStatus">

  Ative o microfone e faça um som constante

</div>


<button
  class="btn"
  id="voiceMic">

  🎤 Ativar microfone

</button>


<button
  class="btn secondary"
  id="voiceReset">

  ↻ Reiniciar

</button>


</div>


<!-- =====================================================
     FREQUÊNCIA DA TAÇA
===================================================== -->

<div class="card">


<div class="title">

  🎯 FREQUÊNCIA DA TAÇA

</div>


<div class="target">


<span
  class="target-value"
  id="targetDisplay">

  850

</span>


<span>

  Hz

</span>


<input
  type="number"
  id="targetInput"
  min="50"
  max="2000"
  value="850"
>


<button
  class="btn"
  id="applyTarget"
  style="width:auto;margin:0">

  Aplicar

</button>


</div>


<div
  class="note"
  style="margin-top:15px">

  Esta é a frequência medida da taça.

  <br><br>

  Sua voz deve ficar o mais próxima possível
  dessa frequência.

  <br><br>

  A frequência da taça permanece fixa enquanto
  a frequência da voz muda.

</div>


<!-- =====================================================
     TEMPO MÉDIO
===================================================== -->

<div class="resonance-time">


<div class="resonance-time-title">

  ⏱️ TEMPO MÉDIO PARA A QUEBRA

</div>


<div class="resonance-time-value">

  2,5 s

</div>


<div class="resonance-time-description">

  A frequência precisa permanecer dentro
  da tolerância durante 2,5 segundos contínuos.

</div>


</div>


<!-- =====================================================
     CRONÔMETRO
===================================================== -->

<div class="break-timer">


<div class="break-timer-label">

  TEMPO DE RESSONÂNCIA

</div>


<div id="resonanceTimer">

  0,0 s

</div>


<div class="break-progress">

<div
  id="breakProgress"
  class="break-progress-fill">
</div>

</div>


</div>


<!-- =====================================================
     RESSONÂNCIA
===================================================== -->

<div style="margin-top:20px">


<div
  id="crackMessage"
  class="crack">

  🍷 TAÇA INTACTA

</div>


<div class="energy">


<div
  class="energy-fill"
  id="energy">
</div>


</div>


<div class="energy-info">


<span>

  Ressonância

</span>


<span id="energyText">

  0%

</span>


</div>


</div>


</div>


</div>


<!-- =====================================================
     GRÁFICO DA VOZ
===================================================== -->

<div>


<canvas
  id="voiceCanvas"
  width="900"
  height="420">
</canvas>


<div
  class="card"
  style="margin-top:15px">


<div class="title">

  📡 MONITOR DA VOZ

</div>


<div class="live-box">


<span>

  Hz produzidos pela voz

</span>


<span id="voiceLiveHz">

  ---

</span>


</div>


<div class="live-box">


<span>

  Hz da taça

</span>


<span id="targetLiveHz">

  850 Hz

</span>


</div>


<div class="live-box">


<span>

  Diferença

</span>


<span id="differenceHz">

  ---

</span>


</div>


</div>


</div>


</div>


</div>


</div>


<script>


/* =========================================================
   CONFIGURAÇÕES
========================================================= */


/*
  Tempo usado para descobrir
  a frequência da taça.
*/

const DETECTION_TIME = 5000;


/*
  Tempo necessário de ressonância
  para simular a quebra.

  2500 ms = 2,5 segundos.
*/

const BREAK_TIME = 2500;


/*
  A voz pode variar até 8 Hz
  para cada lado da frequência
  da taça.

  Exemplo:

  Taça = 850 Hz

  Aceita:
  842 Hz → 858 Hz
*/

const FREQUENCY_TOLERANCE = 8;


/*
  Limite usado para considerar
  que existe som.
*/

const SILENCE = 0.008;


/*
  Frequência inicial.
*/

let TARGET_FREQ = 850;


/* =========================================================
   ÁUDIO
========================================================= */

let audioContext = null;

let analyser = null;

let microphone = null;

let stream = null;

let freqData = null;

let timeData = null;

let micActive = false;


/* =========================================================
   ESTADO
========================================================= */

let currentMode = "glass";

let scanRunning = false;

let scanStart = 0;

let scanTimer = null;


/*
  Melhor frequência encontrada
  durante a medição da taça.
*/

let bestFreq = 0;

let bestMagnitude = 0;


/*
  Frequência atual da voz.
*/

let voiceFreq = 0;


/*
  Estado da quebra.
*/

let voiceCracked = false;


/*
  Início da ressonância.
*/

let resonanceStart = 0;


/*
  Tempo atual de ressonância.
*/

let resonanceTime = 0;


/*
  Picos encontrados.
*/

let peaks = [];


/* =========================================================
   ELEMENTOS
========================================================= */

const tabs =
document.querySelectorAll(".tab");


const contents =
document.querySelectorAll(".content");


const glassHz =
document.getElementById("glassHz");


const glassLiveHz =
document.getElementById("glassLiveHz");


const glassLevel =
document.getElementById("glassLevel");


const glassStatus =
document.getElementById("glassStatus");


const timer =
document.getElementById("timer");


const savedInfo =
document.getElementById("savedInfo");


const micBtn =
document.getElementById("micBtn");


const newScan =
document.getElementById("newScan");


const voiceHz =
document.getElementById("voiceHz");


const voiceLiveHz =
document.getElementById("voiceLiveHz");


const voiceLevel =
document.getElementById("voiceLevel");


const voiceStatus =
document.getElementById("voiceStatus");


const voiceMic =
document.getElementById("voiceMic");


const voiceReset =
document.getElementById("voiceReset");


const targetDisplay =
document.getElementById("targetDisplay");


const targetInput =
document.getElementById("targetInput");


const applyTarget =
document.getElementById("applyTarget");


const targetLiveHz =
document.getElementById("targetLiveHz");


const differenceHz =
document.getElementById("differenceHz");


const energy =
document.getElementById("energy");


const energyText =
document.getElementById("energyText");


const crackMessage =
document.getElementById("crackMessage");


const peaksBox =
document.getElementById("peaks");


const resonanceTimer =
document.getElementById("resonanceTimer");


const breakProgress =
document.getElementById("breakProgress");


const glassCanvas =
document.getElementById("glassCanvas");


const glassCtx =
glassCanvas.getContext("2d");


const voiceCanvas =
document.getElementById("voiceCanvas");


const voiceCtx =
voiceCanvas.getContext("2d");


/* =========================================================
   TROCA DE ABA
========================================================= */

tabs.forEach(tab => {

  tab.addEventListener(
    "click",
    () => {

      currentMode =
      tab.dataset.tab;


      tabs.forEach(t => {

        t.classList.toggle(
          "active",
          t === tab
        );

      });


      contents.forEach(content => {

        content.classList.toggle(
          "active",
          content.id === currentMode
        );

      });

    }
  );

});


/* =========================================================
   MICROFONE
========================================================= */

async function startMicrophone(){

  /*
    Se o microfone já estiver ativo,
    o botão desliga.
  */

  if(micActive){

    stopMicrophone();

    return;

  }


  /*
    Verifica suporte do navegador.
  */

  if(
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ){

    glassStatus.textContent =
    "❌ Este navegador não suporta acesso ao microfone.";

    voiceStatus.textContent =
    "❌ Este navegador não suporta acesso ao microfone.";

    return;

  }


  try{

    /*
      Solicita o microfone.

      Os processamentos automáticos
      são desligados para tentar preservar
      melhor a frequência original.
    */

    stream =
    await navigator.mediaDevices.getUserMedia({

      audio:{
        echoCancellation:false,
        noiseSuppression:false,
        autoGainControl:false
      }

    });


    const AC =
    window.AudioContext ||
    window.webkitAudioContext;


    audioContext =
    new AC();


    if(
      audioContext.state === "suspended"
    ){

      await audioContext.resume();

    }


    analyser =
    audioContext.createAnalyser();


    /*
      FFT maior = maior resolução
      de frequência.
    */

    analyser.fftSize =
    16384;


    analyser.smoothingTimeConstant =
    0.2;


    freqData =
    new Uint8Array(
      analyser.frequencyBinCount
    );


    timeData =
    new Float32Array(
      analyser.fftSize
    );


    microphone =
    audioContext.createMediaStreamSource(
      stream
    );


    microphone.connect(
      analyser
    );


    micActive = true;


    updateButtons();


    /*
      Começa automaticamente
      a medição da taça.
    */

    if(
      currentMode === "glass"
    ){

      startScan();

    }


    analyse();


  }catch(error){

    console.error(error);


    glassStatus.textContent =
    "❌ Não foi possível acessar o microfone.";


    voiceStatus.textContent =
    "❌ Não foi possível acessar o microfone.";

  }

}


/* =========================================================
   DESLIGAR MICROFONE
========================================================= */

function stopMicrophone(){

  if(stream){

    stream
    .getTracks()
    .forEach(track => {

      track.stop();

    });

  }


  if(audioContext){

    if(
      audioContext.state !== "closed"
    ){

      audioContext.close();

    }

  }


  stream = null;

  audioContext = null;

  analyser = null;

  microphone = null;

  freqData = null;

  timeData = null;

  micActive = false;


  stopScan();


  updateButtons();


  glassLevel.style.width =
  "0%";


  voiceLevel.style.width =
  "0%";

}


/* =========================================================
   BOTÕES
========================================================= */

function updateButtons(){

  const text =
  micActive
  ? "🎤 Desativar microfone"
  : "🎤 Ativar microfone";


  micBtn.textContent =
  text;


  voiceMic.textContent =
  text;

}


/* =========================================================
   INICIAR MEDIÇÃO DA TAÇA
========================================================= */

function startScan(){

  if(!micActive)
    return;


  scanRunning = true;


  scanStart =
  performance.now();


  bestFreq = 0;

  bestMagnitude = 0;

  peaks = [];


  /*
    Durante uma nova medição,
    apagamos apenas a leitura
    instantânea.

    A frequência definitiva
    anterior não precisa ser apagada
    até existir uma nova.
  */

  glassLiveHz.textContent =
  "---";


  glassHz.classList.remove(
    "found"
  );


  savedInfo.textContent =
  "";


  glassStatus.textContent =
  "🎙️ Toque na borda da taça...";


  timer.textContent =
  "5.0";


  renderPeaks();


  clearInterval(
    scanTimer
  );


  scanTimer =
  setInterval(
    updateTimer,
    50
  );

}


/* =========================================================
   PARAR MEDIÇÃO
========================================================= */

function stopScan(){

  scanRunning = false;


  if(scanTimer){

    clearInterval(
      scanTimer
    );

  }


  scanTimer = null;

}


/* =========================================================
   CONTADOR DA TAÇA
========================================================= */

function updateTimer(){

  if(!scanRunning)
    return;


  const elapsed =
  performance.now() -
  scanStart;


  const remaining =
  Math.max(
    0,
    DETECTION_TIME -
    elapsed
  );


  timer.textContent =
  (remaining / 1000)
  .toFixed(1);


  if(
    remaining <= 0
  ){

    finishScan();

  }

}


/* =========================================================
   FINALIZAR MEDIÇÃO
========================================================= */

function finishScan(){

  if(!scanRunning)
    return;


  scanRunning = false;


  clearInterval(
    scanTimer
  );


  scanTimer = null;


  timer.textContent =
  "0.0";


  /*
    Encontrou uma frequência.
  */

  if(bestFreq > 0){

    const finalFreq =
    Math.round(bestFreq);


    /*
      Salva no navegador.
    */

    localStorage.setItem(
      "tacaFrequencia",
      finalFreq
    );


    /*
      Esta é a frequência definitiva
      da taça.

      Ela NÃO será alterada pela voz.
    */

    TARGET_FREQ =
    Math.min(
      2000,
      finalFreq
    );


    targetDisplay.textContent =
    TARGET_FREQ;


    targetInput.value =
    TARGET_FREQ;


    targetLiveHz.textContent =
    TARGET_FREQ +
    " Hz";


    /*
      Frequência definitiva.
    */

    glassHz.textContent =
    finalFreq;


    glassHz.classList.add(
      "found"
    );


    savedInfo.textContent =
    "✓ Frequência da taça salva: " +
    finalFreq +
    " Hz";


    glassStatus.textContent =
    "✅ Taça detectada! " +
    finalFreq +
    " Hz foi definido como alvo.";

  }else{

    glassStatus.textContent =
    "⚠️ Nenhuma frequência detectada.";

  }

}


/* =========================================================
   ANÁLISE PRINCIPAL
========================================================= */

function analyse(){

  if(
    !micActive ||
    !analyser ||
    !timeData
  ){

    return;

  }


  analyser.getFloatTimeDomainData(
    timeData
  );


  let sum = 0;


  for(
    let i=0;
    i<timeData.length;
    i++
  ){

    sum +=
    timeData[i] *
    timeData[i];

  }


  const rms =
  Math.sqrt(
    sum /
    timeData.length
  );


  const level =
  Math.min(
    100,
    rms * 1500
  );


  if(
    currentMode === "glass"
  ){

    glassLevel.style.width =
    level + "%";


    processGlass(
      rms
    );

  }else{

    voiceLevel.style.width =
    level + "%";


    processVoice(
      rms
    );

  }


  requestAnimationFrame(
    analyse
  );

}


/* =========================================================
   FREQUÊNCIA DA TAÇA
========================================================= */

function processGlass(rms){

  if(!scanRunning)
    return;


  if(rms < SILENCE)
    return;


  analyser.getByteFrequencyData(
    freqData
  );


  const binWidth =
  audioContext.sampleRate /
  analyser.fftSize;


  const minBin =
  Math.floor(
    100 /
    binWidth
  );


  const maxBin =
  Math.min(
    freqData.length - 2,
    Math.floor(
      4000 /
      binWidth
    )
  );


  let max = 0;

  let maxIndex = -1;


  /*
    Procura a frequência
    de maior magnitude.
  */

  for(
    let i=minBin;
    i<maxBin;
    i++
  ){

    if(
      freqData[i] > max
    ){

      max =
      freqData[i];

      maxIndex =
      i;

    }

  }


  if(
    maxIndex < 1
  ){

    return;

  }


  /*
    Interpolação parabólica
    para melhorar a precisão.
  */

  const y1 =
  freqData[maxIndex - 1];


  const y2 =
  freqData[maxIndex];


  const y3 =
  freqData[maxIndex + 1];


  const a =
  (
    y1 +
    y3 -
    2 * y2
  ) / 2;


  const b =
  (
    y3 -
    y1
  ) / 2;


  let offset = 0;


  if(a !== 0){

    offset =
    -b /
    (2 * a);

  }


  const frequency =
  (
    maxIndex +
    offset
  ) *
  binWidth;


  if(
    frequency < 100 ||
    frequency > 4000
  ){

    return;

  }


  /*
    SOMENTE a leitura atual
    aparece aqui.

    NÃO alteramos glassHz.
  */

  const shown =
  Math.round(
    frequency
  );


  glassLiveHz.textContent =
  shown +
  " Hz";


  /*
    Guarda a frequência
    mais forte encontrada.
  */

  if(
    max >
    bestMagnitude
  ){

    bestMagnitude =
    max;

    bestFreq =
    frequency;

  }


  /*
    Guarda os picos.
  */

  const existing =
  peaks.find(
    p =>
    Math.abs(
      p.freq -
      frequency
    ) < 8
  );


  if(existing){

    if(
      max >
      existing.mag
    ){

      existing.mag =
      max;

    }

  }else{

    peaks.push({

      freq:frequency,

      mag:max

    });


    if(
      peaks.length > 12
    ){

      peaks.shift();

    }

  }


  renderPeaks();

}


/* =========================================================
   PICOS
========================================================= */

function renderPeaks(){

  if(!peaks.length){

    peaksBox.innerHTML =
    "Nenhum pico detectado.";

    return;

  }


  const sorted =
  [...peaks]
  .sort(
    (a,b) =>
    b.mag -
    a.mag
  );


  peaksBox.innerHTML =
  sorted
  .map(
    p => `

      <div style="
        display:flex;
        justify-content:space-between;
        padding:10px;
        margin-bottom:6px;
        background:#101a28;
        border-radius:10px;
        color:#ffb86b">

        <span>
          ${Math.round(p.freq)} Hz
        </span>

        <span>
          ${Math.round(
            p.mag /
            255 *
            100
          )}%
        </span>

      </div>

    `
  )
  .join("");

}


/* =========================================================
   VOZ
========================================================= */

function processVoice(rms){

  if(voiceCracked)
    return;


  if(
    rms <
    SILENCE
  ){

    voiceHz.textContent =
    "---";


    voiceLiveHz.textContent =
    "---";


    differenceHz.textContent =
    "---";


    voiceStatus.textContent =
    "🎙️ Aguardando sua voz...";


    voiceLevel.style.width =
    "0%";


    energy.style.width =
    "0%";


    energyText.textContent =
    "0%";


    /*
      Silêncio interrompe
      a ressonância.
    */

    resonanceStart = 0;

    resonanceTime = 0;


    resonanceTimer.textContent =
    "0,0 s";


    breakProgress.style.width =
    "0%";


    return;

  }


  const pitch =
  autoCorrelate(
    timeData,
    audioContext.sampleRate
  );


  if(
    pitch > 0
  ){

    /*
      Suaviza a leitura.
    */

    if(
      voiceFreq === 0
    ){

      voiceFreq =
      pitch;

    }else{

      voiceFreq =
      voiceFreq * .75 +
      pitch * .25;

    }


    updateVoice(
      voiceFreq
    );

  }

}


/* =========================================================
   AUTOCORRELAÇÃO
========================================================= */

function autoCorrelate(
  buffer,
  sampleRate
){

  const size =
  buffer.length;


  let rms = 0;


  for(
    let i=0;
    i<size;
    i++
  ){

    rms +=
    buffer[i] *
    buffer[i];

  }


  rms =
  Math.sqrt(
    rms /
    size
  );


  if(
    rms <
    SILENCE
  ){

    return -1;

  }


  /*
    Faixa aproximada
    da voz humana.

    60 Hz → 1200 Hz
  */

  const minOffset =
  Math.floor(
    sampleRate /
    1200
  );


  const maxOffset =
  Math.floor(
    sampleRate /
    60
  );


  let bestOffset = -1;

  let bestCorrelation = 0;


  for(
    let offset=minOffset;
    offset <
    Math.min(
      maxOffset,
      size / 2
    );
    offset++
  ){

    let correlation = 0;


    for(
      let i=0;
      i<size/2;
      i++
    ){

      correlation +=
      buffer[i] *
      buffer[
        i + offset
      ];

    }


    correlation /=
    size / 2;


    if(
      correlation >
      bestCorrelation
    ){

      bestCorrelation =
      correlation;

      bestOffset =
      offset;

    }

  }


  if(
    bestOffset <= 0 ||
    bestCorrelation < .001
  ){

    return -1;

  }


  return (
    sampleRate /
    bestOffset
  );

}


/* =========================================================
   ATUALIZAÇÃO DA VOZ
========================================================= */

function updateVoice(freq){

  if(voiceCracked)
    return;


  const rounded =
  Math.round(freq);


  /*
    FREQUÊNCIA DA VOZ

    Esta muda constantemente.
  */

  voiceHz.textContent =
  rounded;


  voiceLiveHz.textContent =
  rounded +
  " Hz";


  /*
    FREQUÊNCIA DA TAÇA

    Esta permanece fixa.
  */

  targetLiveHz.textContent =
  Math.round(
    TARGET_FREQ
  ) +
  " Hz";


  /*
    Diferença entre voz e taça.
  */

  const difference =
  Math.abs(
    freq -
    TARGET_FREQ
  );


  differenceHz.textContent =
  Math.round(
    difference
  ) +
  " Hz";


  /*
    Calcula a energia
    de ressonância.

    100 Hz de diferença = 0%
    0 Hz de diferença = 100%
  */

  let resonance =
    1 -
    difference /
    100;


  resonance =
  Math.max(
    0,
    Math.min(
      1,
      resonance
    )
  );


  const percent =
  Math.round(
    resonance * 100
  );


  energy.style.width =
  percent +
  "%";


  energyText.textContent =
  percent +
  "%";


  /* =====================================================
     DENTRO DA TOLERÂNCIA
  ===================================================== */

  if(
    difference <=
    FREQUENCY_TOLERANCE
  ){

    /*
      Começa o cronômetro
      quando entra na faixa.
    */

    if(
      resonanceStart === 0
    ){

      resonanceStart =
      performance.now();

    }


    /*
      Calcula o tempo contínuo.
    */

    resonanceTime =
    performance.now() -
    resonanceStart;


    const seconds =
    resonanceTime /
    1000;


    resonanceTimer.textContent =
    seconds.toFixed(1) +
    " s";


    /*
      Barra de progresso.
    */

    const progress =
    Math.min(
      100,
      resonanceTime /
      BREAK_TIME *
      100
    );


    breakProgress.style.width =
    progress +
    "%";


    /*
      Mensagens.
    */

    if(
      difference <= 3
    ){

      voiceStatus.textContent =
      "🔥 Frequência excelente! " +
      "Mantenha o som...";

    }else{

      voiceStatus.textContent =
      "🟢 Ressonância detectada! " +
      "Mantenha a frequência...";

    }


    /*
      Tempo atingido.
    */

    if(
      resonanceTime >=
      BREAK_TIME
    ){

      breakGlass();

    }

  }else{

    /*
      Saiu da faixa.

      A ressonância precisa
      começar novamente.
    */

    resonanceStart = 0;

    resonanceTime = 0;


    resonanceTimer.textContent =
    "0,0 s";


    breakProgress.style.width =
    "0%";


    /*
      Orientação para o usuário.
    */

    if(
      freq <
      TARGET_FREQ
    ){

      voiceStatus.textContent =
      "⬆️ Aumente a frequência — alvo: " +
      Math.round(
        TARGET_FREQ
      ) +
      " Hz";

    }else{

      voiceStatus.textContent =
      "⬇️ Diminua a frequência — alvo: " +
      Math.round(
        TARGET_FREQ
      ) +
      " Hz";

    }

  }

}


/* =========================================================
   QUEBRA DA TAÇA
========================================================= */

function breakGlass(){

  if(voiceCracked)
    return;


  voiceCracked = true;


  /*
    Fixa o cronômetro
    exatamente em 2,5 segundos.
  */

  resonanceTime =
  BREAK_TIME;


  resonanceTimer.textContent =
  (
    BREAK_TIME /
    1000
  ).toFixed(1) +
  " s";


  breakProgress.style.width =
  "100%";


  /*
    Mensagem.
  */

  crackMessage.textContent =
  "💥🍷 TAÇA QUEBRADA! 🍷💥";


  crackMessage.style.color =
  "#ff4d6d";


  voiceStatus.textContent =
  "💥 Ressonância atingida! " +
  "A frequência permaneceu próxima " +
  "da taça por 2,5 segundos.";


  /*
    Energia máxima.
  */

  energy.style.width =
  "100%";


  energyText.textContent =
  "100%";


  /*
    IMPORTANTE:

    TARGET_FREQ NÃO é alterado.

    Portanto, se a taça era:

    850 Hz

    continuará:

    850 Hz

    mesmo depois da quebra.
  */

}


/* =========================================================
   BOTÕES
========================================================= */

micBtn.addEventListener(
  "click",
  startMicrophone
);


voiceMic.addEventListener(
  "click",
  startMicrophone
);


/* =========================================================
   NOVA MEDIÇÃO
========================================================= */

newScan.addEventListener(
  "click",
  () => {

    if(!micActive){

      glassStatus.textContent =
      "🎤 Ative o microfone primeiro.";

      return;

    }


    startScan();

  }
);


/* =========================================================
   RESET DA VOZ
========================================================= */

voiceReset.addEventListener(
  "click",
  () => {

    /*
      Reseta apenas a parte
      da voz e da simulação.

      A frequência da taça
      permanece intacta.
    */

    voiceFreq = 0;

    voiceCracked = false;

    resonanceStart = 0;

    resonanceTime = 0;


    voiceHz.textContent =
    "---";


    voiceLiveHz.textContent =
    "---";


    differenceHz.textContent =
    "---";


    voiceStatus.textContent =
    "🎙️ Faça um som constante...";


    energy.style.width =
    "0%";


    energyText.textContent =
    "0%";


    resonanceTimer.textContent =
    "0,0 s";


    breakProgress.style.width =
    "0%";


    crackMessage.textContent =
    "🍷 TAÇA INTACTA";


    crackMessage.style.color =
    "#aac8ff";


    /*
      Mantém o valor real da taça.
    */

    targetDisplay.textContent =
    Math.round(
      TARGET_FREQ
    );


    targetLiveHz.textContent =
    Math.round(
      TARGET_FREQ
    ) +
    " Hz";

  }
);


/* =========================================================
   APLICAR ALVO MANUALMENTE
========================================================= */

applyTarget.addEventListener(
  "click",
  () => {

    const value =
    Number(
      targetInput.value
    );


    if(
      Number.isFinite(value) &&
      value >= 50 &&
      value <= 2000
    ){

      /*
        Permite alterar manualmente
        a frequência usada como alvo.
      */

      TARGET_FREQ =
      value;


      targetDisplay.textContent =
      value;


      targetLiveHz.textContent =
      value +
      " Hz";


      /*
        Se já existe leitura de voz,
        atualiza imediatamente.
      */

      if(
        voiceFreq > 0 &&
        !voiceCracked
      ){

        /*
          Ao trocar o alvo,
          reiniciamos o tempo de ressonância.
        */

        resonanceStart = 0;

        resonanceTime = 0;

        resonanceTimer.textContent =
        "0,0 s";

        breakProgress.style.width =
        "0%";


        updateVoice(
          voiceFreq
        );

      }

    }else{

      targetInput.value =
      TARGET_FREQ;

    }

  }
);


/* =========================================================
   CARREGAR FREQUÊNCIA SALVA
========================================================= */

const savedFreq =
Number(
  localStorage.getItem(
    "tacaFrequencia"
  )
);


if(
  Number.isFinite(savedFreq) &&
  savedFreq >= 100 &&
  savedFreq <= 4000
){

  TARGET_FREQ =
  Math.min(
    2000,
    savedFreq
  );


  targetDisplay.textContent =
  TARGET_FREQ;


  targetInput.value =
  TARGET_FREQ;


  targetLiveHz.textContent =
  TARGET_FREQ +
  " Hz";


  glassHz.textContent =
  TARGET_FREQ;


  glassHz.classList.add(
    "found"
  );


  savedInfo.textContent =
  "✓ Frequência salva anteriormente: " +
  savedFreq +
  " Hz";

}


/* =========================================================
   CANVAS DA TAÇA
========================================================= */

function drawGlass(){

  const w =
  glassCanvas.width;


  const h =
  glassCanvas.height;


  /*
    Fundo.
  */

  glassCtx.fillStyle =
  "#080d15";


  glassCtx.fillRect(
    0,
    0,
    w,
    h
  );


  /*
    Grade vertical.
  */

  glassCtx.strokeStyle =
  "#16243a";


  glassCtx.lineWidth =
  1;


  for(
    let x=0;
    x<w;
    x+=60
  ){

    glassCtx.beginPath();


    glassCtx.moveTo(
      x,
      0
    );


    glassCtx.lineTo(
      x,
      h
    );


    glassCtx.stroke();

  }


  /*
    Grade horizontal.
  */

  for(
    let y=0;
    y<h;
    y+=60
  ){

    glassCtx.beginPath();


    glassCtx.moveTo(
      0,
      y
    );


    glassCtx.lineTo(
      w,
      y
    );


    glassCtx.stroke();

  }


  /*
    Espectro.
  */

  if(freqData){

    const bars =
    160;


    const step =
    Math.max(
      1,
      Math.floor(
        freqData.length /
        bars
      )
    );


    const barWidth =
    w /
    bars;


    for(
      let i=0;
      i<bars;
      i++
    ){

      let value = 0;


      for(
        let j=0;
        j<step;
        j++
      ){

        value =
        Math.max(
          value,
          freqData[
            i * step + j
          ] || 0
        );

      }


      const barHeight =
      value /
      255 *
      h *
      .75;


      glassCtx.fillStyle =
      "#27658a";


      glassCtx.fillRect(
        i * barWidth,
        h - barHeight,
        barWidth - 1,
        barHeight
      );

    }

  }


  /*
    Linha da melhor frequência
    encontrada.
  */

  if(
    bestFreq > 0 &&
    audioContext
  ){

    const x =
    bestFreq /
    (
      audioContext.sampleRate /
      2
    ) *
    w;


    /*
      Evita desenhar fora do canvas.
    */

    if(
      x >= 0 &&
      x <= w
    ){

      glassCtx.strokeStyle =
      "#ffb86b";


      glassCtx.lineWidth =
      3;


      glassCtx.beginPath();


      glassCtx.moveTo(
        x,
        0
      );


      glassCtx.lineTo(
        x,
        h
      );


      glassCtx.stroke();

    }

  }


  /*
    Texto.
  */

  glassCtx.fillStyle =
  "#64d8ff";


  glassCtx.font =
  "bold 17px monospace";


  glassCtx.fillText(
    "FREQUÊNCIA DA TAÇA",
    20,
    30
  );


  /*
    Mostra a frequência definitiva.
  */

  if(
    TARGET_FREQ > 0
  ){

    glassCtx.fillStyle =
    "#ffb86b";


    glassCtx.fillText(
      Math.round(
        TARGET_FREQ
      ) +
      " Hz",
      20,
      55
    );

  }


  requestAnimationFrame(
    drawGlass
  );

}


/* =========================================================
   CANVAS DA VOZ
========================================================= */

function drawVoice(){

  const w =
  voiceCanvas.width;


  const h =
  voiceCanvas.height;


  /*
    Fundo.
  */

  voiceCtx.fillStyle =
  "#080d15";


  voiceCtx.fillRect(
    0,
    0,
    w,
    h
  );


  /*
    Grade.
  */

  voiceCtx.strokeStyle =
  "#16243a";


  voiceCtx.lineWidth =
  1;


  for(
    let x=0;
    x<w;
    x+=60
  ){

    voiceCtx.beginPath();


    voiceCtx.moveTo(
      x,
      0
    );


    voiceCtx.lineTo(
      x,
      h
    );


    voiceCtx.stroke();

  }


  for(
    let y=0;
    y<h;
    y+=60
  ){

    voiceCtx.beginPath();


    voiceCtx.moveTo(
      0,
      y
    );


    voiceCtx.lineTo(
      w,
      y
    );


    voiceCtx.stroke();

  }


  /*
    Linha central.
  */

  voiceCtx.strokeStyle =
  "#29405a";


  voiceCtx.beginPath();


  voiceCtx.moveTo(
    0,
    h / 2
  );


  voiceCtx.lineTo(
    w,
    h / 2
  );


  voiceCtx.stroke();


  /*
    Onda da voz.
  */

  if(
    voiceFreq > 0
  ){

    voiceCtx.strokeStyle =
    voiceCracked
    ? "#ff4d6d"
    : "#64d8ff";


    voiceCtx.lineWidth =
    4;


    voiceCtx.beginPath();


    /*
      Quantidade visual de ciclos.

      Não representa diretamente
      a frequência real do áudio.
    */

    const cycles =
    7;


    for(
      let x=0;
      x<w;
      x++
    ){

      const phase =
      x /
      w *
      cycles *
      Math.PI *
      2;


      const y =
      h / 2 +
      Math.sin(
        phase
      ) *
      100;


      if(
        x === 0
      ){

        voiceCtx.moveTo(
          x,
          y
        );

      }else{

        voiceCtx.lineTo(
          x,
          y
        );

      }

    }


    voiceCtx.stroke();

  }


  /*
    Texto da voz.
  */

  voiceCtx.fillStyle =
  "#64d8ff";


  voiceCtx.font =
  "bold 18px monospace";


  voiceCtx.fillText(
    "SUA VOZ: " +
    (
      voiceFreq
      ? Math.round(
          voiceFreq
        )
      : "---"
    ) +
    " Hz",
    20,
    30
  );


  /*
    Texto da taça.

    Este valor é separado
    da frequência da voz.
  */

  voiceCtx.fillStyle =
  "#ffb86b";


  voiceCtx.fillText(
    "TAÇA: " +
    Math.round(
      TARGET_FREQ
    ) +
    " Hz",
    20,
    58
  );


  /*
    Mensagem de quebra.
  */

  if(
    voiceCracked
  ){

    voiceCtx.fillStyle =
    "#ff4d6d";


    voiceCtx.font =
    "bold 30px Arial";


    voiceCtx.fillText(
      "💥 TAÇA QUEBRADA 💥",
      w / 2 - 170,
      h / 2
    );

  }


  requestAnimationFrame(
    drawVoice
  );

}


/* =========================================================
   INICIAR GRÁFICOS
========================================================= */

drawGlass();

drawVoice();


/* =========================================================
   LIMPEZA AO SAIR
========================================================= */

window.addEventListener(
  "beforeunload",
  () => {

    if(stream){

      stream
      .getTracks()
      .forEach(
        track => {

          track.stop();

        }
      );

    }

  }
);

</script>

</body>

</html>
