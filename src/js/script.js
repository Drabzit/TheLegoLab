// script.js

// Fetch and manage Lego parts data type LegoPart = { partId: string; name: string; color: string; image: string; };

const legoPartsDatabase = { "1x8 Plate": { partId: "3460", name: "Plate 1 x 8", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3460.png" }, "2x2 Brick": { partId: "3003", name: "Brick 2 x 2", color: "White", image: "https://img.bricklink.com/ItemImage/PN/1/3003.png" }, "1x1 Plate": { partId: "3024", name: "Plate 1 x 1", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3024.png" }, "1x1 Tile": { partId: "3070b", name: "Tile 1 x 1", color: "White", image: "https://img.bricklink.com/ItemImage/PN/1/3070b.png" }, "1x2 Plate": { partId: "3023", name: "Plate 1 x 2", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3023.png" }, "1x1 Round Plate": { partId: "4073", name: "Plate Round 1 x 1", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/4073.png" } };

window.addEventListener('DOMContentLoaded', () => { const processButton = document.getElementById('processButton');

processButton.addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value.trim().toLowerCase();
    const outputSection = document.getElementById('output-section');
    const brickList = document.getElementById('brickList');
    const instructionGuide = document.getElementById('instructionGuide');

    brickList.innerHTML = '';
    instructionGuide.innerHTML = '';

    if (textInput.includes('desk name plaque') && textInput.includes('chris')) {
        const bricksNeeded = [
            { part: "1x8 Plate", quantity: 5, purpose: "Base frame" },
            { part: "2x2 Brick", quantity: 10, purpose: "Background fill" },
            { part: "1x1 Plate", quantity: 20, purpose: "Letter outlining" },
            { part: "1x1 Tile", quantity: 15, purpose: "Smooth finishing" },
            { part: "1x2 Plate", quantity: 15, purpose: "Letter detailing" },
            { part: "1x1 Round Plate", quantity: 5, purpose: "Decorative corners" }
        ];

        brickList.innerHTML = generateBrickList(bricksNeeded);
        instructionGuide.innerHTML = generateInstructions();
        outputSection.style.display = 'block';
    } else {
        brickList.innerHTML = `<p>No matching design found for your input. Please try another idea.</p>`;
        instructionGuide.innerHTML = '';
        outputSection.style.display = 'block';
    }
});
// Add this inside the 'processButton' click event after outputSection.style.display = 'block';
const previewContainer = document.getElementById('previewContainer');
previewContainer.innerHTML = ''; // Clear any existing previews

const previewImage = document.createElement('img');
previewImage.src = 'Assets/images/sample_chris_preview.png'; // Add a sample image to this path
previewImage.alt = 'Preview of Chris LEGO Plaque';
previewImage.style.cursor = 'pointer';
previewImage.style.width = '300px';
previewImage.addEventListener('click', () => {
    window.location.href = 'build.html?design=chris';
});
previewContainer.appendChild(previewImage);
});

function generateBrickList(bricks) { let html = <h3>Lego Brick List</h3><table><tr><th>Image</th><th>Part</th><th>Color</th><th>Quantity</th><th>Purpose</th></tr>; bricks.forEach(brick => { const data = legoPartsDatabase[brick.part]; html +=  <tr> <td><img src="${data.image}" alt="${data.name}" width="50"></td> <td>${data.name}</td> <td>${data.color}</td> <td>${brick.quantity}</td> <td>${brick.purpose}</td> </tr>; }); html += </table>; return html; }

function generateInstructions() { return <h3>Instruction Guide</h3> <ol> <li><strong>Base Frame Assembly:</strong> Place five 1x8 Black Plates horizontally to form the nameplate foundation.</li> <li><strong>Background Build:</strong> Fill the center area with 2x2 White Bricks, ensuring a flat, even surface.</li> <li><strong>Letter Construction - 'CHRIS':</strong> Using 1x1 and 1x2 Black Plates, build each letter atop the white background, centering horizontally.</li> <li><strong>Tile Finish:</strong> Place 1x1 White Tiles around gaps to smooth the surface cleanly around letters.</li> <li><strong>Decorative Touch:</strong> Add a 1x1 Round Black Plate on each corner for a neat accent.</li> </ol> <h3>Visual Mockup (Simple)</h3> <div style="background: lightgray; padding: 10px; font-family: monospace;"> <pre> +--------------------------------+ |    C  H  R  I  S              | |                               | +--------------------------------+ </pre> </div> <h3>Stud Grid Mockup</h3> <div style="display: grid; grid-template-columns: repeat(20, 20px); grid-gap: 2px; background: #ddd; padding: 10px; width: fit-content;"> ${generateStudGrid(20, 6)} </div> <p><em>Note: This is a simple representation of a studded surface. Actual letter details are abstracted for now.</em></p>; }

function generateStudGrid(columns, rows) { const total = columns * rows; return Array(total).fill('').map((_, idx) => { const col = idx % columns; const fill = col >= 2 && col < 7 ? '#000' : '#fff'; return <div style="width: 20px; height: 20px; background: ${fill}; border-radius: 50%;"></div>; }).join(''); }

