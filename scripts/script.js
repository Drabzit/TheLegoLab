document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const textInput = document.getElementById('textInput');
    const previewImage = document.getElementById('previewImage');
    const builderLink = document.getElementById('builderLink');
    const previewSection = document.getElementById('preview');
  
    generateButton.addEventListener('click', () => {
      const name = textInput.value.trim() || 'custom';
      const safeName = encodeURIComponent(name.toLowerCase()); // Make sure to encode the name
  
      // Update image source and link for builder page
      previewImage.src = `assets/images/sample_${safeName}_preview.png`; // Adjust the image name based on input
      previewImage.alt = `${name} Desk Plaque Preview`;
      builderLink.href = `builder.html?design=${safeName}`; // Open builder with the same design
  
      // Reveal the preview section
      previewSection.style.display = 'block';
    });
  });

  window.onscroll = function () {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
