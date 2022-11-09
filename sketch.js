//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raioBolinha = dBolinha / 2;
let colidiu = false;

//Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da Raquete Esquerda
let xRaqueteEsquerda = 0;
let yRaqueteEsquerda = 165;
let larguraRaqueteEsquerda = 13;
let alturaRaqueteEsquerda = 70;

//Variáveis da Raquete Direita
let xRaqueteDireita = 587;
let yRaqueteDireita = 165;
let larguraRaqueteDireita = 13;
let alturaRaqueteDireita = 70;
let velocidadeYRaqueteDireita;

//Variáveis Placar
let pontosEsquerdo = 0
let pontosDireito =0

//Variáveis Sons do Jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaqueteEsquerda, yRaqueteEsquerda);
  mostrarRaquete(xRaqueteDireita, yRaqueteDireita) ;
  movimentaRaqueteEsquerda();
  movimentaRaqueteDireita();
  //verificaColisaoRaqueteEsquerda();
  verificaColisaoRaquete(xRaqueteEsquerda, yRaqueteEsquerda);
  verificaColisaoRaquete(xRaqueteDireita, yRaqueteDireita);
  incluiPlacar();
  marcarPontoDireito();
  marcarPontoEsquerdo();
  
}

//Funções da Bolinha
function mostraBolinha (){
  circle(xBolinha, yBolinha, dBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda (){
    if (xBolinha + raioBolinha > width ||
      xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;
}
  if (yBolinha + raioBolinha > height ||
     yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1; 
  }
} 

function verificaColisaoRaqueteEsquerda (){
  if ( xBolinha - raioBolinha < xRaqueteEsquerda + larguraRaqueteEsquerda && yBolinha - raioBolinha < yRaqueteEsquerda + alturaRaqueteEsquerda && yBolinha - raioBolinha > yRaqueteEsquerda + alturaRaqueteEsquerda ){
    velocidadeXBolinha *= -1;
    raquetada.play()
  }
}

//Colisão Raquetes
function verificaColisaoRaquete (x, y){
  colidiu =
    collideRectCircle(x, y, larguraRaqueteEsquerda, alturaRaqueteEsquerda, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
velocidadeXBolinha *= -1;
    raquetada.play()
  }
}


//Funções Mostra Raquete
function mostrarRaquete(x, y){
  rect(x, y, larguraRaqueteEsquerda,alturaRaqueteEsquerda)
}

//Funções Raquete Esquerda
function movimentaRaqueteEsquerda(){
  if (keyIsDown(UP_ARROW))
    yRaqueteEsquerda -= 10;
  
  if (keyIsDown(DOWN_ARROW))
    yRaqueteEsquerda += 10;
  }

//Funções Raquete Direita


  function movimentaRaqueteDireita(){
  if (keyIsDown(87))
    yRaqueteDireita -= 10;
  
  if (keyIsDown(83))
    yRaqueteDireita += 10;
  }

//Funções Placar
function incluiPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color (255,140, 0))
  rect(150, 10, 40, 20);
  fill(255)
  text(pontosEsquerdo, 170, 26)
  fill(color(255,140,0))
   rect(450, 10, 40, 20)
  fill(255)
  text(pontosDireito, 470, 26)
}

function marcarPontoEsquerdo(){
  if (xBolinha> 590){
    pontosEsquerdo +=1;
    ponto.play()
      
    }
  }

function marcarPontoDireito(){
  if (xBolinha<10){
    pontosDireito +=1;
    ponto.play()
  }
}

//Funções do Som
function preload(){
  trilha =loadSound("trilha.mp3")
  ponto =loadSound("ponto.mp3")
  raquetada =loadSound("raquetada.mp3")
}
