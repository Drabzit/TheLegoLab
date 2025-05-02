// script.js

// Basic LEGO Parts Database
const legoPartsDatabase = {
    "Plate 1 x 8": { partId: "3460", name: "Plate 1 x 8", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3460.png" },
    "Plate 1 x 6": { partId: "3666", name: "Plate 1 x 6", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3666.png" },
    "Brick 1 x 2": { partId: "3004", name: "Brick 1 x 2", color: "White", image: "https://img.bricklink.com/ItemImage/PN/1/3004.png" },
    "Brick 1 x 1": { partId: "3005", name: "Brick 1 x 1", color: "White", image: "https://img.bricklink.com/ItemImage/PN/1/3005.png" },
    "Plate 1 x 2": { partId: "3023", name: "Plate 1 x 2", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3023.png" },
    "Plate 1 x 1": { partId: "3024", name: "Plate 1 x 1", color: "Black", image: "https://img.bricklink.com/ItemImage/PN/11/3024.png" },
    "Tile 1 x 1": { partId: "3070b", name: "Tile 1 x 1", color: "White", image: "https://img.bricklink.com/ItemImage/PN/1/3070b.png" },
    "Tile 1 x 2": { partId: "3069b", name: "Tile 1 x 2", color: "White", image: "https://img.bricklink.com/ItemImage/PN/1/3069b.png" },
    "Round Plate 1 x 1": { partId: "4073", name: "Plate Round 1 x 1", color: "Red", image: "https://img.bricklink.com/ItemImage/PN/5/4073.png" }
};

window.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const outputSection = document.getElementById('output-section');
    const textInput = document.getElementById('textInput');

    generateButton.addEventListener('click', () => {
        const userText = textInput.value.toLowerCase();

        if (userText.includes('chris')) {
            generateChrisPlaque();
        } else {
            outputSection.innerHTML = `<p>No matching design found. Try typing "Chris".</p>`;
        }
    });
});

function generateChrisPlaque() {
    const bricksNeeded = [
        { part: "Plate 1 x 8", qty: 4, purpose: "Base frame" },
        { part: "Plate 1 x 6", qty: 2, purpose: "Base extension" },
        { part: "Brick 1 x 2", qty: 20, purpose: "White background fill" },
        { part: "Brick 1 x 1", qty: 10, purpose: "White background details" },
        { part: "Plate 1 x 2", qty: 15, purpose: "Lettering black" },
        { part: "Plate 1 x 1", qty: 10, purpose: "Lettering detailing" },
        { part: "Tile 1 x 2", qty: 10, purpose: "Surface finishing" },
        { part: "Tile 1 x 1", qty: 6, purpose: "Surface smoothing" },
        { part: "Round Plate 1 x 1", qty: 4, purpose: "Decorative corners" }
    ];

    const brickListHTML = `
        <h3>🧱 Brick List</h3>
        <table>
            <tr><th>Image</th><th>Part</th><th>Color</th><th>Quantity</th><th>Purpose</th></tr>
            ${bricksNeeded.map(brick => {
                const data = legoPartsDatabase[brick.part];
                return `
                    <tr>
                        <td><img src="${data.image}" alt="${data.name}" width="40"></td>
                        <td>${data.name}</td>
                        <td>${data.color}</td>
                        <td>${brick.qty}</td>
                        <td>${brick.purpose}</td>
                    </tr>`;
            }).join('')}
        </table>
    `;

    const instructionsHTML = `
        <h3>🛠️ Build Instructions</h3>
        <ol>
            <li><strong>Base:</strong> Use 4x Plate 1 x 8 + 2x Plate 1 x 6 (Black) to form a 20-stud base.</li>
            <li><strong>Background:</strong> Use Brick 1 x 2 and 1 x 1 (White) to build a two-layer background.</li>
            <li><strong>Lettering:</strong> Use black Plates to write "CHRIS" across the plaque evenly spaced.</li>
            <li><strong>Finishing:</strong> Add white Tiles between and around letters for a smooth surface.</li>
            <li><strong>Decorative:</strong> Place 1x1 Round Red Plates in each corner for accent.</li>
        </ol>
        <h3>📸 Visual Preview</h3>
        <img src="Assets/images/sample_chris_preview.png" alt="Chris Plaque Preview" width="400" style="border: 2px solid #ccc; border-radius: 8px;">
    `;

    document.getElementById('output-section').innerHTML = brickListHTML + instructionsHTML;
}

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  