const reasons = [
  "Porque você me completa.",
  "Porque seu sorriso ilumina meu dia.",
  "Porque nossa família de quatro patas é o nosso lar.",
  "Porque com você, tudo faz sentido.",
  "Porque eu te amo infinitamente."
];

let index = 0;
function writeReasons() {
  if (index < reasons.length) {
    const li = document.createElement("li");
    li.textContent = reasons[index];
    document.getElementById("reasons").appendChild(li);
    index++;
    setTimeout(writeReasons, 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-site');
  const music = document.getElementById('bg-music');
  const toggleMusic = document.getElementById('toggle-music');
  
  enterBtn.addEventListener('click', () => {
    // Esconde tela inicial
    welcomeScreen.style.display = 'none';
    
    // Toca a música
    music.play().then(() => {
      toggleMusic.textContent = 'Pausar Música';
    }).catch(() => {
      toggleMusic.textContent = 'Tocar Música';
    });
    
    writeReasons(); // Inicia os textos animados
    
    // Ativa botão de controle da música
    toggleMusic.addEventListener('click', () => {
      if (music.paused) {
        music.play();
        toggleMusic.textContent = 'Pausar Música';
      } else {
        music.pause();
        toggleMusic.textContent = 'Tocar Música';
      }
    });
    
    // Corações flutuantes
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '♥';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (3 + Math.random() * 3) + 's';
      document.querySelector('.hearts').appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const textoCompleto = `Oi Mamãe!

Hoje é o seu dia, mas pra gente — Eu"Papai", Estrela, Toddy, Simba e Léo — todo dia é dia de agradecer por ter você! A gente pode não falar com palavras (bom, o papai ajuda nisso), mas nosso rabinho balançando, nosso olhar cheio de amor e aquele jeitinho de ficar grudado em você dizem tudo: você é a melhor mãe do mundo!

Você é quem cuida, quem dá carinho, quem abraça quando a gente tá triste ou com medo… é quem enche o potinho de ração (e às vezes dá um petisco extra, né?), é quem sabe exatamente o que a gente precisa, mesmo quando a gente só faz “au au”.

<strong>Mamãe… sou eu, o Simba. Sei que hoje eu não tô aí no sofá, nem deitadinho aos seus pés, mas queria que você soubesse que continuo com você — bem juntinho, no seu coração. Aqui do Céu, eu vejo tudo: o seu amor, o seu cuidado com todos nós, sua força linda. Obrigado por ter sido minha mamãe, por cada carinho, cada palavra, cada noite de aconchego. Eu fui muito feliz ao seu lado… e ainda sou, porque seu amor me alcança até aqui. Te amo pra sempre, tá? E tô aqui, do jeitinho que você sempre me imaginou: feliz, em paz e cheio de gratidão.</strong>

Mamãe, você é nossa heroína. Sempre com um sorriso no rosto, mesmo nos dias difíceis. Sempre com um colo quentinho, mesmo cansada. A gente sente, mesmo sem entender tudo, que seu amor é gigante e acolhe cada um de nós com todo o coração.

Essa homenagem que o papai fez… é uma lembrança da nossa historia, da nossa família linda. Somos nós, juntinhos, como sempre: unidos pelo amor — e também pelos pelos, pelas patinhas e pelos momentos de alegria.

“Sempre ao seu lado, mãe” não é só uma frase bonita. É promessa, é verdade, é o que a gente vive todos os dias. Onde você estiver, a gente vai estar também. Porque você é o nosso lar.

Te amamos mais do que ração (e olha que isso é muito, hein!).

Com lambidas, ronrons e muito amor,
Estrela, Toddy, Simba, Léo (e Papai também)...`;
  
  const elemento = document.getElementById("cartaTexto");
  let index = 0;
  
  function escreverTexto() {
    if (index < textoCompleto.length) {
      elemento.textContent += textoCompleto.charAt(index);
      index++;
      setTimeout(escreverTexto, 30); // Velocidade da "digitação"
    }
  }
  
  escreverTexto();
});
