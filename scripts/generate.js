document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('processButton');
  const preview = document.getElementById('previewImage');
  btn.addEventListener('click', () => {
    preview.style.display = 'block';
  });
  preview.addEventListener('click', () => {
    window.location.href = 'build.html?design=chris';
  });
});