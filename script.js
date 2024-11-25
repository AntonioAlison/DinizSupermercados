const track = document.getElementById('carouselTrack');
  const totalSlides = track.children.length;
  let index = 0;

  function moveToNextSlide() {
      // Avança para a próxima imagem
      index++;
      if (index >= totalSlides) {
          index = 0;
      }

      // Ajusta a posição de todos os slides
      track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moveToNextSlide, 3000); // Mudar a cada 3 segundos

  