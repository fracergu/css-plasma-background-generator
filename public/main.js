// Global settings
document.getElementById('blur-slider').addEventListener('input', (e) => {
  const blur = e.target.value;
  document.getElementById('wrapper').style.filter = `blur(${blur}px)`;
  document.getElementById('blur-label').innerText = `Blur: ${blur}px`;
});

document.getElementById('opacity-slider').addEventListener('input', (e) => {
  const opacity = e.target.value;
  for (let gradient of document.getElementsByClassName('gradient')) {
    gradient.style.opacity = opacity;
  }
  for (let gradient of [1, 2, 3]) {
    document.getElementById(
      `opacity-label-${gradient}`,
    ).innerText = `Opacity: ${opacity}`;
    document.getElementById(`opacity-slider-${gradient}`).value = opacity;
  }
  document.getElementById('opacity-label').innerText = `Opacity: ${opacity}`;
});

document.getElementById('duration-slider').addEventListener('input', (e) => {
  const duration = e.target.value;
  document.getElementById(
    'duration-label',
  ).innerText = `Duration: ${duration}s`;
  for (let gradient of document.getElementsByClassName('gradient')) {
    gradient.style.animationDuration = `${duration}s`;
  }
  for (let gradient of [1, 2, 3]) {
    document.getElementById(
      `duration-label-${gradient}`,
    ).innerText = `Duration: ${duration}s`;
    document.getElementById(`duration-slider-${gradient}`).value = duration;
  }
});

// Invidual settings
function handleEventListenersForGradient(n) {
  const gradient = document.getElementById(`gradient-${n}`);
  document
    .getElementById(`opacity-slider-${n}`)
    .addEventListener('input', (e) => {
      const opacity = e.target.value;
      gradient.style.opacity = opacity;
      document.getElementById(
        `opacity-label-${n}`,
      ).innerText = `Opacity: ${opacity}`;
    });
  document
    .getElementById(`duration-slider-${n}`)
    .addEventListener('input', (e) => {
      const duration = e.target.value;
      gradient.style.animationDuration = `${duration}s`;
      document.getElementById(
        `duration-label-${n}`,
      ).innerText = `Duration: ${duration}s`;
    });
  document
    .getElementById(`color-picker-${n}`)
    .addEventListener('input', (e) => {
      const color = e.target.value;
      gradient.style.background = color;
      document.getElementById(`color-label-${n}`).innerText = `Color: ${color}`;
    });
}

for (let gradient of [1, 2, 3]) {
  handleEventListenersForGradient(gradient);
}

// Radomize colors button
document.getElementById('randomize-colors').addEventListener('click', () => {
  for (let gradient of [1, 2, 3]) {
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (color.length < 7) {
      color += '0';
    }
    document.getElementById(`color-picker-${gradient}`).value = color;
    document.getElementById(`gradient-${gradient}`).style.background = color;
    document.getElementById(
      `color-label-${gradient}`,
    ).innerText = `Color: ${color}`;
  }
});

// Github button
document.getElementById('github-button').addEventListener('click', () => {
  window.open('https://github.com/fracergu/css-plasma-background-generator');
});

// Copy code button
document.getElementById('copy-code').addEventListener('click', () => {
  const code = generateCSS();
  navigator.clipboard.writeText(code);
  document.getElementById('copy-code').innerText = 'Copied!';
  setTimeout(() => {
    document.getElementById('copy-code').innerText = 'Copy code';
  }, 1000);
});

// Hide menu button
document.getElementById('hide-button').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('hidden');
});

// CSS code generator

const generateGradientCSS = (gradient) => {
  const { background, width, height, animationDuration, opacity } =
    getComputedStyle(document.getElementById(`gradient-${gradient}`));
  return `
  .gradient-${gradient} {
    background: ${background};
    width: ${width};
    height: ${height};
    animation-duration: ${animationDuration};
    opacity: ${opacity};
    left: ${gradient === 1 ? '60%' : gradient === 2 ? '40%' : '50%'};
    top: ${gradient === 1 ? '40%' : gradient === 2 ? '60%' : '50%'};
    z-index: ${gradient === 1 ? -2 : gradient === 2 ? -1 : -3};
    animation-name: animation-gradient-${gradient};
  }`;
};

const generateCSS = () => {
  return `
  <!-- Code generated by CSS Plasma Background Generator -->
  <!-- https://github.com/fracergu/css-plasma-background-generator -->
  <html>
  <body>
    <div class="wrapper">
      <div class="gradient gradient-1"></div>
      <div class="gradient gradient-2"></div>
      <div class="gradient gradient-3"></div>
    </div>
    <style>
      body {
        margin: 0;
        color: #fff;
        background-color: #000;
        padding: 0; 
      }

      .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        filter: blur(${document.getElementById('blur-slider').value}px);
      }

      .gradient {
        position: absolute;
        border-radius: 100%;
        opacity: ${document.getElementById('opacity-slider').value};
        mix-blend-mode: screen;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
      }

      ${[1, 2, 3].map((gradient) => generateGradientCSS(gradient)).join('')}

      @keyframes animation-gradient-1 {
        0% {
          transform: translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%);
        }
        25% {
          transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
            rotate(80deg) translateX(30%);
        }
        50% {
          transform: translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%);
        }
        75% {
          transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
            rotate(240deg) translateX(15%);
        }
        100% {
          transform: translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%);
        }
      }
      
      @keyframes animation-gradient-2 {
        0% {
          transform: translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%);
        }
        25% {
          transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
            rotate(110deg) translateX(-5%);
        }
        50% {
          transform: translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%);
        }
        75% {
          transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
            rotate(300deg) translateX(-10%);
        }
        100% {
          transform: translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%);
        }
      }
      
      @keyframes animation-gradient-3 {
        0% {
          transform: translateY(-50%) translateX(-50%) translateX(-15%)
            translateY(10%);
        }
        20% {
          transform: translateY(-50%) translateX(-50%) translateX(20%)
            translateY(-30%);
        }
        40% {
          transform: translateY(-50%) translateX(-50%) translateX(-25%)
            translateY(-15%);
        }
        60% {
          transform: translateY(-50%) translateX(-50%) translateX(30%) translateY(20%);
        }
        80% {
          transform: translateY(-50%) translateX(-50%) translateX(5%) translateY(35%);
        }
        100% {
          transform: translateY(-50%) translateX(-50%) translateX(-15%)
            translateY(10%);
        }
      }

    </style>
  </body>
</html>`;
};
