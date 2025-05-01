document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('exploreContainer');
  const builds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  builds.forEach(build => {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${build.image}" width="150"><p>${build.name}</p>`;
    container.appendChild(div);
  });
});