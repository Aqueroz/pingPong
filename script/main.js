//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//movimento da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 0;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//chance de errar do oponente
let chanceDeErrar = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  movimentoMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width || xBolinha - raio < 0)
  {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio< 0)
  {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura)
}


function movimentoRaqueteOponente()
{
  if (keyIsDown(UP_ARROW))
  {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW))
    {
      yRaqueteOponente += 10;
    }
}

//function movimentoRaqueteOponente()
// {
//   velocidadeYOponente = yBolinha - yRaquete - yRaqueteOponente - raqueteComprimento / 2 - 30;
//   yRaqueteOponente += velocidadeYBolinha
//   // calculaChanceDeErrar()
// }

function movimentoMinhaRaquete()
{
  if(keyIsDown(87))
  {
    yRaquete -= 10;
  }
  if(keyIsDown(83))
  {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete()
{
  if (xBolinha - raio < xRaquete + raqueteComprimento &&  yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
  {
   velocidadeXBolinha *= -1; 
  }
}

function verificaColisaoRaquete(x, y)
{
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu)
  {
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar()
{
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto()
{
  if (xBolinha > 590)
{
    meusPontos += 1;
  }
  
  if (xBolinha < 10)
  {
    pontosOponente += 1;
  }
}

function bolinhaNaoFicaPresa()
{
  if(xBolinha - raio < 5)
  {xBolinha - 23}
}

// function calculaChanceDeErrar()
// {
//   if(pontosOponente >= meusPontos)
//   {
//     chanceDeErrar += 1;
//     if (chanceDeErrar >= 39)
//     {
//       chanceDeErrar = 40
//     }
//   }
//   else 
//   {
//     chanceDeErrar -= 1;
//     if (chanceDeErrar <= 35)
//     {
//       chanceDeErrar = 35
//     }
//   }

// }

//function preload()
// trilha = loadSound ("local.mp3")
// ponto = loadSound("local.mp3")
// raquetada = loadSound("local.mp3")
// aplicada na função setup a 'trilha'
// trilha.loop() - para tocar sem parar
//ponto e raquetada são aplicadasnas funções de colisão e de pontos respectivamente
// raquetada.play() e ponto.play()

// 87 = tecla W
// 83 = tecla S