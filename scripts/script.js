document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const nameInput = document.getElementById('nameInput');
    const previewImage = document.getElementById('previewImage');
    const builderLink = document.getElementById('builderLink');
    const previewSection = document.getElementById('preview');
  
    generateBtn.addEventListener('click', () => {
      const name = nameInput.value.trim() || 'custom';
      const safeName = encodeURIComponent(name.toLowerCase());
  
      // Update image and link
      previewImage.src = `assets/images/sample_${safeName}_preview.png`;
      previewImage.alt = `${name} Desk Plaque Preview`;
      builderLink.href = `builder.html?design=${safeName}`;
  
      // Reveal preview
      previewSection.style.display = 'block';
    });
  });
  