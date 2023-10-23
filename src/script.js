function commonMove(direction) {
  const box = document.querySelector('.box');

  switch (direction) {
    case 'left':
      box.style.transform = `translateX(0)`;
      break;
    case 'right':
      const windowWidth = window.innerWidth;
      const boxWidth = box.offsetWidth;
      console.log(boxWidth, "boxWidth")
      const maxRight = windowWidth - boxWidth;
      box.style.transform = `translateX(${maxRight}px)`;
      break;
  }
}

function adjustPosition() {
  const box = document.querySelector('.box');
  const windowWidth = window.innerWidth;
  const boxWidth = box.offsetWidth;

  const maxRight = windowWidth - boxWidth;

  const currentTransform = getComputedStyle(box).transform;
  const currentTranslateX = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[4]);

  if (currentTranslateX > maxRight) {
    box.style.transform = `translateX(${maxRight}px)`;
  }
}

window.addEventListener('resize', adjustPosition);