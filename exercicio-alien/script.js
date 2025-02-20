// Definimos a altura e largura da tela de jogo que usaremos
const windowWidth = 700;
const windowHeight = 850;

// Definimos a configuração que o Phaser usará pra rodar o jogo
const config = {
  type: Phaser.AUTO,
  width: windowWidth,
  height: windowHeight,

  scene: { preload, create, update },

  // Define a configuração
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
};

// Criamos o jogo com o Phaser e as configurações que foram definidas antes
const game = new Phaser.Game(config);

// Cria todas as variáveis globais do jogo
let alien;
let keyboard;
let turbo;
let platform;
let coin;
let score = 0;
let scoreboard;

const spawnCoinPosition = [100, 200, 300, 400, 500, 600];
let spawnIndex = 0;

function preload() {
  // Carrega todos os assets
  this.load.image("background", "assets/bg.png");
  this.load.image("player", "assets/alienigena.png");
  this.load.image("turbo", "assets/turbo.png");
  this.load.image("platform", "assets/tijolos.png");
  this.load.image("coin", "assets/moeda.png");
}

function create() {
  // Adicionamos o fundo ao centro da tela
  this.add.image(windowWidth / 2, windowHeight / 2, "background");

  // Adiciona o sprite do foguinho e define ele como invísivel
  turbo = this.add.sprite(0, 0, "turbo");
  turbo.setVisible(false);

  // Cria o aligenigena
  alien = this.physics.add.sprite(windowWidth / 2, 0, "player");
  alien.body.setCollideWorldBounds(true);
  keyboard = this.input.keyboard.createCursorKeys();

  // Adiciona a plataforma no sistema de física mas de forma estática
  let platforms = this.physics.add.staticGroup();

  platforms.create(windowWidth / 2 + 200, 250, "platform");
  platforms.create(windowWidth / 3, windowHeight / 2, "platform");
  platforms.create(windowWidth - 100, windowHeight - 350, "platform");

  // Adiciona a colisão do jogador com a plataforma
  this.physics.add.collider(alien, platforms);

  // Cria a moeda e define suas configurações de física
  coin = this.physics.add.sprite(windowWidth / 2, 0, "coin");
  coin.setBounce(0.7);
  coin.body.setCollideWorldBounds(true);
  this.physics.add.collider(coin, platforms);

  // Cria o texto de placar
  scoreboard = this.add.text(50, 50, `Coins: ${score}`, {
    fontSize: "45px",
    fill: "#495613",
  });

  // Adiciona a colisão da moeda com o alien
  this.physics.add.overlap(alien, coin, () => {
    coin.setVisible(false);

    // Define o spawnIndex como um número aleatório entre 0 e o tamanho do array de posições
    spawnIndex = Phaser.Math.Between(0, spawnCoinPosition.length - 1);

    // Spawna a moeda em uma posição aleatória dentro do array de posições
    coin.setPosition(spawnCoinPosition[spawnIndex], 100);

    // Aumenta a pontuação e atualiza o placar
    score += 1;
    scoreboard.setText(`Coins: ${score}`);
    coin.setVisible(true);
  });
}

function update() {
  // Movimentação horizontal do jogador
  if (keyboard.left.isDown) {
    alien.setVelocityX(-250);
  } else if (keyboard.right.isDown) {
    alien.setVelocityX(250);
  } else {
    alien.setVelocityX(0);
  }

  // Movimentação vertical do jogador
  if (keyboard.up.isDown) {
    alien.setVelocityY(-150);
    activateTurbo();
  } else {
    deactivateTurbo();
  }

  // Define a posição do foguinho para ser embaixo do jogador
  turbo.setPosition(alien.x, alien.y + alien.height / 2);
}

function activateTurbo() {
  // Deixa o foguinho vísivel
  turbo.setVisible(true);
}

function deactivateTurbo() {
  // Esconde o foguinho
  turbo.setVisible(false);
}
