// Copyright © 2025 Algorivm

for (const grid of document.querySelectorAll('.image-grid')) {
  function removeActiveImages() {
    grid.querySelectorAll('img.is-active').forEach(img => {
      img.classList.remove('is-active')
    })
    grid.classList.remove('has-active')
  }

  for (const image of grid.querySelectorAll('img')) {
    image.addEventListener('click', () => {
      if (image.classList.contains('is-active')) {
        removeActiveImages()
      } else {
        removeActiveImages()
        image.classList.add('is-active')
        grid.classList.add('has-active')
      }
    })
  }

  for (const spoiler of grid.querySelectorAll('.spoiler')) {
    spoiler.addEventListener('click', () => {
      removeActiveImages()
    })
  }
}
