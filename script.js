document.addEventListener('DOMContentLoaded', () => {
  // Set up background video
  const videoElement = document.getElementById('bg-video');
  const sourceElement = videoElement.querySelector('source');
  
  if (config.backgroundVideoUrl) {
    videoElement.src = config.backgroundVideoUrl;
    videoElement.load();
    videoElement.play().catch(e => console.error("Autoplay prevented:", e));
  } else {
    videoElement.style.display = 'none';
  }

  // Render cards
  const container = document.getElementById('card-container');
  
  config.cards.forEach((cardData, index) => {
    // Create card element
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.2}s`;
    
    // Safety check for empty or missing image
    const imgSrc = cardData.flowerImage ? cardData.flowerImage : 'https://via.placeholder.com/200?text=Flower';
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          <img src="${imgSrc}" alt="Flower Card Front">
        </div>
        <div class="card-face card-back">
          <p>${cardData.note}</p>
        </div>
      </div>
    `;

    // Add click event for flipping
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });

    container.appendChild(card);
  });
});
