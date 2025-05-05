document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const textInput = document.getElementById('textInput');
  const previewImage = document.getElementById('previewImage');
  const builderLink = document.getElementById('builderLink');
  const previewSection = document.getElementById('preview');
  const backToTopButton = document.querySelector('.back-to-top');

  // Handle the "Generate Build" button click
  generateButton?.addEventListener('click', () => {
    const name = textInput.value.trim() || 'custom';
    const safeName = encodeURIComponent(name.toLowerCase());

    // Dynamically set the preview image and link
    previewImage.src = `assets/images/sample_${safeName}_preview.png`;
    previewImage.alt = `${name} Desk Plaque Preview`;
    builderLink.href = `builder.html?design=${safeName}`;
    previewSection.style.display = 'block';
  });

  // Handle "Back to Top" visibility
  window.addEventListener('scroll', () => {
    if (backToTopButton) {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      backToTopButton.style.display = scrollY > 100 ? 'block' : 'none';
    }
  });
});
