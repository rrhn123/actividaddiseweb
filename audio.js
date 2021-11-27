const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay loop>
        <source src="archivo-audio.ogg" type="audio/ogg">
        <source src="archivo-audio.mp3" type="audio/mpeg">
      </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

document.addEventListener('click', playSound);
