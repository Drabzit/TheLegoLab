document.addEventListener('DOMContentLoaded', () => {
  const brickList = document.getElementById('brickList');
  const instructionGuide = document.getElementById('instructionGuide');

  brickList.innerHTML = '<h2>Bricks Needed</h2><p>1x8 Plates, 2x2 Bricks, etc.</p>';
  instructionGuide.innerHTML = '<h2>Instructions</h2><ol><li>Assemble base</li><li>Build letters</li></ol>';

  document.getElementById('downloadPdfBtn').addEventListener('click', () => alert('PDF Download triggered'));
  document.getElementById('saveToExploreBtn').addEventListener('click', () => {
    const builds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
    builds.push({ name: 'Chris Plaque', image: 'Assets/images/mockup_chris.png' });
    localStorage.setItem('savedBuilds', JSON.stringify(builds));
    alert('Build saved to Explore!');
  });
});